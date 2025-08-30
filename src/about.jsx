import React from "react";

const AboutUs = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Us</h2>
        <p className="about-text">
          Welcome to <strong>FastRide Rentals</strong> – your go-to destination for reliable and affordable car rental services. We provide a wide range of well-maintained vehicles suitable for all types of travel, whether it's a family trip, business meeting, or a weekend getaway.
        </p>
        <div className="image-row">
          <img src="assets/images/velar.avif" alt="seltos" className="about-img" />
          <img src="assets/images/thar.jpg" alt="Thar" className="about-img" />
        </div>

        <div className="our-work">
          <h3>What We Do</h3>
          <p>
We are a locally-owned car rental service with a passion for travel and customer service. With a wide fleet ranging from compact cars to luxury SUVs, we cater to all travel needs – short-term or long-term.

Our mission is to provide:

    Safe and clean vehicles

    Competitive pricing

    Hassle-free booking and return process

    24/7 customer support <br />
    
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
