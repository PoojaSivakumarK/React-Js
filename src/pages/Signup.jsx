import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const Signup = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    countryCode: '+91',
    phone: '',
    address: '',
    acceptedTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password.length < 6) {
      alert('Password must be at least 6 characters!');
      return;
    }
    if (form.password !== form.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    if (form.phone.length !== 10) {
      alert('Phone number must be 10 digits!');
      return;
    }
    if (!form.acceptedTerms) {
      alert('You must agree to the Terms and Conditions!');
      return;
    }

    // Save signup details to localStorage
    localStorage.setItem('flavorRushUser', JSON.stringify({
      name: form.name,
      email: form.email,
      password: form.password
    }));

    alert('Account created successfully!');
    setForm({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      countryCode: '+91',
      phone: '',
      address: '',
      acceptedTerms: false,
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <br />
      <input name="name" value={form.name} onChange={handleChange} type="text" placeholder="Name" required />
      <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="Email" required />
      <input name="password" value={form.password} onChange={handleChange} type="password" placeholder="Password" required />
      <input name="confirmPassword" value={form.confirmPassword} onChange={handleChange} type="password" placeholder="Confirm Password" required />

      <div className="phone-section">
        <select name="countryCode" value={form.countryCode} onChange={handleChange}>
          <option value="+91">+91</option>
          <option value="+1">+1</option>
          <option value="+44">+44</option>
          <option value="+61">+61</option>
        </select>
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          type="tel"
          placeholder="Phone Number"
          required
        />
      </div>

      <textarea
        name="address"
        value={form.address}
        onChange={handleChange}
        placeholder="Delivery Address"
        required
        rows="4"
        style={{ width: '100%', padding: '10px', marginTop: '10px', borderRadius: '5px' }}
      ></textarea>

      <div style={{ display: 'flex', alignItems: 'center', marginTop: '15px', gap: '8px' }}>
        <input
          type="checkbox"
          name="acceptedTerms"
          checked={form.acceptedTerms}
          onChange={handleChange}
          required
          style={{ width: '18px', height: '18px', margin: 0 }}
        />
        <label style={{ fontSize: '14px', color: '#333', cursor: 'pointer' }}>
          I agree to the{' '}
          <Link to="/terms" style={{ color: '#ff6600', textDecoration: 'underline' }}>
            Terms and Conditions
          </Link>
        </label>
      </div>

      <br />
      <button
        type="submit"
        className="submit-button"
        disabled={!form.acceptedTerms}
        style={{
          background: form.acceptedTerms ? '#ff6600' : '#ccc',
          cursor: form.acceptedTerms ? 'pointer' : 'not-allowed'
        }}
      >
        Create Account
      </button>
    </form>
  );
};

export default Signup;
