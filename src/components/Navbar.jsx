import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Toggle the scrolled state based on scroll position
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="navbar" style={{
      position: isScrolled ? 'fixed' : 'absolute',
      backgroundColor: isScrolled ? 'white' : 'transparent',
      transition: 'all 0.3s ease',
      top: 0
    }}>
      <div className="navbar-container">
        <div className="logo-container">
          {/* Using a text logo instead of an image */}
          
            <div className="logo-placeholder" style={{
              backgroundColor: isScrolled ? '#0a1a2f' : 'white',
              color: isScrolled ? 'white' : '#0a1a2f'
            }}>G</div>
            <span className="brand-name" style={{
              color: isScrolled ? 'black' : 'white'
            }}>Gemini Art</span>
          
        </div>
        <div className="nav-links">
          <Link to="/" className="nav-link" style={{
            color: isScrolled ? 'black' : 'white'
          }}>Home</Link>
          <Link to="/about" className="nav-link" style={{
            color: isScrolled ? 'black' : 'white'
          }}>About</Link>
          <Link to="/contact" className="nav-link" style={{
            color: isScrolled ? 'black' : 'white'
          }}>Contact</Link>
          <Link to="/people-management" className="nav-link" style={{
            color: isScrolled ? 'black' : 'white'
          }}>People Management</Link>
          <Link to="/assortment" className="nav-link" style={{
            color: isScrolled ? 'black' : 'white'
          }}>Assortment</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;