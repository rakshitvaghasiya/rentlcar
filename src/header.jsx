import React, { useState } from "react";
import LoginPopup from "./loginpopup";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser")) || null
  );
const navigate = useNavigate();
  const handleLogin = (user) => {
    console.log("User logged in:", user);
    setCurrentUser(user);
  };

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    navigate("/"); // Redirect to home after logout
  };

  return (
    <>
      <header className="car-header">
        <div className="car-header-container">
          {/* Logo */}
          <div className="car-header-logo">
            <img src="assets/images/logo2.png" alt="Car Logo" /> 
          </div>

          {/* Desktop Navigation */}
          <nav className={`car-header-nav ${menuOpen ? "active" : ""}`}>
            <div className="menuclose-btn" onClick={() => setMenuOpen(false)}>✖</div>
            <a href="/">Home</a>
            <a href="/cars">Cars</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </nav>

          {/* Right Side */}
          <div className="car-header-right">
            {currentUser ? (
              <div className="user-menu">
                <button className="car-header-btn">
                  <FaUser /> {currentUser.name || "User"}
                </button>
                <ul className="user-dropdown">
                  <li><a href="/profile">Profile</a></li>
                  <li><a href="/mybookings">My Bookings</a></li>
                  <li onClick={handleLogout} style={{ cursor: "pointer" }}>Logout</li>
                </ul>
              </div>
            ) : (
              <button
                className="car-header-btn"
                onClick={(e) => {
                  e.preventDefault();
                  setShowLoginPopup(true);
                }}
              >
                Login / Sign Up
              </button>
            )}
            <div className="menu-toggle" onClick={() => setMenuOpen(true)}>☰</div>
          </div>
        </div>
      </header>

      {/* Show popup only when true */}
      {showLoginPopup && (
        <LoginPopup
          onClose={() => setShowLoginPopup(false)}
          onLogin={handleLogin}
        />
      )}
    </>
  );
};

export default Header;
