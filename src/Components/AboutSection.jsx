    import React from "react";
    import "./AboutSection.css";

    const AboutSection = () => {
    return (
        <section className="section-container">
        <div className="section-box">
            <h2>About Us</h2>
            <p>
                Petsylvania provides premium, safe, and comfortable pet accommodations.
                Your fur babies enjoy cozy rooms, attentive staff, and a stress-free stay
                while you're away.
            </p>
            <p>
                At Petsylvania, we believe every pet deserves love, care, and a home-away-from-home
                experience. Our trained caregivers ensure that your pets receive personalized 
                attention, regular playtime, and a healthy diet tailored to their needs.
            </p>
            <p>We offer a variety of services, including:</p>
            <ul>
                <li>Luxurious boarding with soft bedding and climate-controlled rooms</li>
                <li>Daily exercise and interactive play sessions</li>
                <li>Grooming and hygiene services to keep your pets looking their best</li>
                <li>Special care for senior pets or those with medical needs</li>
            </ul>
            <p>
                Our mission is to provide a safe, nurturing, and fun environment where pets 
                feel happy, secure, and loved. Whether it’s a short stay or an extended vacation, 
                Petsylvania is dedicated to giving your pets the ultimate care and comfort.
            </p>
            <p>
                Because here at Petsylvania, it’s not just pet care — it’s <b>a second home for your 
                beloved companions.</b>
            </p>
        </div>
        </section>
    );
    };

    export default AboutSection;
