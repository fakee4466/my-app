// src/pages/About.jsx
import React from 'react';
import './About.css';
import WomanImage from '../assets/women.png'; // update with your image path
import GoldImage from '../assets/gold.png';   // update with your image path

function About() {
  return (
    <div className="about-section">
      <div className="about-row">
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            We are a company dedicated to creating exquisite, high-end garments
            adorned with intricate gold embellishments. Our mission is to blend
            timeless elegance with masterful craftsmanship, resulting in pieces
            that exude luxury and sophistication.
          </p>
        </div>
        <img src={WomanImage} alt="Model" className="about-image" />
      </div>

      <div className="about-row reverse">
        <div className="about-text">
          <h2>Our Story</h2>
          <p>
            Established with a passion for artistry and luxury, our company has
            been at the forefront of the high-end fashion industry. With years
            of experience, we have honed our expertise in designing and crafting
            garments that celebrate the beauty of gold.
          </p>
        </div>
        <img src={GoldImage} alt="Gold Design" className="about-image" />
      </div>

      <div className="about-row">
        <div className="about-text full">
          <h2>Our Craftsmanship</h2>
          <p>
            Each garment we create is a testament to our commitment to exceptional
            quality and detail. Our skilled artisans meticulously apply gold
            embellishments by hand, ensuring that each garment is a one-of-a-kind
            masterpiece.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
