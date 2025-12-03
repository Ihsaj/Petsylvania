import React from 'react';
import './RoomCard.css';

const RoomCard = ({ title, price, image, selected, onClick }) => {
  return (
    <div 
      className={`room-card ${selected ? 'selected' : ''}`}
      onClick={onClick}
    >
      <div className="room-image-container">
        <img src={image} alt={title} className="room-image" />
      </div>
      <p className="room-title">{title}</p>
      <p className="room-price">₱{price}</p>
    </div>
  );
};

export default RoomCard;
