import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import logoImage from './img/logoepost.png';

// Import pages
import Home from './components/Home';
import Products from './components/Products';
import Track from './components/Track';
import Contact from './components/Contact';
import Forgot from './components/Forgot';
import Payment from './components/Payment';

// Import components
import Cart from './components/Cart';
import User from './components/User';

// Import styles
import './App.css';
import Details from './components/Details';

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);
  
  // Load cart from localStorage on initial render
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Add to cart function
  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    
    alert(`${product.name} added to cart!`);
  };

  // Remove from cart function
  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  // Update quantity function
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCart(cart.map(item => 
      item.id === productId 
        ? { ...item, quantity: newQuantity } 
        : item
    ));
  };

  // Clear cart function
  const clearCart = () => {
    setCart([]);
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Router>
      <AppContent 
        showLoginModal={showLoginModal}
        setShowLoginModal={setShowLoginModal}
        showCartModal={showCartModal}
        setShowCartModal={setShowCartModal}
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
        clearCart={clearCart}
        totalItems={totalItems}
      />
    </Router>
  );
}

function AppContent({
  showLoginModal,
  setShowLoginModal,
  showCartModal,
  setShowCartModal,
  cart,
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  totalItems
}) {
  const location = useLocation();
  
  return (
    <div className="app-container">
      {/* Header */}
      <header>
        {/* Logo */}
        <div className="logo">
          <img src={logoImage} alt="Your Logo"/>
        </div>

        {/* Navigation Menu */}
        <nav>
          <ul>
            <li>
              <Link 
                to="/"
                className={`nav-button ${location.pathname === '/' ? 'active' : ''}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/products"
                className={`nav-button ${location.pathname === '/products' ? 'active' : ''}`}
              >
                Products
              </Link>
            </li>
            <li>
              <Link 
                to="/track"
                className={`nav-button ${location.pathname === '/track' ? 'active' : ''}`}
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                to="/contact"
                className={`nav-button ${location.pathname === '/contact' ? 'active' : ''}`}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        {/* User and Cart Buttons */}
        <div className="user-cart-buttons">
          <button 
            onClick={() => setShowLoginModal(true)}
            className="header-button"
          >
            <FaUser />
          </button>
          <button 
            onClick={() => setShowCartModal(true)}
            className="header-button cart-button"
          >
            <FaShoppingCart />
            {totalItems > 0 && (
              <span className="cart-count">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Forgot" element={<Forgot setShowLoginModal={setShowLoginModal} />} />
          <Route path="/products" element={<Products addToCart={addToCart} />} />
          <Route path="/track" element={<Track />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Details" element={<Details setShowCartModal={setShowCartModal} clearCart={clearCart}/>}/>
          <Route path="/Payment" element= {<Payment/>}/>
        </Routes>
      </main>

      {/* Footer */}
      <footer>
        <p>© 2025 E-Post Office. All rights reserved By Safal Sachdeva.</p>
      </footer>

      {/* Login/Register Modal */}
      {showLoginModal && (
        <User 
          onClose={() => setShowLoginModal(false)}
          setShowLoginModal={setShowLoginModal}
        />
      )}

      {/* Cart Modal */}
      {showCartModal && (
        <Cart 
          cart={cart} 
          onClose={() => setShowCartModal(false)} 
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
        />
      )}
    </div>
  );
}

export default App;