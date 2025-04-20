// components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="elegant-footer">
      <div className="footer-container">
        <div className="footer-logo">
          <div className="logo-dots">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
          <span>Gemini Art</span>
        </div>
        
        <div className="footer-nav-section">
          <h3>Explore</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/people-management">People Management</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/assortment">Assortment</Link></li>
          </ul>
        </div>
        
        <div className="footer-nav-section">
          <h3>Connect</h3>
          <ul>
            <li><a href="https://instagram.com/geminiart" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://facebook.com/geminiart" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com/geminiart" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="mailto:info@geminiart.com">Email</a></li>
          </ul>
        </div>
      </div>
      
      <div className="copyright">
        <p>© 2025 Gemini Art, Inc.</p>
        <p>All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;