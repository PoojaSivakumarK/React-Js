import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Menu from './pages/Menu';
import ForgotPassword from './pages/ForgotPassword';
import AboutUs from './pages/AboutUs';
import FAQ from './pages/FAQ';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import ViewCart from './pages/ViewCart';
import Payment from './pages/Payment';
import Contact from './pages/Contact';
import './styles.css';
import './App.css';

function Main() {
  const [cart, setCart] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // <-- Added

  useEffect(() => {
    localStorage.setItem('flavorCart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    const existingIndex = cart.findIndex((cartItem) => cartItem.id === item.id);
    if (existingIndex !== -1) {
      const newCart = [...cart];
      newCart[existingIndex].quantity += item.quantity;
      setCart(newCart);
    } else {
      setCart([...cart, { ...item, quantity: item.quantity }]);
    }
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const updateQuantity = (index, change) => {
    setCart((prevCart) => {
      const updated = [...prevCart];
      updated[index].quantity = Math.max(1, updated[index].quantity + change);
      return updated;
    });
  };

  return (
    <div className="app">
      <Navbar cartCount={cart.length} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu addToCart={addToCart} />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/view-cart" element={<ViewCart cartItems={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default Main;
