import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// Make sure this matches your server URL
const API_URL = 'http://localhost:5000/api';

const Details = ({ setShowCartModal }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    notes: ''
  });
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    console.log('Form submitted with data:', formData);
    
    try {
      // Save customer details to the backend
      const response = await axios.post(`${API_URL}/save-customer-details`, {
        customerDetails: formData
      });
      
      console.log('Server response:', response.data);
      
      // Navigate to payment page with customer details
      navigate('/payment', { 
        state: { 
          customerDetails: formData 
        } 
      });
    } catch (error) {
      console.error('Error saving customer details:', error);
      
      if (error.response) {
        console.error('Error response data:', error.response.data);
        console.error('Error response status:', error.response.status);
        setError(`Error (${error.response.status}): ${error.response.data.error || 'Unknown error'}`);
      } else if (error.request) {
        console.error('No response received:', error.request);
        setError('Server is not responding. Please check your connection.');
      } else {
        console.error('Error message:', error.message);
        setError('An unexpected error occurred. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleBackToCart = () => {
    // Check if setShowCartModal is available before calling it
    if (typeof setShowCartModal === 'function') {
      setShowCartModal(true);
    } else {
      // Fallback: navigate to a cart page if we can't use the modal
      navigate('/');
    }
  };

  return (
    <div className="container" style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ color: '#003366', marginBottom: '20px' }}>Delivery Details</h1>
      
      {error && (
        <div style={{ 
          padding: '10px', 
          backgroundColor: '#ffebee', 
          color: '#c62828', 
          borderRadius: '4px',
          marginBottom: '15px'
        }}>
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group" style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Full Name *
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px'
            }}
          />
        </div>

        <div style={{ display: 'flex', gap: '15px' }}>
          <div className="form-group" style={{ marginBottom: '15px', flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '4px'
              }}
            />
          </div>

          <div className="form-group" style={{ marginBottom: '15px', flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Phone *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '4px'
              }}
            />
          </div>
        </div>

        <div className="form-group" style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Delivery Address *
          </label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            rows="3"
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px'
            }}
          />
        </div>

        <div style={{ display: 'flex', gap: '15px' }}>
          <div className="form-group" style={{ marginBottom: '15px', flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              City *
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '4px'
              }}
            />
          </div>

          <div className="form-group" style={{ marginBottom: '15px', flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              State *
            </label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '4px'
              }}
            />
          </div>

          <div className="form-group" style={{ marginBottom: '15px', flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Pincode *
            </label>
            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '4px'
              }}
            />
          </div>
        </div>

        <div className="form-group" style={{ marginBottom: '25px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Additional Notes
          </label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows="2"
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px'
            }}
            placeholder="Special instructions for delivery"
          />
        </div>

        <div style={{ display: 'flex', gap: '15px' }}>
          <button
            type="button"
            onClick={handleBackToCart}
            style={{
              backgroundColor: '#666',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              padding: '12px 20px',
              cursor: 'pointer',
              flex: 1
            }}
            disabled={loading}
          >
            Back to Cart
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
            disabled={loading}
          >
            {loading ? 'Processing...' : 'NEXT: PROCEED TO PAYMENT'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Details;