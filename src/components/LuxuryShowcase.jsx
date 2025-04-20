// components/LuxuryShowcase.js
import React from 'react';
import './LuxuryShowcase.css';
import StyleImage from '../assets/style.png';
import ElegantImage from '../assets/elegant.png';
import ArtistryImage from '../assets/artistry.png';
import ConsquetImage from '../assets/consquet.png';

const LuxuryShowcase = () => {
  return (
    <div className="luxury-background">
      <section className="luxury-showcase">
        <div className="luxury-header">
          <span className="craftsmanship">Exceptional Craftsmanship</span>
          <h2 className="luxury-title">Luxury Embroidery</h2>
          <span className="elevated-style">Elevated Style</span>
        </div>
        
        <div className="showcase-grid">
          <div className="showcase-item">
            <div className="image-container">
              <img src={StyleImage} alt="Luxury embroidered gown with gold detailing" />
            </div>
            <div className="item-description">
              <h3>Artistry</h3>
              <p>Craftsmanship</p>
              <button className="showcase-button">Explore</button>
            </div>
          </div>
          
          <div className="showcase-item">
            <div className="image-container">
              <img src={ElegantImage} alt="Elegant blue gown with embroidered neckline" />
            </div>
            <div className="item-description">
              <h3>Elegance</h3>
              <p>Luxury</p>
              <button className="showcase-button">Shop</button>
            </div>
          </div>
          
          <div className="showcase-item">
            <div className="image-container">
              <img src={ArtistryImage} alt="Sophisticated cocktail dress with golden embroidery" />
            </div>
            <div className="item-description">
              <h3>Style</h3>
              <p>Sophistication</p>
              <button className="showcase-button">Discover</button>
            </div>
          </div>
          
          <div className="showcase-item">
            <div className="image-container">
              <img src={ConsquetImage} alt="Back view of embroidered gown" />
            </div>
            <div className="item-description">
              <h3>Consequat.</h3>
              <p>Cum</p>
              <button className="showcase-button">Malesuada.</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LuxuryShowcase;