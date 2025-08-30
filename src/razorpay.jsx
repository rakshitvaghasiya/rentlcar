import React, { useEffect, useState } from "react";

const Payment = () => {
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    const savedBooking = JSON.parse(localStorage.getItem("booking"));
    setBooking(savedBooking);
  }, []);

  const loadRazorpayScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

const handlePay = async () => {
  const res = await loadRazorpayScript("https://checkout.razorpay.com/v1/checkout.js");
  if (!res) {
    alert("Razorpay SDK failed to load. Check your internet connection.");
    return;
  }

  const options = {
    key: "rzp_test_U60nOOXhWT816c",
    amount: booking.totalPrice * 100,
    currency: "INR",
    name: "Car Rental Booking",
    description: `Payment for ${booking.carModel}`,
    handler: async function (response) {
      // Payment success → Save booking in DB
      const bookingData = {
        ...booking,
        razorpay_payment_id: response.razorpay_payment_id,
        status: "Paid",
        date: new Date().toLocaleString(),
      };

      try {
        // ✅ Save to DB
        await fetch("http:// 192.168.1.5:3010/api/bookings", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(bookingData),
        });

        // ✅ Also save in localStorage (My Bookings page)
        const existing = JSON.parse(localStorage.getItem("myBookings")) || [];
        localStorage.setItem("myBookings", JSON.stringify([...existing, bookingData]));

        localStorage.removeItem("booking"); // clear cart/booking

        // ✅ Redirect to Thank You page
        window.location.href = "/thankyou";
      } catch (error) {
        console.error("Error saving booking:", error);
        alert("Payment succeeded, but booking save failed. Contact support.");
      }
    },
    prefill: {
      name: booking.name,
      email: booking.email,
      contact: booking.phone,
    },
    notes: {
      car: booking.carModel,
      pickup: booking.pickupLocation,
    },
    theme: { color: "#3399cc" },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};
  if (!booking) return <h2>Loading booking...</h2>;

  return (
  <div className="payment-page">
    <div className="payment-box">
      <h2>Complete Your Payment</h2>
      <p><strong>Car:</strong> {booking.carModel}</p>
      <p><strong>Pickup:</strong> {booking.pickupLocation}</p>
      <p><strong>Total Price:</strong> ₹{booking.totalPrice}</p>

      <button className="pay-btn" onClick={handlePay}>
        Pay Online with Razorpay
      </button>
    </div>
  </div>
  );
};

export default Payment;
