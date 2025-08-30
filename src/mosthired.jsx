import React from 'react';

const MostHired = () => {
  return (
    <section className="most-hired">
      <div className="container">
        <h2>Most Hired Vehicles</h2>
        <div className="vehicle-grid">

          <div className="vehicle-card">
            <img
              src="assets/images/harrier.jpg"
              alt="SUV"
            />
            <h3>Tata Harrier</h3>
            <p>From $45/day · Automatic · 5 Seats</p>
          </div>

          <div className="vehicle-card">
            <img
              src="assets/images/slavia.webp"
              alt="Sedan"
            />
            <h3>Skoda Slavia </h3>
            <p>From $35/day · Automatic · Fuel Efficient</p>
          </div>

          <div className="vehicle-card">
            <img
              src="assets/images/Bmw-m5.avif"
              alt="Luxury"
            />
            <h3>BMW 5 Series</h3>
            <p>From $85/day · Luxury · Automatic</p>
          </div>

          <div className="vehicle-card">
            <img
              src="assets/images/velar.avif"
              alt="Luxury"
            />
            <h3>Velar</h3>
            <p>From $60/day · Automatic</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MostHired;
