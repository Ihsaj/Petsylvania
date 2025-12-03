import React, { useState } from 'react';
import './MainLayout.css';
import Navbar from '../Components/NavbarCom/Navbar';
import StepIndicator from '../Components/StepIndicatorCom/StepIndicator';
import Room from './RoomPage/Room';
import Services from './ServicesPage/Services';
import Date from './DatePage/Date';
import Pets from './PetsPage/Pets';

function MainLayout() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedServices, setSelectedServices] = useState([]);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [pets, setPets] = useState([{ name: '', type: '', breed: '', age: '' }]);

  const steps = ['Room', 'Service', 'Date', 'Pets', 'Review'];

  const handleNext = () => currentStep < steps.length - 1 && setCurrentStep(currentStep + 1);
  const handleBack = () => currentStep > 0 && setCurrentStep(currentStep - 1);

  const canProceed = () => {
    switch (currentStep) {
      case 0: return selectedRoom !== null;
      case 1: return true;
      case 2: return checkIn && checkOut;
      case 3: return pets.every(pet => pet.name && pet.type);
      default: return true;
    }
  };

  return (
    <div className="mainlayout">
      <Navbar />
      <div className="step-container">
        <StepIndicator steps={steps} currentStep={currentStep} />
      </div>

      {currentStep === 0 && <Room selectedRoom={selectedRoom} setSelectedRoom={setSelectedRoom} />}
      {currentStep === 1 && <Services selectedServices={selectedServices} setSelectedServices={setSelectedServices} />}
      {currentStep === 2 && <Date checkIn={checkIn} setCheckIn={setCheckIn} checkOut={checkOut} setCheckOut={setCheckOut} />}
      {currentStep === 3 && <Pets pets={pets} setPets={setPets} />}

      <div className="navigation-buttons">
        <button onClick={handleBack} className="nav-btn back-btn">Back</button>
        <button onClick={handleNext} disabled={!canProceed()} className="nav-btn next-btn">Next</button>
      </div>
    </div>
  );
}

export default MainLayout;
