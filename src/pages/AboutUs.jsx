import React from 'react';
import '../styles.css';

const AboutUs = () => {
  return (
    <div className="text-page">
      <h1>About FlavorRush</h1>
      <p>
        Welcome to <strong>FlavorRush</strong>, your ultimate destination for food lovers!  
        We bring the best flavors from around the world — Indian, Chinese, and Italian — right to your doorstep.
      </p>

      <p>
        Our journey began with a simple idea: 
        making delicious, high-quality meals accessible to everyone, anytime, anywhere. 
        We collaborate with top chefs to create a menu that’s filled with authentic, mouthwatering dishes.
      </p>

      <p>
        Whether you’re craving spicy curries, rich pastas, or savory stir-fried delicacies, 
        FlavorRush ensures that every meal is a celebration of taste, quality, and freshness.
      </p>

      <h3>Our Mission</h3>
      <p>
        To deliver happiness in every bite while maintaining the highest standards of food quality, hygiene, and customer satisfaction.
      </p>

      <h3>Why Choose Us?</h3>
      <ul class="about-ul">
        <li>Fresh ingredients sourced daily</li>
        <li>Skilled chefs and authentic recipes</li>
        <li>Fast and safe delivery</li>
        <li>Secure payments and easy checkout</li>
        <li>Excellent customer support</li>
      </ul>

      <p style={{ textAlign: 'center', marginTop: '20px' }}>
        Thank you for making FlavorRush a part of your food journey!
      </p>
    </div>
  );
};

export default AboutUs;
