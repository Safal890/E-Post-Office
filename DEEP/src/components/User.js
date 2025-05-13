import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const User = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Your login logic here
    console.log("Login form submitted");
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // Your registration logic here
    console.log("Register form submitted");
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    onClose(); // Close the modal first
    navigate('/Forgot'); // Then navigate to forgot password page
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button
          onClick={onClose}
          className="close-button"
        >
          <FaTimes />
        </button>
        <div className="modal-tabs">
          <button
            onClick={() => setIsLogin(true)}
            className={`modal-tab ${isLogin ? 'active' : 'inactive'}`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`modal-tab ${!isLogin ? 'active' : 'inactive'}`}
          >
            Register
          </button>
        </div>

        {isLogin ? (
          <form onSubmit={handleLoginSubmit}>
            <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Login to Your Account</h2>
            <div className="form-group">
              <label>Email/Username</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" />
            </div>
            <div style={{ marginBottom: '20px' }}>
              {/* Changed to button styled as a link for better control */}
              <button
                onClick={handleForgotPassword}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#003366',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  padding: 0
                }}
              >
                Forgot Password?
              </button>
            </div>
            <button
              type="submit"
              className="btn btn-block"
            >
              Login
            </button>
          </form>
        ) : (
          <form onSubmit={handleRegisterSubmit}>
            <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Create a New Account</h2>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" />
            </div>
            <div className="form-group">
              <label>Mobile Number</label>
              <input type="tel" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" />
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input type="password" />
            </div>
            <button
              type="submit"
              className="btn btn-block"
            >
              Register
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default User;