import React from 'react';
import './FindSection.css';

const FindSection = () => {
  const services = [
    { id: 1, name: 'Hotel', icon: '🏨' },
    { id: 2, name: 'Rooms', icon: '🛏️' },
    { id: 3, name: 'Grooming', icon: '✂️' },
    { id: 4, name: 'Training', icon: '🎯' },
  ];

  return (
    <section className="find-section">
      <h2 className="find-title">
        <span className="find-text">FIND</span>
      </h2>
      <div className="services-grid">
        {services.map(service => (
          <div key={service.id} className="service-item">
            <span className="service-icon">{service.icon}</span>
            <span className="service-name">{service.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FindSection;