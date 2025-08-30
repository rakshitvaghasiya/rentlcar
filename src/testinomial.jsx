import React from 'react';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-grid">

          <div className="testimonial-card">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Customer 1" />
            <p>"Renting a car here was seamless! Clean vehicle and friendly staff."</p>
            <h4>Sarah L.</h4>
          </div>

          <div className="testimonial-card">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Customer 2" />
            <p>"I hired a BMW for a weekend trip — great rates and no hassle!"</p>
            <h4>James M.</h4>
          </div>

          <div className="testimonial-card">
            <img src="https://randomuser.me/api/portraits/men/15.jpg" alt="Customer 3" />
            <p>"The booking process was fast, and the car was in perfect condition."</p>
            <h4>Daniel K.</h4>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
