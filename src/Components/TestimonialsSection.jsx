import React from "react";
import "./TestimonialsSection.css";

const TestimonialsSection = () => {
  return (
    <section className="section-container testimonials-section">
      <div className="section-box testimonials-box">
        <h2>Testimonials</h2>

        <div className="testimonial-list">
          <div className="testimonial-card">
            <p>“Amazing service! My dog didn't want to go home.”</p>
            <h4>- Oswa M.</h4>
          </div>

          <div className="testimonial-card">
            <p>“Super clean, friendly, and safe. Highly recommended!”</p>
            <h4>- Espanol H.</h4>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
