import { useNavigate } from "react-router-dom";

const CarCard = ({ car }) => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    // Save selected car in localStorage
    localStorage.setItem("selectedCar", JSON.stringify(car));
    // Navigate to booking form
    navigate("/bookingform");
  };

  return (
    <div className="car-card">
      <img src={car.image} alt={car.name} />
      <h3>{car.name}</h3>
      <p>₹{car.price}/day</p>
      <button onClick={handleBookNow}>Book Now</button>
    </div>
  );
};

export default CarCard;
