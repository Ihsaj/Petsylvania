import React from 'react';
import '../Pages/LandingPage.css';

import Navbar from '../Components/Navbar';
import ContactSection from '../Components/ContactSection';

const ContactUsPage = () => {
  return (
    <div className="landing-page">
      <Navbar />

      <main>
        <div id="contact" className="section-container">
          <ContactSection />
        </div>
      </main>
    </div>
  );
};

export default ContactUsPage;
