import React from 'react';
import './PeopleManagement.css';
import { Users, HandshakeIcon, Heart } from 'lucide-react';

const PeopleManagement = () => {
  return (
    <div className="people-management">
      <div className="header-section">
        <h1>People Management</h1>
        <p className="description">
          Our approach focuses on empowering and developing our team to achieve 
          their best. We are committed to fostering a collaborative and inclusive 
          work environment.
        </p>
        
        <div className="logo-emblem">
          <svg viewBox="0 0 100 100" className="celtic-knot">
            <path d="M50,20 C60,20 70,30 70,40 C70,50 60,60 50,60 C40,60 30,50 30,40 C30,30 40,20 50,20 Z
                     M50,25 C42,25 35,32 35,40 C35,48 42,55 50,55 C58,55 65,48 65,40 C65,32 58,25 50,25 Z
                     M20,50 C20,60 30,70 40,70 C50,70 60,60 60,50 C60,40 50,30 40,30 C30,30 20,40 20,50 Z
                     M25,50 C25,42 32,35 40,35 C48,35 55,42 55,50 C55,58 48,65 40,65 C32,65 25,58 25,50 Z
                     M50,40 C60,40 70,50 70,60 C70,70 60,80 50,80 C40,80 30,70 30,60 C30,50 40,40 50,40 Z
                     M50,45 C42,45 35,52 35,60 C35,68 42,75 50,75 C58,75 65,68 65,60 C65,52 58,45 50,45 Z
                     M40,20 C30,20 20,30 20,40 C20,50 30,60 40,60 C50,60 60,50 60,40 C60,30 50,20 40,20 Z
                     M40,25 C32,25 25,32 25,40 C25,48 32,55 40,55 C48,55 55,48 55,40 C55,32 48,25 40,25 Z" 
                 fill="none" stroke="#c9a45c" strokeWidth="2"/>
          </svg>
        </div>
      </div>

      <div className="cards-container">
        <div className="card">
          <div className="icon">
            <Users size={40} color="#c9a45c" />
          </div>
          <h2>Team Development</h2>
          <p>
            We invest in continuous training and growth opportunities for our staff.
          </p>
        </div>

        <div className="card">
          <div className="icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#c9a45c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
              <path d="M12 5.67l.29-.3a3.3 3.3 0 0 1 5.32 3.85"></path>
            </svg>
          </div>
          <h2>Collaborative Culture</h2>
          <p>
            We encourage open communication and teamwork across all levels.
          </p>
        </div>

        <div className="card">
          <div className="icon">
            <Heart size={40} color="#c9a45c" />
          </div>
          <h2>Inclusive Environment</h2>
          <p>
            We value diversity and strive to create welcoming workplace for everyone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PeopleManagement;