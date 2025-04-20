// components/Hero.jsx
import React from 'react';
import './Hero.css';
import DressImage from '../assets/hero-dress.png'; // Import your image

function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="discover-text">Discover</span>
          <span className="brand-text">Gemini Art</span>
        </h1>
        <p className="hero-subtitle">
          Immerse yourself in the world<br />
          of exquisite hand-crafted
        </p>
        <button className="explore-button">Explore Our Collection</button>
      </div>
      <div className="hero-image-container">
        <img src={DressImage} alt="Dress Model" className="hero-image" />
      </div>
    </div>
  );
}

export default Hero;