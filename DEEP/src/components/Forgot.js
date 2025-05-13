import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/Forgot.css';

const ForgotPassword = ({ setShowLoginModal }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ text: '', isError: false });
  const [isEmailSent, setIsEmailSent] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Reset messages
    setMessage({ text: '', isError: false });
    
    // Validate email
    if (!email.trim()) {
      setMessage({ text: 'Email is required', isError: true });
      return;
    }
    
    if (!validateEmail(email)) {
      setMessage({ text: 'Please enter a valid email address', isError: true });
      return;
    }
    
    // Submit form
    setIsSubmitting(true);
    
    try {
      // This is where you'd typically make an API call
      // For demo purposes, we'll simulate a successful response after a delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsEmailSent(true);
      setMessage({ 
        text: 'Password reset instructions have been sent to your email', 
        isError: false 
      });
    } catch (error) {
      setMessage({ 
        text: 'An error occurred. Please try again later.', 
        isError: true 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackToLogin = () => {
    // Navigate back to the home page
    navigate('/');
    
    // Open the login modal after a short delay to ensure navigation completes first
    setTimeout(() => {
      if (setShowLoginModal) {
        setShowLoginModal(true);
      }
    }, 100);
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-card">
        <h1>Forgot Password</h1>
        
        {!isEmailSent ? (
          <>
            <p className="instruction-text">
              Enter your email address and we'll send you instructions to reset your password.
            </p>
            
            <form onSubmit={handleSubmit} className="forgot-password-form">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  disabled={isSubmitting}
                />
              </div>
              
              {message.text && (
                <div className={`message ${message.isError ? 'error' : 'success'}`}>
                  {message.text}
                </div>
              )}
              
              <button 
                type="submit" 
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Reset Password'}
              </button>
            </form>
            
            <div className="links">
              <button 
                onClick={handleBackToLogin}
                className="login-link"  // Changed from header-button to login-link
              >
                Back to Login
              </button>
            </div>
          </>
        ) : (
          <div className="success-container">
            <div className="success-icon">✓</div>
            <h2>Check Your Email</h2>
            <p>We've sent password reset instructions to:</p>
            <p className="email-highlight">{email}</p>
            <p className="small-text">
              If you don't see the email, check other places it might be, like your junk, spam, 
              social, or other folders.
            </p>
            <button 
              onClick={() => setIsEmailSent(false)} 
              className="submit-button secondary"
            >
              Try a different email
            </button>
            <div className="links">
              <button 
                onClick={handleBackToLogin}
                className="login-link"
              >
                Back to Login
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;