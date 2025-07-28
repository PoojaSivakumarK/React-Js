// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2025 FlavorRush. All Rights Reserved.</p>

        <div className="footer-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <p className="footer-tagline">Made with ❤️ for Food Lovers.</p>
      </div>
    </footer>
  );
};

export default Footer;
