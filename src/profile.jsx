import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const UpdateProfile = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("currentUser")) || {}
  );
  const [formData, setFormData] = useState({
    name: user.name || "",
    email: user.email || "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        password: "",
        confirmPassword: "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password && formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await axios.put("http://:3010/user/update-profile", {
        email: formData.email,
        name: formData.name,
        password: formData.password || null,
      });

      if (response.data.status === "success") {
        alert("Profile updated successfully!");
        const updatedUser = { name: formData.name, email: formData.email };
        localStorage.setItem("currentUser", JSON.stringify(updatedUser));
        setUser(updatedUser);
      } else {
        alert(response.data.message || "Failed to update profile");
      }
    } catch (error) {
      console.error("Update error:", error);
      alert("An error occurred while updating profile");
    }
  };

  return (
    <div className="profile-page">
      <div className="profile-box">
        <h2>Update Profile</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Full Name"
            required
            onChange={handleChange}
          />
          <br />
          <input type="email" name="email" value={formData.email} disabled />
          <br />

          {/* Password field with eye */}
<div className="input-group">
  <input
    type={showPassword ? "text" : "password"}
    name="password"
    value={formData.password}
    placeholder="New Password (optional)"
    onChange={handleChange}
  />
  <span
    className="toggle-eye"
    onClick={() => setShowPassword(!showPassword)}
  >
    {showPassword ? <FaEyeSlash /> : <FaEye />}
  </span>
</div>

<div className="input-group">
  <input
    type={showConfirmPassword ? "text" : "password"}
    name="confirmPassword"
    value={formData.confirmPassword}
    placeholder="Confirm New Password"
    onChange={handleChange}
    required={!!formData.password}

  />
  <span
    className="toggle-eye"
    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
  >
    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
  </span>
</div>

          <button type="submit" className="submit-btn">
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
