import React from 'react';
import Catdog from '../Assets/Catdog.png';  
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-text">
          <h1 className="hero-title">
            Tail-Wagging Stays <br />
            Start <span className="highlight">Here</span>
          </h1>

          <p className="hero-description">
            Premium care, cozy stays, and endless tail<br />
            wags while you're away.
          </p>
        </div>

        <div className="hero-image">
          <img 
            src={Catdog}
            alt="Sleeping Cat and Dog"
            className="pet-image"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
