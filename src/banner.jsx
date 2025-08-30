import React from 'react';
import { Link } from 'react-router-dom';

const CarBanner = () => {
  return (
    <div className="banner">
      <div className="overlay"></div>
      <div className="content">
        <h1>Drive Your Journey</h1>
        <p>
          Rent a car with ease, comfort, and unbeatable prices. Wherever you go,
          we’ve got the keys.
        </p>
        <Link to ="/bookingform" className="btn">Rent a Car Now</Link>
      </div>
    </div>
  );
};

export default CarBanner;
