import React from 'react';
import Logo from '../Assets/Logo.png';
import './Navbar.css';

const Navbar = () => {
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
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>

      <button className="book-btn">Book Now</button>
    </nav>
  );
};    

export default Navbar;
