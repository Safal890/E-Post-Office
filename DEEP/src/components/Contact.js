import React, { useState, useEffect } from 'react';
import './CSS/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [focusedField, setFocusedField] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [formTouched, setFormTouched] = useState({});

  // Track scroll for parallax effects
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleBlur = (fieldName) => {
    setFocusedField(null);
    setFormTouched({ ...formTouched, [fieldName]: true });
    
    // Basic validation when field is blurred
    validateField(fieldName, formData[fieldName]);
  };

  const validateField = (fieldName, value) => {
    let errors = { ...formErrors };
    
    switch (fieldName) {
      case 'name':
        if (!value.trim()) {
          errors.name = 'Name is required';
        } else {
          delete errors.name;
        }
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) {
          errors.email = 'Email is required';
        } else if (!emailRegex.test(value)) {
          errors.email = 'Please enter a valid email address';
        } else {
          delete errors.email;
        }
        break;
      case 'subject':
        if (!value.trim()) {
          errors.subject = 'Subject is required';
        } else {
          delete errors.subject;
        }
        break;
      case 'message':
        if (!value.trim()) {
          errors.message = 'Message is required';
        } else if (value.trim().length < 10) {
          errors.message = 'Message should be at least 10 characters';
        } else {
          delete errors.message;
        }
        break;
      default:
        break;
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    
    if (formTouched[name]) {
      validateField(name, value);
    }
  };

  const validateForm = () => {
    let isValid = true;
    let errors = {};
    let touched = {};
    
    // Validate all fields
    Object.keys(formData).forEach(field => {
      touched[field] = true;
      if (!validateField(field, formData[field])) {
        isValid = false;
      }
    });
    
    setFormTouched(touched);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      // Show gentle animation for errors
      document.querySelectorAll('.form-group.has-error').forEach(el => {
        el.classList.add('shake');
        setTimeout(() => el.classList.remove('shake'), 500);
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setShowNotification(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setFormTouched({});
      setFormErrors({});
      
      // Hide notification after 4 seconds
      setTimeout(() => {
        setShowNotification(false);
      }, 4000);
    }, 1500);
  };

  const teamMembers = [
    {
      name: 'Sarah Johnson',
      position: 'Customer Support Manager',
      email: 'sarah.j@company.com',
      phone: '+1 (555) 123-4567'
    },
    {
      name: 'Michael Chen',
      position: 'Technical Support Specialist',
      email: 'michael.c@company.com',
      phone: '+1 (555) 987-6543'
    },
    {
      name: 'Jessica Rodriguez',
      position: 'Sales Representative',
      email: 'jessica.r@company.com',
      phone: '+1 (555) 456-7890'
    }
  ];

  return (
    <div className="app-container">
        <h1 style={{ transform: `translateY(${scrollY * 0.1}px)` }}>Contact Us</h1>
        <p className="contact-intro">
          We're here to help! Fill out the form below or reach out directly to one of our team members.
        </p>
        
        <div className="contact-container">
          <div 
            className="contact-form-container"
            style={{ transform: `translateY(${scrollY * 0.03}px)` }}
          >
            <h2>Send us a message</h2>
            <form onSubmit={handleSubmit}>
              <div className={`form-group ${formErrors.name ? 'has-error' : ''} ${focusedField === 'name' ? 'focused' : ''}`}>
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => handleFocus('name')}
                  onBlur={() => handleBlur('name')}
                  required
                />
                {formErrors.name && <span className="error-message">{formErrors.name}</span>}
              </div>
              
              <div className={`form-group ${formErrors.email ? 'has-error' : ''} ${focusedField === 'email' ? 'focused' : ''}`}>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus('email')}
                  onBlur={() => handleBlur('email')}
                  required
                />
                {formErrors.email && <span className="error-message">{formErrors.email}</span>}
              </div>
              
              <div className={`form-group ${formErrors.subject ? 'has-error' : ''} ${focusedField === 'subject' ? 'focused' : ''}`}>
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => handleFocus('subject')}
                  onBlur={() => handleBlur('subject')}
                  required
                />
                {formErrors.subject && <span className="error-message">{formErrors.subject}</span>}
              </div>
              
              <div className={`form-group ${formErrors.message ? 'has-error' : ''} ${focusedField === 'message' ? 'focused' : ''}`}>
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus('message')}
                  onBlur={() => handleBlur('message')}
                  required
                ></textarea>
                {formErrors.message && <span className="error-message">{formErrors.message}</span>}
              </div>
              
              <button 
                type="submit" 
                className={`btn btn-block ${isSubmitting ? 'button-loading' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? '' : 'Send Message'}
              </button>
            </form>
          </div>
          
          <div 
            className="contact-info-container"
            style={{ transform: `translateY(${scrollY * -0.02}px)` }}
          >
            <h2>Our Office</h2>
            <div className="office-info">
              <div className="contact-info">
                <span className="info-label">Address:</span>
                <span className="info-value">123 Business Avenue, Suite 500, New York, NY 10001</span>
              </div>
              
              <div className="contact-info">
                <span className="info-label">Phone:</span>
                <span className="info-value">+1 (555) 123-4567</span>
              </div>
              
              <div className="contact-info">
                <span className="info-label">Email:</span>
                <span className="info-value">info@company.com</span>
              </div>
              
              <div className="contact-info">
                <span className="info-label">Hours:</span>
                <span className="info-value">Monday - Friday, 9AM - 5PM EST</span>
              </div>
            </div>
            
            <div className="map-container">
              <div className="map-placeholder">
                <span>Google Maps Integration</span>
              </div>
            </div>
          </div>
        </div>
        
        <h2 className="team-title">Our Team</h2>
        <div className="contact-grid">
          {teamMembers.map((member, index) => (
            <div 
              className="contact-card" 
              key={index}
              style={{ 
                animationDelay: `${index * 0.1}s`,
                transform: `translateY(${Math.max(0, scrollY * 0.02 - 20)}px)`
              }}
            >
              <h3 className="contact-name">{member.name}</h3>
              <span className="contact-position">{member.position}</span>
              <div className="contact-info">
                <span className="contact-icon">✉</span>
                <span>{member.email}</span>
              </div>
              <div className="contact-info">
                <span className="contact-icon">☎</span>
                <span>{member.phone}</span>
              </div>
            </div>
          ))}
        </div>
      
      {showNotification && (
        <div className="notification success-notification">
          <div className="notification-content">
            <span className="notification-icon">✓</span>
            <span>Thank you! Your message has been sent successfully.</span>
          </div>
          <button 
            className="notification-close" 
            onClick={() => setShowNotification(false)}
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
};

export default Contact;