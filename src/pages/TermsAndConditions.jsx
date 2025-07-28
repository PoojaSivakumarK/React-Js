import React from 'react';
import '../styles.css';

const TermsAndConditions = () => {
  return (
    <div className="text-page">
      <h2>Terms & Conditions</h2>
      <br />
      <p>Welcome to FlavorRush!</p>
      <br />
      <p>By using our services, you agree to the following terms:</p>
      <ul style={{ marginTop: '10px', marginLeft: '20px' }}>
        <li>Orders are subject to availability and delivery conditions.</li>
        <li>FlavorRush reserves the right to cancel or modify orders when necessary.</li>
        <li>Payment must be completed before order dispatch.</li>
        <li>Users must provide accurate information for delivery and communication.</li>
      </ul>
      <br />
      <p>FlavorRush has the right to update terms at any time without prior notice.</p>
    </div>
  );
};

export default TermsAndConditions;
