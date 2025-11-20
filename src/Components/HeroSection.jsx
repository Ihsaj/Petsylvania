import React from 'react';
import Catdog from '../Assets/Catdog.png';  
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-content">
      <div className="hero-text">
        <h1 className="hero-title">
          Tail-Wagging Stays <br />
          Start <span className="highlight">Here</span>
        </h1>

        <p className="hero-description">
          Premium care, cozy stays, and endless tail<br />
          wags while you're away.
        </p>

        <div className="app-buttons">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
            alt="Get it on Google Play" 
            className="store-badge" 
          />
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
            alt="Download on App Store" 
            className="store-badge" 
          />
        </div>
      </div>

      <div className="hero-image">
        <img 
          src={Catdog}
          alt="Sleeping Cat and Dog" 
          className="pet-image" 
        />
      </div>
    </div>
  );
};

export default HeroSection;
