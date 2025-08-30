import React, { useRef } from "react";
import axios from "axios";

const LoginPopup = ({ onClose, onLogin }) => {
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      const response = await axios.post("http://localhost:3010/user/login", {
        email,
        password,
      });

      const { status, name, email: userEmail } = response.data;

      if (status === "success") {
        const user = { name, email: userEmail };
        localStorage.setItem("currentUser", JSON.stringify(user));
        if (onLogin) onLogin(user);
        onClose();
        alert("Login successful!");
      } else {
        alert("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred while logging in. Please try again.");
    }
  };

  return (
    <div className="login-modal">
      <div className="login-box">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" required ref={emailRef} /><br />
          <input type="password" placeholder="Password" required ref={passwordRef} /><br />
          <button type="submit" className="submit-btn">Login</button>
          <p className="signup-link">
            Don’t have an account?{" "}
            <a href="/signup" style={{ color: "cyan" }}>Sign up first</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPopup;
