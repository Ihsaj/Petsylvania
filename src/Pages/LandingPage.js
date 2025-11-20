import React, { useState } from 'react';
import '../Pages/LandingPage.css';

import Navbar from '../Components/Navbar';
import HeroSection from '../Components/HeroSection';
import SearchSection from '../Components/SearchSection';

const Landing_Page = () => {
  const [activeTab, setActiveTab] = useState('Hotel');
  const [formData, setFormData] = useState({
    location: '',
    checkIn: '',
    checkOut: '',
    petCount: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="landing-page">
      <Navbar />

      <main className="hero-section">
        <HeroSection />

        <SearchSection 
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
      </main>
    </div>
  );
};

export default Landing_Page;
