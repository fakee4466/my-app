// components/Features.jsx
import React from 'react';
import './Features.css';
import ModelImage from '../assets/model.png';


function Features() {
  return (
    <div className="features-section">
<div className="features-top">
  {/* ✅ Move image first */}
  <div className="features-image">
    <img src={ModelImage} alt="Model" className="model-image" />
  </div>
  <div className="features-text">
    <p className="features-tagline">Discover Gemini Art Way</p>
    <h2 className="features-title">
      Embroidered<br />Masterpieces
    </h2>
    <p className="features-description">
      Elevate your wardrobe with Gemini Art Way's captivating<br />
      hand-embroidered creations
    </p>
    <button className="explore-now-button">Explore Now</button>
  </div>
</div>

      
      <div className="features-bottom">
        <div className="feature-card">
          <div className="feature-icon icon-1"></div>
          <h3 className="feature-title">Crafted with</h3>
          <p className="feature-subtitle">Unparalleled Artistry</p>
        </div>
        
        <div className="feature-card feature-middle">
          <div className="feature-icon icon-2"></div>
          <h3 className="feature-title">Exquisite</h3>
          <p className="feature-subtitle">Embroidery</p>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon icon-3"></div>
          <h3 className="feature-title">Gemini Art Way</h3>
          <p className="feature-subtitle">Luxury Embroidery</p>
        </div>
      </div>
    </div>
  );
}

export default Features;