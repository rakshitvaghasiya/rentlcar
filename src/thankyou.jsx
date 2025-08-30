import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const [lastBooking, setLastBooking] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // ✅ Get all bookings
    const stored = JSON.parse(localStorage.getItem("myBookings")) || [];
    if (stored.length > 0) {
      // ✅ Show the latest booking
      setLastBooking(stored[stored.length - 1]);
    }
  }, []);

  if (!lastBooking) {
    return (
      <div className="thankyou-page">
        <h2>Thank you! 🎉</h2>
        <p>No booking found.</p>
      </div>
    );
  }

  return (
    <div className="thankyou-page">
      <h2>🎉 Thank You for Your Booking!</h2>
      <p>Your booking has been successfully confirmed.</p>

      <div className="booking-card">
        {lastBooking.img && (
          <img
            src={lastBooking.img}
            alt={lastBooking.carModel}
            className="booking-image"
          />
        )}
        <div className="booking-info">
          <h3>{lastBooking.carModel}</h3>
          <p><strong>Pickup:</strong> {lastBooking.pickupLocation}</p>
          <p><strong>From:</strong> {lastBooking.startDate}</p>
          <p><strong>To:</strong> {lastBooking.endDate}</p>
          <p><strong>Total:</strong> ₹{lastBooking.totalPrice}</p>
          <p className={`status ${lastBooking.status.toLowerCase()}`}>
            Status: {lastBooking.status}
          </p>
        </div>
      </div>

      <button
        className="back-btn"
        onClick={() => navigate("/mybookings")}
      >
        View My Bookings
      </button>
    </div>
  );
};

export default ThankYou;
