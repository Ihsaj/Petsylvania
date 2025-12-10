import React from 'react';
import Logo from '../Assets/Logo.png';
import ProfileIcon from '../Assets/ProfileLogo.png'; 
import './Navbar.css';
import { useNavigate, Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // List of paths that are "inside" the app (logged in)
    const internalUserPaths = [
        '/dashboard', 
        '/mainlayout', 
        '/reviewbooking', 
        '/profile', 
        '/petprofile',
        '/confirmation',
        '/mainlayout-roomservices' // Added this just in case
    ];

    // --- FIX: ADDED MISSING LOGOUT FUNCTION ---
    const handleLogout = () => {
        // 1. Clear any stored data (optional but recommended)
        // localStorage.removeItem('userToken'); 
        // localStorage.removeItem('userData');

        // 2. Redirect to Login Page
        console.log("User logged out");
        navigate('/');
    };

    const handleBookNow = () => {
        // If user is on an internal page, go to booking layout
        if (internalUserPaths.some(path => location.pathname.startsWith(path))) {
            navigate("/mainlayout-roomservices");
        }
        else {
            // If guest, force login first
            navigate("/login");
        }
    };

    const getHomePath = () => {
        if (internalUserPaths.some(path => location.pathname.startsWith(path))) {
            return '/dashboard'; 
        }
        return '/';
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <img 
                    src={Logo}
                    alt="Petsylvania Logo"
                    className="logo-img"
                />
            </div>

            <ul className="nav-links">
                <li><Link to={getHomePath()}>Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/testimonials">Testimonials</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>

            <div className="nav-actions">
                <button className="book-btn" onClick={handleBookNow}>
                    Book Now
                </button>

                {/* Only show Profile/Logout if on Dashboard */}
                {location.pathname === '/dashboard' && (
                    <>
                        <img
                            src={ProfileIcon}
                            alt="Profile"
                            className="dashboard-profile-icon"
                            onClick={() => navigate('/profile')}
                            style={{cursor: 'pointer', marginLeft: '15px', width: '40px'}}
                        />
                        <button 
                            className="logout-btn"
                            onClick={handleLogout} // Now this exists!
                            style={{marginLeft: '10px'}}
                        >
                            Logout
                        </button>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;