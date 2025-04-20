import React from 'react';
import './Assortment.css';
import Assortment1Image from '../assets/assortment1.png';
import Assortment2Image from '../assets/assortment2.png';
import Assortment3Image from '../assets/assortment3.png';

function Assortment() {
  return (
    <div className="assortment-container">
      <h1 className="assortment-title">Assortment</h1>
      
      <div className="categories-grid">
        <div className="category-card">
          <div className="category-image">
            <img src={Assortment1Image} alt="Embroidery" />
          </div>
          <h2 className="category-title">Embroidery</h2>
          <p className="category-description">
            Exquisite, handcrafted embroidery designs with meticulous attention to detail.
          </p>
        </div>
        
        <div className="category-card">
          <div className="category-image">
            <img src={Assortment2Image} alt="Garments" />
          </div>
          <h2 className="category-title">Garments</h2>
          <p className="category-description">
            Sophisticated, high-end fashion pieces crafted with luxurious attention to detail.
          </p>
        </div>
        
        <div className="category-card">
          <div className="category-image">
            <img src={Assortment3Image} alt="Accessories" />
          </div>
          <h2 className="category-title">Accessories</h2>
          <p className="category-description">
            Unique, elegant accessories that complement and enhance any look.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Assortment;