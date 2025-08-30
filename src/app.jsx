import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import CarHeader from "./header";
import Home from "./home";
import Footer from "./footer";
import CarGallery from "./cargallery";
import AboutUs from "./about";
import LoginPopup from "./loginpopup";
import Contact from "./contact";
import Signup from "./signup";  
import BookingForm from "./bookingform";
import UpdateProfile from "./profile";
import PaymentPage from "./payment";
import Payment from "./razorpay";
import ThankYouPage from "./thankyou";
import MyBookings from "./mybookings";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showsignup, setShowsignup] = useState(false);

  const handleLogin = (data) => {
    localStorage.setItem("currentUser", JSON.stringify(data));
    setShowLogin(false);
  };

  const handleSignup = (data) => {
    localStorage.setItem("currentUser", JSON.stringify(data));
  };

  return (
    <>
      <CarHeader onLoginClick={() => setShowLogin(true)} />

      {showLogin && (
        <LoginPopup 
          onClose={() => setShowLogin(false)} 
          onLogin={handleLogin} 
        />
      )}
      {showsignup && (
        <Signup 
          onClose={() => setShowsignup(false)} 
          onSignup={handleSignup} 
        />
      )}

      {/* Main Routes */  }
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<CarGallery />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
        <Route path="/bookingform" element={<BookingForm/>}/>
        <Route path="/profile" element={<UpdateProfile/>}/>
        <Route path="/payment" element={<PaymentPage/>}/>
        <Route path="/razorpay" element={<Payment/>}/>
        <Route path="/thankyou" element={<ThankYouPage/>}/>
        <Route path="/mybookings" element={<MyBookings/>}/>
      </Routes>

      <Footer />
    </>
  );
};

export default App;
