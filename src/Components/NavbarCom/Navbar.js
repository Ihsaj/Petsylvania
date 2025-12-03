import React from 'react';
import './Navbar.css';
import logo from '../../Assets/Logo.png'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Petsylvania Logo" />
        {/* or just text: <div className="logo-text">PETSYLVANIA</div> */}
      </div>
      <ul className="nav-links">
        <li><a href="#" className="nav-link">Home</a></li>
        <li><a href="#" className="nav-link">About Us</a></li>
        <li><a href="#" className="nav-link">Testimonials</a></li>
        <li><a href="#" className="nav-link">Contact Us</a></li>
      </ul>
      <button className="book-btn">Book Now</button>
    </nav>
  );
};

export default Navbar;
