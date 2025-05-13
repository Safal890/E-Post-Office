import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements
} from '@stripe/react-stripe-js';
import axios from 'axios';

// Replace with your Stripe publishable key
const stripePromise = loadStripe('pk_test_51RDt4TRtI7xzdvdPvHGmja4209iWAzfkNLu5sMuo1vwOXDcOvv9onfvJbDDaGVOvztPemFaduAtGrlLC7kZSKaxj00VTfCJ85f');

// API base URL
const API_URL = 'http://localhost:5000/api';

// Payment form component that uses Stripe elements
const CheckoutForm = ({ amount, customerDetails, products }) => {
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState('');
  const [orderId, setOrderId] = useState(null);
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  useEffect(() => {
    // Create a payment intent as soon as the page loads
    const createPaymentIntent = async () => {
      try {
        console.log('Creating payment intent for amount:', amount);
        
        const response = await axios.post(`${API_URL}/create-payment-intent`, {
          amount,
          customerDetails,
          products
        });
        
        console.log('Payment intent created:', response.data);
        setClientSecret(response.data.clientSecret);
        setOrderId(response.data.orderId);
      } catch (error) {
        console.error('Error creating payment intent:', error);
        if (error.response) {
          setError(`Error (${error.response.status}): ${error.response.data.error || 'Unknown error'}`);
        } else if (error.request) {
          setError('Server is not responding. Please check your connection.');
        } else {
          setError('An unexpected error occurred while setting up the payment. Please try again.');
        }
      }
    };

    if (amount > 0) {
      createPaymentIntent();
    } else {
      console.error('Invalid amount for payment intent:', amount);
      setError('Invalid order amount. Please check your cart and try again.');
    }
  }, [amount, customerDetails, products]);

  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    if (!stripe || !elements) {
      // Stripe.js hasn't loaded yet. Make sure to disable form submission until Stripe.js has loaded
      console.error('Stripe.js has not loaded yet');
      setError('Payment processing is initializing. Please try again in a moment.');
      setProcessing(false);
      return;
    }

    try {
      console.log('Confirming card payment with secret:', clientSecret.substring(0, 10) + '...');
      
      const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: customerDetails.fullName,
            email: customerDetails.email,
            phone: customerDetails.phone,
            address: {
              line1: customerDetails.address,
              city: customerDetails.city,
              state: customerDetails.state,
              postal_code: customerDetails.pincode
            }
          }
        }
      });

      if (payload.error) {
        console.error('Payment confirmation error:', payload.error);
        setError(`Payment failed: ${payload.error.message}`);
        setProcessing(false);
      } else {
        console.log('Payment succeeded:', payload.paymentIntent.id);
        
        // Confirm the payment on the backend
        const confirmResponse = await axios.post(`${API_URL}/confirm-payment`, {
          paymentIntentId: payload.paymentIntent.id,
          orderId
        });
        
        console.log('Payment confirmation response:', confirmResponse.data);
        
        setError(null);
        setProcessing(false);
        setSucceeded(true);
        
        // Clear cart from localStorage
        localStorage.setItem('cart', JSON.stringify([]));
        
        // Redirect after a short delay
        setTimeout(() => {
          navigate('/', { state: { paymentSuccess: true } });
        }, 2000);
      }
    } catch (error) {
      console.error('Error processing payment:', error);
      if (error.response) {
        setError(`Error (${error.response.status}): ${error.response.data.error || 'Unknown error'}`);
      } else if (error.request) {
        setError('Server is not responding. Please check your connection.');
      } else {
        setError('An unexpected error occurred while processing your payment. Please try again.');
      }
      setProcessing(false);
    }
  };

  const handleBack = () => {
    navigate('/Details');
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '0 auto' }}>
      <div className="card-details" style={{ marginBottom: '20px' }}>
        <h3 style={{ color: '#003366', marginBottom: '15px' }}>Card Details</h3>
        <div style={{ 
          padding: '15px', 
          border: '1px solid #ccc', 
          borderRadius: '4px',
          backgroundColor: 'white'
        }}>
          <CardElement
            id="card-element"
            onChange={handleChange}
            options={{
              style: {
                base: {
                  color: '#32325d',
                  fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                  fontSmoothing: 'antialiased',
                  fontSize: '16px',
                  '::placeholder': {
                    color: '#aab7c4'
                  }
                },
                invalid: {
                  color: '#fa755a',
                  iconColor: '#fa755a'
                }
              }
            }}
          />
        </div>
      </div>

      {/* Show any error that happens when processing the payment */}
      {error && (
        <div style={{ 
          padding: '10px', 
          color: '#c62828', 
          backgroundColor: '#ffebee', 
          borderRadius: '4px',
          marginBottom: '20px'
        }} role="alert">
          {error}
        </div>
      )}

      {/* Show success message upon completion */}
      {succeeded && (
        <div style={{ 
          padding: '10px', 
          color: '#2e7d32', 
          backgroundColor: '#e8f5e9', 
          borderRadius: '4px',
          marginBottom: '20px'
        }}>
          Payment succeeded! Your order has been placed.
        </div>
      )}

      <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
        <button
          type="button"
          onClick={handleBack}
          style={{
            backgroundColor: '#666',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            padding: '12px 20px',
            cursor: 'pointer',
            flex: 1
          }}
          disabled={processing}
        >
          Back
        </button>
        <button
          type="submit"
          style={{
            backgroundColor: '#003366',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            padding: '12px 20px',
            cursor: 'pointer',
            flex: 2,
            fontWeight: 'bold'
          }}
          disabled={processing || disabled || succeeded || !clientSecret}
        >
          {processing ? "Processing..." : `Pay $${amount}`}
        </button>
      </div>
    </form>
  );
};

// Main Payment component that wraps the form with Stripe Elements
const Payment = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [customerDetails, setCustomerDetails] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Load cart from localStorage
    const savedCart = localStorage.getItem('cart');
    const cartItems = savedCart ? JSON.parse(savedCart) : [];
    setCart(cartItems);

    // Calculate total
    const cartTotal = cartItems.reduce((sum, item) => 
      sum + (item.price * item.quantity), 0).toFixed(2);
    setTotal(cartTotal);

    // Get customer details from state or navigate back to details page
    if (location.state && location.state.customerDetails) {
      console.log('Customer details received:', location.state.customerDetails);
      setCustomerDetails(location.state.customerDetails);
    } else {
      console.error('No customer details in location state');
      // If no customer details are present, redirect back to the details page
      navigate('/Details');
    }
  }, [location, navigate]);

  if (!customerDetails) {
    return <div className="loading" style={{ textAlign: 'center', padding: '50px' }}>Loading customer details...</div>;
  }

  return (
    <div className="payment-container" style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ color: '#003366', marginBottom: '20px' }}>Complete Your Payment</h1>
      
      <div className="payment-summary" style={{ marginBottom: '30px' }}>
        <h2 style={{ borderBottom: '1px solid #eee', paddingBottom: '10px' }}>Order Summary</h2>
        
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {cart.map((item, index) => (
                <li key={index} style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  padding: '10px 0',
                  borderBottom: '1px solid #eee'
                }}>
                  <div>
                    <strong>{item.name}</strong> <span style={{ color: '#666' }}>x {item.quantity}</span>
                  </div>
                  <div>${(item.price * item.quantity).toFixed(2)}</div>
                </li>
              ))}
            </ul>
            
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              marginTop: '20px',
              padding: '15px 0',
              borderTop: '2px solid #003366',
              fontWeight: 'bold',
              fontSize: '1.2rem'
            }}>
              <span>Total</span>
              <span>${total}</span>
            </div>
          </>
        )}
      </div>

      <div className="payment-form" style={{ 
        backgroundColor: '#f9f9f9', 
        padding: '20px', 
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
      }}>
        <Elements stripe={stripePromise}>
          <CheckoutForm 
            amount={parseFloat(total)} 
            customerDetails={customerDetails}
            products={cart}
          />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;