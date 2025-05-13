import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaTruck, FaMoneyBillWave, FaPassport, FaShieldAlt, FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './CSS/Home.css';
import slide1 from './images/slides/slide1.jpg';
import slide2 from './images/slides/slide2.jpg';
import slide3 from './images/slides/slide3.jpg';

const Home = () => {
  // Feature animation
  const [animatedFeature, setAnimatedFeature] = useState(null);
  
  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Carousel items
  const carouselItems = [
    {
      id: 1,
      image: slide1,
    },
    {
      id: 2,
      image: slide2,
    },
    {
      id: 3,
      image: slide3
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselItems.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [carouselItems.length]);

  // Handle manual navigation
  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + carouselItems.length) % carouselItems.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselItems.length);
  };

  // Service features
  const serviceFeatures = [
    { 
      id: 1, 
      icon: <FaTruck />, 
      title: "Mail & Parcel Services", 
      description: "Fast and secure delivery for all your shipping needs" 
    },
    { 
      id: 2, 
      icon: <FaMoneyBillWave />, 
      title: "Financial Services", 
      description: "Money orders, banking, and bill payment solutions" 
    },
    { 
      id: 3, 
      icon: <FaPassport />, 
      title: "Government Services", 
      description: "Passport applications and government document processing" 
    },
    { 
      id: 4, 
      icon: <FaShieldAlt />, 
      title: "Insurance & Pension", 
      description: "Protect your future with our insurance and pension services" 
    }
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to E-Post Office</h1>
          <p className="hero-description">
            Your one-stop solution for all postal and financial services. Connecting people and businesses with reliable delivery and essential services.
          </p>
          <div className="hero-buttons">
            <Link to="/track" className="btn btn-accent">Explore Services</Link>
          </div>
        </div>
      </section>

      {/* Service Features Section */}
      <section className="features-section">
        <h2>Our Premium Services</h2>
        
        <div className="features-grid">
          {serviceFeatures.map(feature => (
            <div 
              key={feature.id}
              className={`feature-card ${animatedFeature === feature.id ? 'animated' : ''}`}
              onMouseEnter={() => setAnimatedFeature(feature.id)}
              onMouseLeave={() => setAnimatedFeature(null)}
            >
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <button className="learn-more-btn">
                Learn More <FaArrowRight className="arrow-icon" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Carousel Section */}
      <section className="carousel-section">
        <h1>New Items</h1>
        <div className="carousel-container">
          <div className="carousel-slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {carouselItems.map((slide) => (
              <div key={slide.id} className="carousel-slide">
                <img src={slide.image} alt={slide.title} className="carousel-image" />
              </div>
            ))}
          </div>
          
          <button className="carousel-control carousel-prev" onClick={goToPrevSlide}>
            <FaChevronLeft />
          </button>
          <button className="carousel-control carousel-next" onClick={goToNextSlide}>
            <FaChevronRight />
          </button>
          
          <div className="carousel-indicators">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                className={`carousel-indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      
      {/* Latest News & Updates Section */}
      <section className="updates-section">
        <h2>Latest News & Announcements</h2>
        
        <div className="updates-grid">
          <div className="update-card">
            <div className="update-date">April 5, 2025</div>
            <h3>New Express Delivery Service Launched</h3>
            <p>
              We are excited to announce our new express delivery service that guarantees same-day delivery within city limits.
            </p>
            <a href="#" className="read-more">
              Read More <FaArrowRight />
            </a>
          </div>
          
          <div className="update-card">
            <div className="update-date">April 1, 2025</div>
            <h3>Reduced Rates for International Parcels</h3>
            <p>
              Starting next month, we're reducing our rates for international shipments by up to 20% to over 50 countries.
            </p>
            <a href="#" className="read-more">
              View Details <FaArrowRight />
            </a>
          </div>
          
          <div className="update-card">
            <div className="update-date">March 28, 2025</div>
            <h3>Extended Working Hours at Select Locations</h3>
            <p>
              To serve you better, select post offices in metropolitan areas will now remain open until 8:00 PM on weekdays.
            </p>
            <a href="#" className="read-more">
              Find Locations <FaArrowRight />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;