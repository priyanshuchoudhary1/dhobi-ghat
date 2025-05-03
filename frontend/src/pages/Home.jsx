import React from "react";
import { FaTshirt, FaShippingFast, FaCheckCircle, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  // Using Unsplash image URL
  const heroImage = "https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80";

  return (
    <div className="home-container">
      {/* Hero Banner with Unsplash Image */}
      <section 
        className="hero-banner"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${heroImage})` }}
      >
        <div className="hero-content">
          <h1 className="hero-title">Premium Laundry Care</h1>
          <p className="hero-subtitle">
            Experience the perfect blend of quality, speed, and convenience for all your laundry needs
          </p>
          <Link to="/book-service" className="cta-button">
            Book Now <span className="arrow">→</span>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">Professional care for your garments</p>
        
        <div className="features-grid">
          <Link to="/quality-cleaning" className="feature-card">
            <div className="card-icon">
              <FaTshirt />
            </div>
            <h3>Quality Cleaning</h3>
            <p>Gentle yet effective cleaning methods for every fabric type with premium detergents.</p>
            <span className="learn-more">Learn more →</span>
          </Link>

          <Link to="/fast-delivery" className="feature-card">
            <div className="card-icon">
              <FaShippingFast />
            </div>
            <h3>Fast Delivery</h3>
            <p>24-hour turnaround with real-time tracking and convenient pickup/delivery.</p>
            <span className="learn-more">Learn more →</span>
          </Link>

          <div className="feature-card">
            <div className="card-icon">
              <FaCheckCircle />
            </div>
            <h3>Trusted Service</h3>
            <p>Rated 4.9/5 by thousands of satisfied customers with premium fabric care.</p>
          </div>

          <Link to="/book-service" className="feature-card">
            <div className="card-icon">
              <FaCalendarAlt />
            </div>
            <h3>Easy Booking</h3>
            <p>Schedule your laundry service in just a few taps with our mobile app.</p>
            <span className="learn-more">Get started →</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;