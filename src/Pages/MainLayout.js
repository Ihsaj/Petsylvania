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
  const navigate = useNavigate();
  const steps = ['Room', 'Service', 'Date', 'Pets', 'Review'];

  // --- STATE ---
  const [selectedRoom, setSelectedRoom] = useState(null); 
  const [selectedServices, setSelectedServices] = useState([]); 
  const [checkIn, setCheckIn] = useState(''); 
  const [checkOut, setCheckOut] = useState(''); 
  const [pets, setPets] = useState([{ name: '', type: '', breed: '', age: '' }]);

  const [savedPetIds, setSavedPetIds] = useState([]);

  // --- CUSTOMER DATA (Read from localStorage on load) ---
  const getCustomerData = () => {
    const userData = localStorage.getItem('user');
    return userData ? JSON.parse(userData) : null;
  };
  const customer = getCustomerData();
  const customerId = customer ? customer.customerId : null;

  // --- HELPER: Save Pets to Backend ---
  const savePetsToBackend = async () => {
      try {
          console.log("Auto-saving pets to database...");
          const petIds = [];
          for (const pet of pets) {
              if (pet.name && pet.type) {
                  const response = await fetch('http://localhost:8080/api/booking-pets', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify(pet)
                  });
                  const savedPet = await response.json();
                  petIds.push(savedPet.bookingPetId);
              }
          }
          console.log("All pets saved successfully! IDs:", petIds);
          setSavedPetIds(petIds);
          return true;
      } catch (error) {
          console.error("Failed to save pets:", error);
          alert("Error saving pets. Please try again.");
          return false;
      }
  };

  const handleConfirmBooking = async () => {
    if (!customer || !customerId) {
        alert("You must be logged in to confirm a booking.");
        navigate("/login");
        return;
    }

    const reservationPayload = {
        customerId: customerId, 
        checkInDate: checkIn, 
        checkOutDate: checkOut,
        roomId: selectedRoom, 
        serviceIds: selectedServices, 
        bookingPetIds: savedPetIds, 
        status: "Pending",
        totalPrice: 0, 
    };

    console.log("Final Reservation Payload:", reservationPayload);

    try {
        const response = await fetch(`http://localhost:8080/api/reservations`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reservationPayload),
        });

        if (response.ok) {
            const finalReservation = await response.json();
            alert(`Booking Confirmed! Your Reservation ID is: ${finalReservation.reservationId}`);
            navigate('/confirmation', { state: { reservationId: finalReservation.reservationId } }); 
        } else {
            const errorText = await response.text();
            alert(`Booking failed: ${errorText || 'Server error.'}`);
        }
    } catch (error) {
        console.error("Error creating final reservation:", error);
        alert("Network error. Could not finalize booking.");
    }
  };

  // --- NAVIGATION LOGIC ---
  const handleNext = async () => {
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
            pets={pets.filter(p => p.name && p.type)} 

            customerName={`${customer?.firstName || 'N/A'} ${customer?.lastName || ''}`}
            customerEmail={customer?.email || 'N/A'}
            customerContact={customer?.contactNumber || 'N/A'}
            customerAddress={customer?.address || 'N/A'}

            onConfirm={handleConfirmBooking}
            onBack={handleBack} 
          />
        );
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