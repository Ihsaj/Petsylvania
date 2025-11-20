import React from "react";
import "../Css/Navbar.css"; // import your Navbar CSS
import logo from "../Assets/Logo_.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Petsylvania Logo" />
      </div>
      <ul className="nav-links">
        <li>Home</li>
        <li>About Us</li>
        <li>Testimonials</li>
        <li>Contact Us</li>
      </ul>
      <button className="book-btn">Book Now</button>
    </nav>
  );
}
