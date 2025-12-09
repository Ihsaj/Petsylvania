import React, { useState } from 'react';
import './MainLayout.css';
import Navbar from '../Components/Navbar';
import StepIndicator from '../Components/StepIndicatorCom/StepIndicator';
import Room from './RoomPage/Room';
import Services from './ServicesPage/Services';
import DateComponent from './DatePage/Date'; 
import Pets from './PetsPage/Pets';
import ReviewBooking from './ReviewBookingPage/ReviewBooking.js';
import { useNavigate } from 'react-router-dom';

const API_BASE_URL = "http://localhost:8080";

const ALL_ROOMS = [
    { id: 1, title: 'Standard Suite', price: 500 },
    { id: 2, title: 'Deluxe Suite', price: 1000 },
    { id: 3, title: 'Luxury Suite', price: 1500 },
];
const ALL_SERVICES = [
    { id: 1, title: 'Grooming', price: 500, icon: '✂️' },
    { id: 2, title: 'Pet Spa', price: 500, icon: '🛁' },
    { id: 3, title: 'Training Session', price: 500, icon: '🎯' },
    { id: 4, title: 'Playtime', price: 500, icon: '🎾' },
    { id: 5, title: 'Medication', price: 500, icon: '💊' },
];

function MainLayout() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedServices, setSelectedServices] = useState([]);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [pets, setPets] = useState([{ name: '', type: '', breed: '', age: '' }]);

  const navigate = useNavigate();
  const steps = ['Room', 'Service', 'Date', 'Pets', 'Review'];

  const handleNext = async () => {
    if (currentStep === steps.length - 1) {
      const roomDetails = ALL_ROOMS.find(r => r.id === selectedRoom);
      const roomPrice = roomDetails ? roomDetails.price : 0;
      
      const servicesTotal = ALL_SERVICES.filter(s => selectedServices.includes(s.id))
                                       .reduce((sum, service) => sum + service.price, 0);
      
      const totalDurationInDays = (checkIn && checkOut) 
        ? Math.max(1, Math.ceil((new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24)))
        : 1;
        
      const totalPrice = (roomPrice * totalDurationInDays) + servicesTotal;

      const finalBookingData = {
        bookingId: "PETSY-" + Date.now().toString().slice(-6), 
        checkInDate: checkIn,
        checkOutDate: checkOut,
        room: roomDetails ? roomDetails.title : 'N/A',
        totalPrice: totalPrice,
        customerName: "John Doe", 
        pets: pets.filter(p => p.name).map(p => `${p.name} (${p.type})`)
      };

      navigate('/confirmation', { state: { booking: finalBookingData } });
      return;
    }
    
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => currentStep > 0 && setCurrentStep(currentStep - 1);

  const canProceed = () => {
    const datesAreValid = () => {
        if (!checkIn || !checkOut) return false;
        const checkInDate = new window.Date(checkIn);
        const checkOutDate = new window.Date(checkOut);
        return checkOutDate > checkInDate;
    };
    const petsAreValid = () => {
        return pets.length > 0 && pets.every(pet => pet.name && pet.type);
    };

    switch (currentStep) {
      case 0: return selectedRoom !== null;
      case 1: return true;
      case 2: return checkIn && checkOut && datesAreValid();
      case 3: return petsAreValid();
      case 4: return true; 
      default: return false;
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0: return <Room selectedRoom={selectedRoom} setSelectedRoom={setSelectedRoom} />;
      case 1: return <Services selectedServices={selectedServices} setSelectedServices={setSelectedServices} />;
      case 2: return <DateComponent checkIn={checkIn} setCheckIn={setCheckIn} checkOut={checkOut} setCheckOut={setCheckOut} />;
      case 3: return <Pets pets={pets} setPets={setPets} />;
      case 4: return (
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
            onBack={handleBack}
          />
        );
      default: return null;
    }
  };
  
  const nextButtonText = currentStep === steps.length - 1 ? 'Confirm Booking' : 'Next';
  
  const showGenericNavigation = currentStep < steps.length - 1; 

  return (
    <div className="mainlayout">
      <Navbar />
      <div className="step-container">
        <StepIndicator steps={steps} currentStep={currentStep} />
      </div>

      <div className="booking-content">
        {renderStep()}
      </div>

      {showGenericNavigation && (
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
                    {nextButtonText}
                </button>
            </div>
        </div>
      )}
    </div>
  );
}

export default MainLayout;