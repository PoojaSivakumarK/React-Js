// src/pages/Contact.jsx
import React, { useState } from 'react';
import '../styles.css';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setForm({ name: '', email: '', message: '' }); // Reset the form
  };

  return (
    <div className="text-page">
      <h2>Contact Us</h2>
      <p>If you have any queries, feedback, or partnership proposals, feel free to reach out to us!</p>

      <div className="contact-details">
        <p><strong>Email:</strong> support@flavorrush.com</p>
        <p><strong>Phone:</strong> +91 98765 43210</p>
        <p><strong>Address:</strong> FlavorRush Restaurant, 123 street, Anna Nagar, Chennai, India.</p>
      </div>

      <h3>Send Us a Message</h3>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
