import React from 'react';
import './ReviewBooking.css';
import { useNavigate } from 'react-router-dom';

import standard from '../../Assets/standard.png'; 
import deluxe from '../../Assets/deluxe.png';     
import luxury from '../../Assets/luxury.png';     
import petIconDog from '../../Assets/Dog.jpg'; 
import petIconCat from '../../Assets/Cat.jpg'; 
import petIconOther from '../../Assets/Others.jpg';

const ALL_ROOMS = [
    { id: 1, title: 'Standard Suite', price: 500, image: standard },
    { id: 2, title: 'Deluxe Suite', price: 1000, image: deluxe },
    { id: 3, title: 'Luxury Suite', price: 1500, image: luxury },
];

const ALL_SERVICES = [
    { id: 1, title: 'Grooming', price: 500, icon: '✂️' },
    { id: 2, title: 'Pet Spa', price: 500, icon: '🛁' },
    { id: 3, title: 'Training Session', price: 500, icon: '🎯' },
    { id: 4, title: 'Playtime', price: 500, icon: '🎾' },
    { id: 5, title: 'Medication', price: 500, icon: '💊' },
];

const ReviewBooking = ({ 
    selectedRoomId, 
    selectedServiceIds, 
    checkInDate, 
    checkOutDate, 
    pets,
    customerName = "John Doe",
    customerEmail = "johndoe@gmail.com",
    customerContact = "0912 456 7890",
    customerAddress = "Cebu City"
}) => {
    const navigate = useNavigate();
    
    const roomToReview = ALL_ROOMS.find(room => room.id === selectedRoomId);
    const servicesToReview = ALL_SERVICES.filter(service => selectedServiceIds.includes(service.id));
    
    const roomPrice = roomToReview ? roomToReview.price : 0;
    const servicesTotal = servicesToReview.reduce((sum, service) => sum + service.price, 0);
    
    const totalDurationInDays = (checkInDate && checkOutDate) 
        ? Math.max(1, Math.ceil((new Date(checkOutDate) - new Date(checkInDate)) / (1000 * 60 * 60 * 24)))
        : 1; 

    const totalPrice = (roomPrice * totalDurationInDays) + servicesTotal;
    
    const formatDate = (dateString) => {
        if (!dateString) return 'N/A';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
    };

    const handleConfirmBooking = () => {
        navigate('/confirmation');
    };

    const handleCancelBooking = () => {
        navigate('/dashboard'); 
    };

    const RoomReviewCard = ({ title, price, image }) => (
        <div className="review-card-item room-review-card">
            <img src={image} alt={title} className="review-room-img" />
            <div className="review-item-details">
                <p className="review-item-title">{title}</p>
                <p className="review-item-price">Price: ₱{price}</p>
            </div>
        </div>
    );

    const ServiceReviewCard = ({ title, price, icon }) => (
        <div className="review-card-item service-review-card">
            <div className="review-service-icon">{icon}</div>
            <p className="review-item-title">{title}</p>
            <p className="review-item-price">₱{price}</p>
        </div>
    );
    
    const PetReviewCard = ({ name, type }) => {
        let petImage;

        if (type === 'dog') {
            petImage = petIconDog;
        } else if (type === 'cat') {
            petImage = petIconCat;
        } else {
            petImage = petIconOther;
    }

        return (
            <div className="review-card-item pet-review-card">
                <img src={petImage} alt={name} className="review-pet-img" /> 
                <p className="review-item-title">{name || 'NAME'}</p>
                <p className="review-item-details">{type.charAt(0).toUpperCase() + type.slice(1)}</p>
            </div>
        );
    };

    return (
        <div className="review-booking-page">
            <div className="review-page-header">
                <h1 className="page-title">Review Your Booking</h1>
                <p className="page-subtitle">Almost there! Please review your reservation details</p>
            </div>

            <div className="review-content-grid">
                
                <div className="review-details-left">
                    
                    <div className="review-section customer-info">
                        <h2 className="review-section-title">Customer Information</h2>
                        <div className="customer-info-grid">
                            <div><span className="info-label">NAME</span><p>{customerName}</p></div>
                            <div><span className="info-label">EMAIL</span><p>{customerEmail}</p></div>
                            <div><span className="info-label">CONTACT NUMBER</span><p>{customerContact}</p></div>
                            <div><span className="info-label">ADDRESS</span><p>{customerAddress}</p></div>
                        </div>
                    </div>
                    
                    <div className="review-section">
                        <h2 className="review-section-title">Selected Rooms</h2>
                        <div className="review-grid rooms-grid">
                            {roomToReview ? (
                                <RoomReviewCard 
                                    title={roomToReview.title}
                                    price={roomToReview.price}
                                    image={roomToReview.image}
                                />
                            ) : (<p>No room selected.</p>)}
                        </div>
                    </div>

                    <div className="review-section">
                        <h2 className="review-section-title">Selected Services</h2>
                        <div className="review-grid services-review-grid">
                            {servicesToReview.map(service => (
                                <ServiceReviewCard 
                                    key={service.id} 
                                    title={service.title} 
                                    price={service.price}
                                    icon={service.icon} 
                                />
                            ))}
                        </div>
                    </div>

                    <div className="review-section">
                        <h2 className="review-section-title">Date Details</h2>
                        <div className="date-details-grid">
                            <div className="date-detail-box">
                                <span className="info-label">CHECK-IN</span>
                                <p>{formatDate(checkInDate)}</p>
                            </div>
                            <div className="date-detail-box">
                                <span className="info-label">CHECK-OUT</span>
                                <p>{formatDate(checkOutDate)}</p>
                            </div>
                        </div>
                    </div>

                    <div className="review-section">
                        <h2 className="review-section-title">Your Pets</h2>
                        <div className="review-grid pets-review-grid">
                            {pets.filter(p => p.name && p.type).map((pet, index) => (
                                <PetReviewCard 
                                    key={index}
                                    name={pet.name}
                                    type={pet.type}
                                />
                            ))}
                        </div>
                    </div>

                </div>

                <div className="review-summary-right">
                    <div className="booking-summary-box">
                        <h2 className="summary-title">Booking Summary</h2>
                        <div className="summary-details">
                            <div className="summary-line">
                                <span>{roomToReview ? roomToReview.title : 'Room'} ({totalDurationInDays} day/s)</span>
                                <span>₱{roomPrice * totalDurationInDays}</span>
                            </div>
                            <div className="summary-line">
                                <span>{servicesToReview.length} Services</span>
                                <span>₱{servicesTotal}</span>
                            </div>
                            <hr className="summary-divider"/>
                            <div className="summary-line total">
                                <span>Total Price</span>
                                <span>₱{totalPrice}</span>
                            </div>
                        </div>
                        
                        <button onClick={handleConfirmBooking} className="confirm-btn">
                            Confirm Booking
                        </button>
                        <button onClick={handleCancelBooking} className="cancel-btn">
                            Cancel Booking
                        </button>
                        <button onClick={() => navigate(-1)} className="nav-btn back-btn-review">Back</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ReviewBooking;