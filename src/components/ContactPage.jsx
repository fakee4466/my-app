// components/ContactPage.js
import React, { useState } from 'react';
import './ContactPage.css';
import ContactImage from '../assets/contactimage.png';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission, like sending data to a server
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-page">
      {/* Hero section with embroidery image - Rearranged order */}
      <div className="contact-hero">
        <div className="contact-hero-content">
          <h1 className="contact-title">Contact Us</h1>
          <p className="contact-subtitle">
            Get in touch with us for any inquiries or questions.
          </p>
        </div>
        <div className="embroidery-image-contact">
          <img src={ContactImage} alt="Gold embroidery design" />
        </div>
      </div>

      {/* Contact information section */}
      <div className="contact-info-section">
        <h2 className="info-title">Contact Information</h2>
        
        <div className="contact-info-grid">
          <div className="contact-info-item">
            <div className="info-icon">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>
              </svg>
            </div>
            <div className="info-content">
              <h3>Phone</h3>
              <p>+1 (234) 567-890</p>
            </div>
          </div>
          
          <div className="contact-info-item">
            <div className="info-icon">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div className="info-content">
              <h3>Email</h3>
              <p>info@example.com</p>
            </div>
          </div>
          
          <div className="contact-info-item">
            <div className="info-icon">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div className="info-content">
              <h3>Address</h3>
              <p>1234 Elm Street, Suite 567<br />City, State 12345</p>
            </div>
          </div>
        </div>
        
        <div className="contact-button-container">
          <button className="send-message-button" onClick={() => document.getElementById('contactForm').scrollIntoView({ behavior: 'smooth' })}>
            Send Message
          </button>
        </div>
        
        {/* Contact form */}
        <div id="contactForm" className="contact-form-section">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                rows="5" 
                required 
              ></textarea>
            </div>
            <button type="submit" className="send-message-button">Submit Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;