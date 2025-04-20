// EmbroideryOrders.js
import React from 'react';
import './EmbroideryOrders.css';
import OrderImage from '../assets/order.png';

function EmbroideryOrders() {
  return (
    <section className="embroidery-orders">
      <div className="embroidery-image-container">
        <img 
          src={OrderImage} 
          alt="Elegant embroidered dress" 
          className="embroidery-image"
          // Fallback if image path doesn't work during development
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/800x900?text=Elegant+Embroidery";
          }}
        />
      </div>
      
      <div className="embroidery-content-container">
        <div className="embroidery-content">
          <h2 className="embroidery-title">Custom Embroidery Orders</h2>
          
          <p className="embroidery-description">
            At Gemini Art Way, we pride ourselves on our ability to transform 
            the ordinary into the extraordinary
          </p>
          
          <button className="order-button">Get Started</button>
        </div>
      </div>
    </section>
  );
}

export default EmbroideryOrders;