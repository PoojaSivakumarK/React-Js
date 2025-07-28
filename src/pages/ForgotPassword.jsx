import React, { useState } from 'react';
import '../styles.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Password recovery link has been sent to ${email}`);
    setEmail(''); 
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Forgot Password</h2>
      <input
        type="email"
        placeholder="Enter your registered email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit" className="submit-button">Send Recovery Email</button>
    </form>
  );
};

export default ForgotPassword;
