import React, { useState } from 'react';
import './MainLayout.css';
import Navbar from '../Components/Navbar';
import StepIndicator from '../Components/StepIndicatorCom/StepIndicator';
import Room from './RoomPage/Room';
import Services from './ServicesPage/Services';
import DateComponent from './DatePage/Date'; 
import Pets from './PetsPage/Pets';
import { useNavigate } from 'react-router-dom';

function MainLayout() {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  const steps = ['Room', 'Service', 'Date', 'Pets', 'Review'];

  // --- STATE ---
  const [selectedRoom, setSelectedRoom] = useState(null); 
  const [selectedServices, setSelectedServices] = useState([]); 
  const [checkIn, setCheckIn] = useState(''); 
  const [checkOut, setCheckOut] = useState(''); 
  const [pets, setPets] = useState([{ name: '', type: '', breed: '', age: '' }]);

  // --- HELPER: Save Pets to Backend ---
  const savePetsToBackend = async () => {
      try {
          console.log("Auto-saving pets to database...");
          for (const pet of pets) {
              if (pet.name && pet.type) {
                  await fetch('http://localhost:8080/api/booking-pets', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify(pet)
                  });
              }
          }
          console.log("All pets saved successfully!");
          return true;
      } catch (error) {
          console.error("Failed to save pets:", error);
          alert("Error saving pets. Please try again.");
          return false;
      }
  };

  // --- NAVIGATION LOGIC ---
  const handleNext = async () => {
    // Save pets if leaving step 3
    if (currentStep === 3) {
        const success = await savePetsToBackend();
        if (!success) return; 
    }

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
        console.log("Ready for Review Page");
    }
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  // --- VALIDATION ---
  const canProceed = () => {
    const datesAreValid = () => {
        if (!checkIn || !checkOut) return false;
        return new Date(checkOut) > new Date(checkIn);
    };
    const petsAreValid = () => pets.length > 0 && pets.every(pet => pet.name && pet.type);

    switch (currentStep) {
      case 0: return selectedRoom !== null; 
      case 1: return true;                  
      case 2: return checkIn && checkOut && datesAreValid();
      case 3: return petsAreValid();
      default: return true;
    }
  };

  // --- RENDER STEP ---
  const renderStep = () => {
    // ERROR FIXED: Removed the "customerInfo" line that was causing a crash
    switch (currentStep) {
      case 0: return <Room selectedRoom={selectedRoom} setSelectedRoom={setSelectedRoom} />;
      case 1: return <Services selectedServices={selectedServices} setSelectedServices={setSelectedServices} />;
      case 2: return <DateComponent checkIn={checkIn} setCheckIn={setCheckIn} checkOut={checkOut} setCheckOut={setCheckOut} />;
      case 3: return <Pets pets={pets} setPets={setPets} />;
      case 4: return <div style={{textAlign: 'center', padding: '50px'}}><h2>Review Page (Teammate Assigned)</h2></div>;
      default: return null;
    }
  };

  return (
    <div className="mainlayout">
      <Navbar />
      <div className="step-container">
        <StepIndicator steps={steps} currentStep={currentStep} />
      </div>

      <div className="booking-content">
        {renderStep()}
      </div>

      <div className="navigation-buttons">
          {currentStep > 0 && (
              <button onClick={handleBack} className="nav-btn back-btn">Back</button>
          )}
          
          <div className="next-button-wrapper">
              <button 
                  onClick={handleNext} 
                  disabled={!canProceed()} 
                  className="nav-btn next-btn"
              >
                  {currentStep === steps.length - 1 ? 'Finish' : 'Next'}
              </button>
          </div>
      </div>
    </div>
  );
}

export default MainLayout;