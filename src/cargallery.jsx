import React from "react";
import { useNavigate } from "react-router-dom";

const cars = [
  {
    id: 1,
    name: "Toyota Fortuner",
    price: "₹2500/day",
    image: "assets/images/fortuner.webp ",
  },
  {
    id: 2,
    name: "Mahindra Thar",
    price: "₹1800/day",
    image: "assets/images/Thar.jpg",
  },
  {
    id: 3,
    name: "Hyundai Creta",
    price: "₹1600/day",
    image: "assets/images/creta.jpg",
  },
  {
    id: 4,
    name: "Kia Seltos",
    price: "₹1700/day",
    image: "assets/images/seltos.png",
  },
    {
    id: 5,
    name: "Slavia",
    price: "₹2700/day",
    image: "assets/images/slavia.webp",
  },
      {
    id: 6,
    name: "Harrier",
    price: "₹3000/day",
    image: "assets/images/harrier.jpg",
  },
        {
    id: 7,
    name: "Defender",
    price: "₹5000/day",
    image: "assets/images/Defender.jpg",
  },
    {
    id: 8,
    name: "Velar",
    price: "₹4500/day",
    image: "assets/images/Velar.avif",
  },
      {
    id:9,
    name: "Bmw M3",
    price: "₹5500/day",
    image: "assets/images/Bmw-m3.webp",
  },
      {
    id: 10,
    name: "Mansory Ghost",
    price: "₹10000/day",
    image: "assets/images/Mansory-ghost.jpeg",
  },
      {
    id: 11,
    name: "Innova",
    price: "₹4500/day",
    image: "assets/images/Innova.avif",
  },
        {
    id: 11,
    name: "Bmw M5",
    price: "₹6500/day",
    image: "assets/images/Bmw-m5.avif",
  },

  
  
  
];

const CarGallery = () => {
  const navigate = useNavigate();

  const handleBookNow = (car) => {
    localStorage.setItem("selectedCar", JSON.stringify(car));
    navigate("/bookingform");
  };

  return (
    <section className="car-gallery-section">
      <div className="container">
        <h2 className="gallery-title">Choose Your Ride</h2>
        <div className="gallery-grid">
          {cars.map((car) => (
            <div key={car.id} className="car-card">
              <img src={car.image} alt={car.name} className="car-image" />
              <div className="car-details">
                <h3>{car.name}</h3>
                <p className="car-price">{car.price}</p>
                <button className="book-btn" onClick={() => handleBookNow(car)}>
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarGallery;
