import React, { useState } from 'react';
import '../Pages/PetProfilePage.css';

import Navbar from '../Components/Navbar';
import ProfileSidebar from '../Components/ProfileSidebar';
import PetInfoForm from '../Components/PetInfoForm';

const PetProfilePage = () => {
  const [activeTab, setActiveTab] = useState('pet');
  const [petData, setPetData] = useState({
    type: '',
    breed: '',
    age: '',
    specialNotes: ''
  });

  const handleChange = (field, value) => {
    setPetData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSaveChanges = () => {
    console.log('Saving pet changes:', petData);
    // Add your save logic here
  };

  return (
    <div className="pet-profile-page">
      <Navbar />
      
      <main>
        <div className="pet-profile-container">
          <ProfileSidebar 
            activeTab={activeTab} 
            setActiveTab={setActiveTab}
            title="Pet Profile Management"
          />
          
          <PetInfoForm 
            petData={petData}
            handleChange={handleChange}
            handleSaveChanges={handleSaveChanges}
          />
        </div>
      </main>
    </div>
  );
};

export default PetProfilePage;