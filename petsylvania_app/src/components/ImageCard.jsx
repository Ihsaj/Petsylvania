import React from 'react';
import './ImageCard.css';

export default function ImageCard({ imageUrl, alt }) {
  return (
    <div className="image-card">
      <img src={imageUrl} alt={alt} className="image-card-img" />
    </div>
  );
}