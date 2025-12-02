import '../Pages/LandingPage.css';

import Navbar from '../Components/Navbar';
import HeroSection from '../Components/HeroSection';
import AboutSection from '../Components/AboutSection';
import ContactSection from '../Components/ContactSection';
import TestimonialsSection from '../Components/TestimonialsSection';

const Landing_Page = () => {
  return (
    <div className="landing-page">
      <Navbar />

      <main>

        <div id="home" className="section-container hero">
          <HeroSection />
        </div>

        <div id="about" className="section-container">
          <AboutSection />
        </div>

        <div id="testimonials" className="section-container">
          <TestimonialsSection />
        </div>

        <div id="contact" className="section-container">
          <ContactSection />
        </div>

      </main>
    </div>
  );
};


export default Landing_Page;
