import React from 'react';
import './Services.css';
import ServiceCard from '../../Components/ServiceCardCom/ServiceCard';

const Services = ({ selectedServices, setSelectedServices }) => {
  const services = [
    { id: 1, title: 'Grooming', price: 500, icon: '✂️' },
    { id: 2, title: 'Pet Spa', price: 500, icon: '🛁' },
    { id: 3, title: 'Training Session', price: 500, icon: '🎯' },
    { id: 4, title: 'Playtime', price: 500, icon: '🎾' },
    { id: 5, title: 'Medication', price: 500, icon: '💊' },
  ];

  const handleServiceToggle = (serviceId) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  return (
    <div className="services-page">
      <h1 className="page-title">Services</h1>
      <p className="page-subtitle">Choose what room and services you prefer</p>
      
      <div className="services-grid">
        {services.map(service => (
          <ServiceCard
            key={service.id}
            title={service.title}
            price={service.price}
            icon={service.icon}
            selected={selectedServices.includes(service.id)}
            onClick={() => handleServiceToggle(service.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;