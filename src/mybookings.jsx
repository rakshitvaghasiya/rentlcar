import React, { useEffect, useState } from "react";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (!user?.email) return;

    fetch(`http://:3010/api/bookings/${user.email}`)
      .then((res) => res.json())
      .then((data) => setBookings(data))
      .catch((err) => console.error("Error loading bookings:", err));
  }, []);

  return (
    <div className="my-bookings">
      <h2 className="title">📑 My Bookings</h2>
      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        <div className="bookings-grid">
          {bookings.map((b, i) => (
            <div key={i} className="booking-card">
              {b.img && <img src={b.img} alt={b.carModel} className="booking-image" />}
              <div className="booking-info">
                <h3>{b.carModel}</h3>
                <p><strong>Pickup:</strong> {b.pickupLocation}</p>
                <p><strong>From:</strong> {b.startDate}</p>
                <p><strong>To:</strong> {b.endDate}</p>
                <p><strong>Total:</strong> ₹{b.totalPrice}</p>
                <p className={`status ${b.status?.toLowerCase()}`}>Status: {b.status || "Pending"}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookings;
