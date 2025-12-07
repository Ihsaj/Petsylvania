import React from 'react';
import './ConfirmationPage.css';
import { useNavigate, useLocation } from 'react-router-dom';

const ConfirmationPage = ({ bookingDetails }) => {
    const navigate = useNavigate();
    const location = useLocation();

    // Use mock data if no state is passed (for initial rendering)
    const mockDetails = {
        bookingId: "PETSY-20251207-42",
        checkInDate: "2025-11-11",
        checkOutDate: "2025-11-25",
        room: "Deluxe Suite",
        totalPrice: 20500,
        customerName: "John Doe",
        pets: ["Buster (Dog)", "Mittens (Cat)"]
    };

    // Attempt to use passed state, otherwise use mock details
    const details = location.state?.booking || mockDetails;

    const formatDate = (dateString) => {
        if (!dateString) return 'N/A';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    };

    return (
        <div className="confirmation-page">
            <div className="confirmation-card">
                
                <div className="confirmation-header">
                    <h1 className="success-title">Booking Confirmed! 🎉</h1>
                    <p className="success-message">
                        Thank you for choosing Petsylvania. Your reservation is complete.
                    </p>
                </div>
                
                <div className="confirmation-details">
                    <h2 className="section-title">Reservation Details</h2>
                    
                    <div className="detail-group">
                        <span className="detail-label">Booking ID:</span>
                        <span className="detail-value bold-value">{details.bookingId}</span>
                    </div>

                    <div className="detail-group">
                        <span className="detail-label">Guest Name:</span>
                        <span className="detail-value">{details.customerName}</span>
                    </div>

                    <div className="detail-group">
                        <span className="detail-label">Check-in:</span>
                        <span className="detail-value">{formatDate(details.checkInDate)}</span>
                    </div>
                    
                    <div className="detail-group">
                        <span className="detail-label">Check-out:</span>
                        <span className="detail-value">{formatDate(details.checkOutDate)}</span>
                    </div>
                    
                    <div className="detail-group">
                        <span className="detail-label">Room Type:</span>
                        <span className="detail-value">{details.room}</span>
                    </div>
                    
                    <div className="detail-group">
                        <span className="detail-label">Pets:</span>
                        <span className="detail-value">{details.pets.join(', ')}</span>
                    </div>

                    <div className="total-price-line">
                        <span className="total-label">Total Amount:</span>
                        <span className="total-value">₱{details.totalPrice.toLocaleString()}</span>
                    </div>
                </div>

                <div className="confirmation-actions centered-action">
                    <button 
                        onClick={() => navigate('/dashboard')} 
                        className="action-btn dashboard-btn full-width-btn"
                    >
                        Go to Dashboard
                    </button>
                </div>
            </div>
            
            <p className="note-text">
                Your reservation details are available on your dashboard.
            </p>
        </div>
    );
};

export default ConfirmationPage;