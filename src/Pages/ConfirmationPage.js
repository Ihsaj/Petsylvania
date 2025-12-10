import React, { useEffect, useState } from 'react';
import './ConfirmationPage.css';
import { useNavigate, useLocation } from 'react-router-dom';

const API_BASE_URL = 'http://localhost:8080';

const ROOMS_MOCK = { 1: 'Standard Suite', 2: 'Deluxe Suite', 3: 'Luxury Suite' };

const getCustomerDataFromStorage = () => {
    const userData = localStorage.getItem('user');
    return userData ? JSON.parse(userData) : { firstName: 'Unknown', lastName: 'Guest' };
};

const ConfirmationPage = ({ bookingDetails }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const reservationId = location.state?.reservationId;

    const [finalDetails, setFinalDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!reservationId) {
            setError("No reservation ID found in the link.");
            setLoading(false);
            return;
        }

        const fetchReservationDetails = async () => {
            try {
                const resResponse = await fetch(`${API_BASE_URL}/api/reservations/${reservationId}`);
                if (!resResponse.ok) throw new Error(`Reservation ID ${reservationId} not found.`);
                const reservation = await resResponse.json();
                
                const customerResponse = await fetch(`${API_BASE_URL}/api/customers/${reservation.customerId}`);
                const customer = await customerResponse.json();

                const petResponse = await fetch(`${API_BASE_URL}/api/booking-pets/batch?ids=${reservation.bookingPetIds.join(',')}`);
                const pets = await petResponse.json();

                const compiledDetails = {
                    bookingId: reservation.reservationId,
                    checkInDate: reservation.checkInDate,
                    checkOutDate: reservation.checkOutDate,
                    totalPrice: reservation.totalPrice,
                    room: ROOMS_MOCK[reservation.roomId] || `Room #${reservation.roomId}`, 
                    customerName: `${customer.firstName} ${customer.lastName}`,
                    pets: pets.map(p => p.name || `Pet ${p.bookingPetId}`),
                };

                setFinalDetails(compiledDetails);

            } catch (err) {
                console.error("Failed to fetch booking details:", err);
                setError(`Could not load reservation details: ${err.message}`);
            } finally {
                setLoading(false);
            }
        };

        fetchReservationDetails();
    }, [reservationId]);

    const formatDate = (dateString) => {
        if (!dateString) return 'N/A';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    };

    if (loading) {
        return (
            <div className="confirmation-page">
                <div className="confirmation-card">
                    <h1 className="success-title">Processing...</h1>
                    <p className="success-message">Loading your final reservation details...</p>
                </div>
            </div>
        );
    }
    
    if (error || !finalDetails) {
        const customerInfo = getCustomerDataFromStorage();
        const guestName = `${customerInfo.firstName} ${customerInfo.lastName}`;
        
        return (
            <div className="confirmation-page">
                <div className="confirmation-card error-card">
                    <h1 className="success-title" style={{ color: 'red' }}>Booking Failed/Missing Data ⚠️</h1>
                    <p className="success-message">
                        {error || "An unknown error occurred after confirming your booking. Please check your dashboard later."}
                    </p>
                    <p>Logged in as: **{guestName}**</p>
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