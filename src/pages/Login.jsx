import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles.css';

const Login = ({ setIsLoggedIn }) => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem('flavorRushUser'));

    if (savedUser) {
      if (savedUser.email === form.email && savedUser.password === form.password) {
        alert('Logged in successfully!');
        setIsLoggedIn(true);
        navigate('/menu');
        setForm({ email: '', password: '' });
      } else {
        alert('Login incorrect. Please check your email or password.');
      }
    } else {
      alert('No account found. Please sign up first.');
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <br />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        required
      />
      <button type="submit" className="submit-button">Login</button>

      <div style={{ marginTop: '15px', textAlign: 'center', fontSize: '14px' }}>
        <p>
          <Link to="/forgot-password" className="form-link">
            Forgot Password?
          </Link>
        </p>
        <p>
          Don't have an account?{' '}
          <Link to="/signup" className="form-link">
            Sign Up
          </Link>
        </p>
      </div>
    </form>
  );
};

export default Login;
