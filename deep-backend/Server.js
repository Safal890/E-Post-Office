// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); // Use environment variable
const mongoose = require('mongoose');

// Initialize express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: 'http://localhost:3000' })); // Allow your React app to make requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB connection error:', err));

// Define mongoose schemas and models
const OrderSchema = new mongoose.Schema({
  customerDetails: {
    fullName: String,
    email: String,
    phone: String,
    address: String,
    city: String,
    state: String,
    pincode: String,
    notes: String
  },
  products: [
    {
      id: String,
      name: String,
      price: Number,
      quantity: Number
    }
  ],
  total: Number,
  paymentId: String,
  status: {
    type: String,
    enum: ['pending', 'completed', 'failed'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Order = mongoose.model('Order', OrderSchema);

// API endpoints
app.post('/api/create-payment-intent', async (req, res) => {
  try {
    const { amount, customerDetails, products } = req.body;
    
    // Validate the request
    if (!amount || amount <= 0) {
      return res.status(400).json({ error: 'Invalid amount' });
    }
    
    if (!customerDetails || !customerDetails.email) {
      return res.status(400).json({ error: 'Customer details required' });
    }
    
    // Create a payment intent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 10), // Stripe requires amount in cents
      currency: 'usd',
      metadata: {
        integration_check: 'accept_a_payment',
        customer_email: customerDetails.email,
        order_id: new mongoose.Types.ObjectId().toString()
      }
    });

    // Save the order with pending status
    const order = new Order({
      customerDetails,
      products,
      total: amount,
      paymentId: paymentIntent.id,
      status: 'pending'
    });

    await order.save();

    console.log('Order created:', order._id);
    console.log('Payment intent created:', paymentIntent.id);

    // Send payment intent client secret to the client
    res.json({
      clientSecret: paymentIntent.client_secret,
      orderId: order._id
    });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/confirm-payment', async (req, res) => {
  try {
    const { paymentIntentId, orderId } = req.body;
    
    if (!paymentIntentId || !orderId) {
      return res.status(400).json({ error: 'Payment intent ID and order ID are required' });
    }
    
    // Verify payment with Stripe
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
    
    if (paymentIntent.status === 'succeeded') {
      // Update order status in the database
      const order = await Order.findByIdAndUpdate(
        orderId,
        { status: 'completed' },
        { new: true }
      );
      
      if (!order) {
        return res.status(404).json({ error: 'Order not found' });
      }
      
      console.log('Payment confirmed for order:', orderId);
      res.json({ success: true, order });
    } else {
      // Update order status to failed
      await Order.findByIdAndUpdate(
        orderId,
        { status: 'failed' },
        { new: true }
      );
      
      res.status(400).json({ 
        success: false, 
        message: 'Payment verification failed',
        status: paymentIntent.status 
      });
    }
  } catch (error) {
    console.error('Error confirming payment:', error);
    res.status(500).json({ error: error.message });
  }
});

// Save customer details before payment
app.post('/api/save-customer-details', async (req, res) => {
  try {
    const { customerDetails } = req.body;
    
    // Validate the request
    if (!customerDetails || !customerDetails.fullName || !customerDetails.email) {
      return res.status(400).json({ error: 'Invalid customer details' });
    }
    
    // In a real application, you might want to validate or store this temporarily
    console.log('Customer details saved:', customerDetails.email);
    res.json({ success: true, id: new mongoose.Types.ObjectId().toString() });
  } catch (error) {
    console.error('Error saving customer details:', error);
    res.status(500).json({ error: error.message });
  }
});

// Get all orders (for admin use)
app.get('/api/orders', async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ error: error.message });
  }
});

// Get order by ID
app.get('/api/orders/:id', async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json(order);
  } catch (error) {
    console.error('Error fetching order:', error);
    res.status(500).json({ error: error.message });
  }
});

// Add a basic route for testing the server
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});