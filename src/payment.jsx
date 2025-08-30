import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const PaymentPage = () => {
  const navigate = useNavigate();
  const [booking, setBooking] = useState(null);
  const [car, setCar] = useState(null);

  // ✅ Load booking & car data
  useEffect(() => {
    const savedBooking = JSON.parse(localStorage.getItem("booking"));
    const selectedCar = JSON.parse(localStorage.getItem("selectedCar"));

    if (savedBooking && selectedCar) {
      // merge image into booking
      setBooking({ ...savedBooking, img: selectedCar.img });
      setCar(selectedCar);
    } else if (savedBooking) {
      setBooking(savedBooking);
    }
  }, []);

  // ✅ Cash on Delivery
  const handleCOD = () => {
    toast.success("Booking confirmed! Pay at pickup location.");
    localStorage.removeItem("booking");
    navigate("/thankyou");
  };

  // ✅ Navigate to Razorpay page
  const handleRazorpay = () => {
    navigate("/razorpay");
  };

  if (!booking) {
    return <h2>Loading booking...</h2>;
  }

  return (
    <div className="payment-page">
      <div className="payment-box">
        <h2>Payment for Car Booking</h2>

  <div className="booking-summary">
  {booking.img ? (
    <img src={booking.img} alt={booking.carModel} className="car-image" />
  ) : (
    <p>No car image available</p>
  )}
  <p><strong>Name:</strong> {booking.name}</p>
  <p><strong>Email:</strong> {booking.email}</p>
  <p><strong>Phone:</strong> {booking.phone}</p>
  <p><strong>Car Model:</strong> {booking.carModel}</p>
  <p><strong>Pickup Location:</strong> {booking.pickupLocation}</p>
  <p><strong>From:</strong> {booking.startDate}</p>
  <p><strong>To:</strong> {booking.endDate}</p>
  <h4>Total Price: ₹{booking.totalPrice || "5000"}</h4>
</div>


        <div className="payment-options">
          <button className="submit-btn" onClick={handleCOD}>
            Pay at Pickup
          </button>
          <button className="submit-btn" onClick={handleRazorpay}>
            Pay Online with Razorpay
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
