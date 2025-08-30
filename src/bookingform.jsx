import React, { useState, useEffect } from "react";
import axios from "axios";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    carModel: "",
    pricePerDay: 0,
    startDate: "",
    endDate: "",
    pickupLocation: "",
    totalPrice: 0,
    img: "", // ✅ store car image
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser")) || {};
    const car = JSON.parse(localStorage.getItem("selectedCar")) || {};

    let numericPrice = 0;
    if (car.price) numericPrice = parseInt(car.price.toString().replace(/[^\d]/g, ""), 10);

    setFormData((prev) => ({
      ...prev,
      name: user.name || "",
      email: user.email || "",
      phone: user.phone || "",
      carModel: car.name || "",
      pricePerDay: numericPrice || 0,
      img: car.img || "", // ✅ save image along with booking
    }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updatedForm = { ...prev, [name]: value };

      if (updatedForm.startDate && updatedForm.endDate) {
        const start = new Date(updatedForm.startDate);
        const end = new Date(updatedForm.endDate);
        if (end >= start) {
          const diffDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;
          updatedForm.totalPrice = diffDays * (Number(updatedForm.pricePerDay) || 0);
        } else {
          updatedForm.totalPrice = 0;
        }
      }
      return updatedForm;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3010/api/bookings", formData);
      if (response.data.success) {
        localStorage.setItem("booking", JSON.stringify(formData));
        localStorage.removeItem("selectedCar");
        window.location.href = "/payment";
      } else {
        alert(response.data.error || "Booking failed");
      }
    } catch (error) {
      console.error("Booking error:", error);
      alert("An error occurred while booking");
    }
  };

  return (
    <div className="booking-page">
      <div className="booking-box">
        <h2>Book a Car</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Full Name" required value={formData.name} onChange={handleChange} /><br />
          <input type="email" name="email" placeholder="Email" required value={formData.email} onChange={handleChange} /><br />
          <input type="tel" name="phone" placeholder="Phone Number" required value={formData.phone} onChange={handleChange} /><br />
          <input type="text" name="carModel" placeholder="Car Model" required value={formData.carModel} readOnly /><br />
          <input type="text" name="pricePerDay" value={`₹${formData.pricePerDay} / day`} readOnly /><br />
          <label>Rental Start Date:</label><br />
          <input type="date" name="startDate" required value={formData.startDate} onChange={handleChange} /><br />
          <label>Rental End Date:</label><br />
          <input type="date" name="endDate" required value={formData.endDate} onChange={handleChange} /><br />
          <input type="text" name="pickupLocation" placeholder="Pickup Location" required value={formData.pickupLocation} onChange={handleChange} /><br />
          <input type="text" name="totalPrice" value={formData.totalPrice ? `₹${formData.totalPrice}` : ""} readOnly /><br />
          <button type="submit" className="submit-btn">Confirm Booking</button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
