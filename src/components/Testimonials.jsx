// Testimonials.js
import React from 'react';
import './Testimonials.css';
import BrandsImage from '../assets/brands.png';
import TailorImage from '../assets/tailor.png';
import TraditionalImage from '../assets/traditional.png';

function Testimonials() {
  // Map the imported images to the testimonials
  const testimonials = [
    {
      id: 1,
      logo: BrandsImage,
      company: 'Gazette',
      text: "The quality, intricacy, and elegance of their embroidery exceeded our expectations. Gemini Art Way is truly a leader in bespoke embroidery, and we can't wait to collaborate again!"
    },
    {
      id: 2,
      logo: TailorImage,
      company: 'Renowned Designer',
      text: 'Their embroidery work added a unique touch of artistry to our collection. From concept to execution, the team was professional, detail-oriented, and incredibly talented!'
    },
    {
      id: 3,
      logo: TraditionalImage,
      company: 'Gemini Creations',
      text: 'Gemini Art Way International is our go-to partner for premium embroidery. Their ability to translate creative ideas into stunning, high-quality designs is remarkable!'
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="testimonials-heading">Client Testimonials</h2>
        
        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <div className="testimonial-card" key={testimonial.id}>
              <div className="testimonial-logo-container">
                <img 
                  src={testimonial.logo} 
                  alt={`${testimonial.company} logo`} 
                  className="testimonial-logo"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/80?text=Logo";
                  }}
                />
              </div>
              
              <h3 className="testimonial-company">{testimonial.company}</h3>
              
              <p className="testimonial-text">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;