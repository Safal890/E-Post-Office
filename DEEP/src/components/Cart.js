import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Cart = ({ cart, onClose, removeFromCart, updateQuantity }) => {
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // Modified checkout function - just redirects without clearing cart
  const handleCheckout = () => {
    // Redirect to details page without clearing the cart
    window.location.href = '/details';
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content cart-modal-content">
        <button 
          onClick={onClose}
          className="close-button"
        >
          <FaTimes/>
        </button>
        <h2 style={{ marginBottom: '20px' }}>Your Cart</h2>
        
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <div style={{ marginBottom: '20px' }}>
              {cart.map(item => (
                <div key={item.id} className="cart-item">
                  <div>
                    <h3 style={{ fontSize: '16px', marginBottom: '5px' }}>{item.name}</h3>
                    <p style={{ color: '#666', fontSize: '14px' }}>₹{item.price} per unit</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        style={{
                          width: '30px',
                          height: '30px',
                          border: '1px solid #ccc',
                          background: 'none',
                          cursor: 'pointer'
                        }}
                      >
                        -
                      </button>
                      <span style={{ 
                        width: '40px', 
                        textAlign: 'center',
                        display: 'inline-block' 
                      }}>
                        {item.quantity}
                      </span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        style={{
                          width: '30px',
                          height: '30px',
                          border: '1px solid #ccc',
                          background: 'none',
                          cursor: 'pointer'
                        }}
                      >
                        +
                      </button>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      style={{
                        backgroundColor: '#ff6b6b',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        padding: '5px 10px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div style={{ 
              borderTop: '1px solid #e0e0e0',
              paddingTop: '15px',
              marginBottom: '20px' 
            }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                fontWeight: 'bold',
                fontSize: '18px'
              }}>
                <span>Total:</span>
                <span>₹{totalPrice.toFixed(2)}</span>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '10px' }}>
              <button 
                onClick={onClose}
                style={{
                  backgroundColor: '#666',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '10px 15px',
                  flex: 1,
                  cursor: 'pointer'
                }}
              >
                Continue Shopping
              </button>
              <button 
                onClick={handleCheckout}
                style={{
                  backgroundColor: '#003366',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '10px 15px',
                  flex: 1,
                  cursor: 'pointer'
                }}
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;