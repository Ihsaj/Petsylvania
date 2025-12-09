import React from 'react';
import './ConfirmationPage.css';
import { useNavigate, useLocation } from 'react-router-dom';

const ConfirmationPage = ({ bookingDetails }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const details = location.state?.booking;

    const fallbackDetails = {
        bookingId: "N/A",
        checkInDate: null,
        checkOutDate: null,
        room: "N/A",
        totalPrice: 0,
        customerName: "Unknown Guest",
        pets: ["No pets listed"]
    };

    const finalDetails = details || fallbackDetails;

    const formatDate = (dateString) => {
        if (!dateString) return 'N/A';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    };

    if (!details) {
        return (
            
            <div className="confirmation-page">
                <div className="confirmation-card error-card">
                    <h1 className="success-title" style={{ color: 'red' }}>Booking Data Missing! ⚠️</h1>
                    <p className="success-message">
                        This page was accessed without valid reservation data. Please start a new booking or check your dashboard.
                    </p>
                    <div className="confirmation-actions centered-action">
                        <button 
                            onClick={() => navigate('/dashboard')} 
                            className="action-btn dashboard-btn full-width-btn"
                        >
                            Go to Dashboard
                        </button>
                    </div>
                </div>
            </div>
        );
    }

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
                        <span className="detail-value bold-value">{finalDetails.bookingId}</span>
                    </div>

                    <div className="detail-group">
                        <span className="detail-label">Guest Name:</span>
                        <span className="detail-value">{finalDetails.customerName}</span>
                    </div>

                    <div className="detail-group">
                        <span className="detail-label">Check-in:</span>
                        <span className="detail-value">{formatDate(finalDetails.checkInDate)}</span>
                    </div>
                    
                    <div className="detail-group">
                        <span className="detail-label">Check-out:</span>
                        <span className="detail-value">{formatDate(finalDetails.checkOutDate)}</span>
                    </div>
                    
                    <div className="detail-group">
                        <span className="detail-label">Room Type:</span>
                        <span className="detail-value">{finalDetails.room}</span>
                    </div>
                    
                    <div className="detail-group">
                        <span className="detail-label">Pets:</span>
                        <span className="detail-value">{finalDetails.pets.join(', ')}</span>
                    </div>

                    <div className="total-price-line">
                        <span className="total-label">Total Amount:</span>
                        <span className="total-value">₱{finalDetails.totalPrice.toLocaleString()}</span>
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