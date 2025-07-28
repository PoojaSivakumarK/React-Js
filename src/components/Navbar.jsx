// src/components/Navbar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles.css'; // Make sure you have the necessary CSS

const Navbar = ({ cartCount, isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);  // Mark user as logged out
    alert('Logged out successfully!');
    navigate('/login');    // Redirect to login page
  };

  return (
    <header className="navbar">
      <div className="logo">FlavorRush</div>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/view-cart">Cart ({cartCount})</Link>
        <Link to="/about-us">About Us</Link>

        {isLoggedIn ? (
          <>
            <Link to="/menu" style={{ color: '#fff', fontWeight: 'bold' }}></Link>
            <button onClick={handleLogout} className="logout-button">Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
