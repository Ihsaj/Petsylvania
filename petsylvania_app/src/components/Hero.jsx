import React from 'react';
import ImageCard from './ImageCard';
import FindSection from './FindSection';
import './Hero.css';

export default function Hero() {
  const images = [
    { url: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=200&h=200&fit=crop', alt: 'Dog grooming' },
    { url: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=200&h=200&fit=crop', alt: 'Hotel room' },
    { url: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=200&h=200&fit=crop', alt: 'Dog care' },
    { url: 'https://images.unsplash.com/photo-1558788353-f76d92427f16?w=200&h=200&fit=crop', alt: 'Dog playing' }
  ];

  return (
    <div className="hero-container">
      <div className="hero-background"></div>
      
      <div className="hero-content">
        <h1 className="hero-title">
          Welcome to<br />Petsylvania!
        </h1>
        <p className="hero-subtitle">Book a stay for your dog with ease</p>

        <div className="card-container">
          {images.map((image, index) => (
            <ImageCard key={index} imageUrl={image.url} alt={image.alt} />
          ))}
        </div>

        <FindSection />
      </div>
    </div>
  );
}