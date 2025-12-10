import React, { useState, useEffect } from 'react';
import './Services.css';
import ServiceCard from '../../Components/ServiceCardCom/ServiceCard';

const Services = ({ selectedServices, setSelectedServices }) => {
  // 1. Initialize with an empty array to prevent crashes
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/services')
      .then(res => {
        // If the server returns an error (403, 404, 500), throw an error
        if (!res.ok) {
            throw new Error(`Server returned status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        // 2. SAFETY CHECK: Is the data actually an Array?
        if (Array.isArray(data)) {
            console.log("Services loaded:", data);
            setServices(data);
        } else {
            console.error("Error: Backend returned an Object instead of a List:", data);
            setServices([]); // Keep it empty so .map() doesn't crash
        }
      })
      .catch(err => {
          console.error("Fetch failed:", err);
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
        {/* 3. FINAL GUARD: Only run .map if it is an array */}
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