import React, { useState } from 'react';
import './MainLayout.css';
import Navbar from '../Components/Navbar';
import StepIndicator from '../Components/StepIndicatorCom/StepIndicator';
import Room from './RoomPage/Room';
import Services from './ServicesPage/Services';
import DateComponent from './DatePage/Date';
import Pets from './PetsPage/Pets';
import ReviewBooking from './ReviewBookingPage/ReviewBooking';
import { useNavigate } from 'react-router-dom';

function MainLayout() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedServices, setSelectedServices] = useState([]);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [pets, setPets] = useState([{ name: '', type: '', breed: '', age: '' }]);

  const navigate = useNavigate();

  const steps = ['Room', 'Service', 'Date', 'Pets', 'Review'];

  const handleNext = () => {
    if (currentStep === steps.length - 1) {
      navigate('/review-booking');
      return;
    }

    setCurrentStep(currentStep + 1);
  };

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

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <Room selectedRoom={selectedRoom} setSelectedRoom={setSelectedRoom} />;
      case 1:
        return <Services selectedServices={selectedServices} setSelectedServices={setSelectedServices} />;
      case 2:
        return <DateComponent checkIn={checkIn} setCheckIn={setCheckIn} checkOut={checkOut} setCheckOut={setCheckOut} />;
      case 3:
        return <Pets pets={pets} setPets={setPets} />;
      case 4: 
        return (
          <ReviewBooking
            selectedRoomId={selectedRoom}
            selectedServiceIds={selectedServices}
            checkInDate={checkIn}
            checkOutDate={checkOut}
            pets={pets}
            customerName={"John Doe"}
            customerEmail={"john.doe@example.com"}
            customerContact={"0912 456 7890"}
            customerAddress={"Cebu City"}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="mainlayout">
      <Navbar />
      <div className="step-container">
        <StepIndicator steps={steps} currentStep={currentStep} />
      </div>

      {renderStep()} 

      <div className="navigation-buttons">
        <button onClick={handleBack} className="nav-btn back-btn">Back</button>
        <button onClick={handleNext} disabled={!canProceed()} className="nav-btn next-btn">
          {currentStep === steps.length - 1 ? 'Confirm Booking' : 'Next'}
        </button>
      </div>
    </div>
  );
}

export default MainLayout;
