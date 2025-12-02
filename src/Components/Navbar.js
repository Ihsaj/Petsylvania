import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Logo from '../Assets/Logo.png';
import './Navbar.css';

const Navbar = ({ page }) => {
  const navigate = useNavigate();

  // Navigate to login when Book Now is clicked
  const handleBookNow = () => {
    navigate('/login');
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
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/testimonials">Testimonials</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>

      {/* Show "Book Now" only on Landing page */}
      {page !== 'register' && (
        <button className="book-btn" onClick={handleBookNow}>
          Book Now
        </button>
      )}
    </nav>
  );
};

export default Navbar;
