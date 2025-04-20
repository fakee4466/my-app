// components/Services.jsx
import React from 'react';
import './Services.css';

function Services() {
  return (
    <div className="services-section">
      <div className="services-header">
        <h2 className="services-title">Exceptional Service</h2>
        <p className="services-subtitle">At Gemini Art Way, customer satisfaction is our top priority</p>
      </div>
      
      <div className="services-cards">
        <div className="service-card">
          <div className="card-header">
            <h3 className="card-title">Our Services</h3>
            <button className="card-button primary-button">Explore Now</button>
          </div>
          <div className="service-content">
            <p className="card-description">
              From custom embroidery to small-batch production, our team of experts are dedicated to delivering exceptional results
            </p>
            <button className="card-button secondary-button">Learn More</button>
          </div>
        </div>
        
        <div className="service-card">
          <div className="card-header">
            <h3 className="card-title">Tailored to Your Needs</h3>
            <button className="card-button primary-button">Get a Quote</button>
          </div>
          <div className="service-content">
            <p className="card-description">
              At Gemini Art Way, we understand that every client has unique needs and requirements
            </p>
            <button className="card-button secondary-button">Contact Us</button>
          </div>
        </div>
        
        <div className="service-card">
          <div className="card-header">
            <h6 className="card-title">Elevating Your Brand</h6>
            <button className="card-button primary-button">Discover More</button>
          </div>
          <div className="service-content">
            <p className="card-description">
              Our embroidered designs have been featured in the collections of the world's most prestigious fashion houses
            </p>
            <button className="card-button secondary-button">Explore Collections</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;