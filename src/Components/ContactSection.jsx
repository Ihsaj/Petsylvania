import React from "react";
import "./ContactSection.css";

const ContactSection = () => {
  return (
    <section className="section-container contact-section"> 
      <div className="section-box contact-box">
        <h2>Contact Us</h2>
        <p>Facebook: <b>Petsylvania</b></p>
        <p>Email: <b>petsylvania@gmail.com</b></p>
        <p>Phone: <b>+63 966 209 3711</b></p>
        <p>Location: <b>Cebu, Philippines</b></p>
      </div>
    </section>
  );
};

export default ContactSection;
