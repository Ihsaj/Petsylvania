import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ title, price, icon, selected, onClick }) => {
  return (
    <div 
      className={`service-card ${selected ? 'selected' : ''}`}
      onClick={onClick}
    >
      <div className="service-icon-container">
        <div className="service-icon">{icon}</div>
      </div>
      <p className="service-title">{title}</p>
      <p className="service-price">₱{price}/day</p>
    </div>
  );
};

export default ServiceCard;