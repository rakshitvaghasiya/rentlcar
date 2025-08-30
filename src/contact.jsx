import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent! (This is just a frontend example)");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Get in Touch</h2>
        <div className="contact-grid">

          <div className="contact-info">
            <h3>Contact Information</h3>
            <p><strong>Phone:</strong> +1 800-123-4567</p>
            <p><strong>Email:</strong> support@carrental.com</p>
            <p><strong>Address:</strong> 123 Main Street, City, Country</p>
            <p><strong>Hours:</strong> Mon–Sat: 8:00 AM – 6:00 PM</p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              value={formData.message}
              onChange={handleChange}
            />
            <button type="submit">Send Message</button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
