import React from 'react';
import '../styles.css'; 

const Home = () => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <img
          src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
          alt="FlavorRush Banner"
          className="hero-image"
        />
        <div className="hero-text">
          <h1>Welcome to FlavorRush</h1>
          <p>Discover the finest Indian, Chinese, and Italian dishes, crafted with love and passion! Order now and enjoy the burst of flavors at your doorstep.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
