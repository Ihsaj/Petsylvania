import React from 'react';
import Logo from '../Assets/Logo.png';
import ProfileIcon from '../Assets/ProfileLogo.png';  
import './Navbar.css';
import { useNavigate, Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

const handleBookNow = () => {
  switch (location.pathname) {
    case "/":
      navigate("/login");
      break;

    case "/dashboard":
      navigate("/mainlayout-roomservices");
      break;

    default:
      navigate("/login");
      break;
  }
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

      <div className="nav-actions">
        <button className="book-btn" onClick={handleBookNow}>Book Now</button>

        <img 
          src={ProfileIcon}
          alt="Profile"
          className="profile-icon"
          onClick={() => navigate('/profile')}
        />
      </div>
    </nav>
  );
};    

export default Navbar;
