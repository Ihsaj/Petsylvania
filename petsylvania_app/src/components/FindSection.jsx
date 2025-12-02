import React from 'react';
import './FindSection.css';

export default function FindSection() {
  const categories = ['Hotel', 'Rooms', 'Grooming', 'Training'];
  
  return (
    <div className="find-section">
      <h2 className="find-title">FIND</h2>
      {categories.map((category) => (
        <button key={category} className="find-btn">
          {category}
        </button>
      ))}
    </div>
  );
}