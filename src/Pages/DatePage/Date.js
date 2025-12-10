import React from 'react';
import './Date.css';

const DateComponent = ({ checkIn, setCheckIn, checkOut, setCheckOut }) => {
  
  // Get today's date to prevent booking in the past
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="date-page">
      <h1 className="page-title">Date</h1>
      <p className="page-subtitle">Choose your check-in and check-out dates</p>
      
      <div className="date-form">
        <div className="form-group">
          <label className="form-label">Check-in Date</label>
          <input
            type="date"
            min={today}
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="form-input"
          />
        </div>
        
        <div className="form-group">
          <label className="form-label">Check-out Date</label>
          <input
            type="date"
            min={checkIn || today} // Check-out cannot be before check-in
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="form-input"
          />
        </div>
      </div>
    </div>
  );
};

export default DateComponent;