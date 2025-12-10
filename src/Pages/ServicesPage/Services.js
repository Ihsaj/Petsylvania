import React, { useState, useEffect } from 'react';
import './Services.css';
import ServiceCard from '../../Components/ServiceCardCom/ServiceCard';

const Services = ({ selectedServices, setSelectedServices }) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/services')
      .then(res => {
        if (!res.ok) throw new Error(`Server status: ${res.status}`);
        return res.json();
      })
      .then(data => {
        if (Array.isArray(data)) {
            console.log("Services loaded:", data);
            setServices(data);
        } else {
            console.error("Backend returned weird data:", data);
            setServices([]); 
        }
      })
      .catch(err => {
          console.error("Failed to fetch services:", err);
          setServices([]); 
      });
  }, []);

  const handleServiceToggle = (serviceId) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  // Helper function must be INSIDE the component
  const getIcon = (name) => {
      const n = name ? name.toLowerCase() : "";
      if(n.includes("groom")) return '✂️';
      if(n.includes("spa")) return '🛁';
      if(n.includes("train")) return '🎯';
      if(n.includes("play")) return '🎾';
      return '💊';
  };

  return (
    <div className="services-page">
      <h1 className="page-title">Services</h1>
      <p className="page-subtitle">Choose extra services</p>
      
      <div className="services-grid">
        {Array.isArray(services) && services.length > 0 ? (
            services.map(service => (
            <ServiceCard
                key={service.serviceId} 
                title={service.title || service.serviceName} 
                price={service.price}
                icon={service.icon || getIcon(service.title || service.serviceName)}
                selected={selectedServices.includes(service.serviceId)}
                onClick={() => handleServiceToggle(service.serviceId)}
            />
            ))
        ) : (
            <p style={{textAlign: 'center', width: '100%'}}>
               Loading services... (Check console for errors)
            </p>
        )}
      </div>
    </div>
  );
};

export default Services;