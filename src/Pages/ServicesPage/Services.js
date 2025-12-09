// import React, { useState, useEffect } from 'react'; 
// import './Services.css';
// import ServiceCard from '../../Components/ServiceCardCom/ServiceCard';

// const API_BASE_URL = "http://localhost:8080"; 

// const getServiceIcon = (serviceName) => {
//     const lowerName = serviceName ? serviceName.toLowerCase() : '';
//     if (lowerName.includes('grooming')) return '✂️';
//     if (lowerName.includes('spa')) return '🛁';
//     if (lowerName.includes('training')) return '🎯';
//     if (lowerName.includes('play')) return '🎾';
//     if (lowerName.includes('medication')) return '💊';
//     return '⭐'; 
// };

// const Services = ({ selectedServices, setSelectedServices }) => {
//     const [services, setServices] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchServices = async () => {
//             try {
//                 const response = await fetch(`${API_BASE_URL}/api/service/getAllService`); 
                
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch service data.');
//                 }
//                 const data = await response.json();
                
//                 const servicesWithIcons = data.map(service => ({
//                     id: service.serviceId,      
//                     title: service.serviceName, 
//                     price: service.price,       
//                     icon: getServiceIcon(service.serviceName), 
//                 }));
//                 setServices(servicesWithIcons);

//             } catch (err) {
//                 console.error("Error fetching services:", err);
//                 setError("Failed to load services. Check backend connection and MySQL data.");
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchServices();
//     }, []); 

//     const handleServiceToggle = (serviceId) => {
//         setSelectedServices(prev => 
//             prev.includes(serviceId) 
//                 ? prev.filter(id => id !== serviceId)
//                 : [...prev, serviceId]
//         );
//     };

//     if (loading) {
//         return (
//             <div className="services-page">
//                 <h1 className="page-title">Services</h1>
//                 <p className="page-subtitle">Loading available services...</p>
//             </div>
//         );
//     }

//     if (error) {
//         return (
//             <div className="services-page" style={{ color: 'red', textAlign: 'center', padding: '20px' }}>
//                 <h1 className="page-title">Services</h1>
//                 <p className="page-subtitle">{error}</p>
//             </div>
//         );
//     }

//     return (
//         <div className="services-page">
//             <h1 className="page-title">Services</h1>
//             <p className="page-subtitle">Choose what room and services you prefer</p>
            
//             <div className="services-grid">
//                 {services.map(service => ( 
//                     <ServiceCard
//                         key={service.id}
//                         title={service.title}
//                         price={service.price}
//                         icon={service.icon}
//                         selected={selectedServices.includes(service.id)}
//                         onClick={() => handleServiceToggle(service.id)}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Services;

// src/Pages/ServicesPage/Services.js

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