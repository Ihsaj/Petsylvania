import React, { useState } from 'react';
import '../Pages/ProfilePage.css';

import Navbar from '../Components/Navbar';
import ProfileSidebar from '../Components/ProfileSidebar';
import PersonalInfoForm from '../Components/PersonalInfoForm';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [profileData, setProfileData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
  });

  const handleChange = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSaveChanges = () => {
    console.log('Saving changes:', profileData);
    // Add your save logic here
  };

  return (
    <div className="profile-page">
      <Navbar />
      
      <main>
        <div className="profile-container">
          <ProfileSidebar 
            activeTab={activeTab} 
            setActiveTab={setActiveTab}
            title="User Profile Management"
          />
          
          <PersonalInfoForm 
            profileData={profileData}
            handleChange={handleChange}
            handleSaveChanges={handleSaveChanges}
          />
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;