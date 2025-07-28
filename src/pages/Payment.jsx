import React, { useState } from 'react';
import '../styles.css';

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });
  const [upiId, setUpiId] = useState('');
  const [bankName, setBankName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [paymentDone, setPaymentDone] = useState(false);

  const handlePaymentSubmit = (e) => {
    e.preventDefault();

    if (paymentMethod === 'Card') {
      if (cardDetails.cardNumber.length !== 16 || cardDetails.cvv.length !== 3 || cardDetails.expiryDate.length !== 5) {
        alert('Please enter valid Card details!');
        return;
      }
      setPaymentDone(true);
    } 
    else if (paymentMethod === 'UPI') {
      if (!upiId.includes('@')) {
        alert('Please enter a valid UPI ID!');
        return;
      }
      setPaymentDone(true);
    } 
    else if (paymentMethod === 'Net Banking') {
      if (bankName.trim() === '') {
        alert('Please enter Bank Name!');
        return;
      }
      if (mobileNumber.length !== 10) {
        alert('Mobile number must be exactly 10 digits!');
        return;
      }
      if (!otpSent) {
        alert('OTP sent successfully to your mobile number!');
        setOtpSent(true);
        return;
      }
      if (otp.length !== 4) {
        alert('Please enter a valid 4-digit OTP!');
        return;
      }
      setPaymentDone(true);
    }
  };

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({ ...cardDetails, [name]: value });
  };

  return (
    <div className="payment">
      {!paymentDone ? (
        <form className="payment-form" onSubmit={handlePaymentSubmit}>
          <h2>Payment</h2>
          <br />

          <select value={paymentMethod} onChange={(e) => {
            setPaymentMethod(e.target.value);
            setOtpSent(false);
            setOtp('');
          }} required>
            <option value="">Select Payment Method</option>
            <option value="Card">Credit/Debit Card</option>
            <option value="UPI">UPI</option>
            <option value="Net Banking">Net Banking</option>
          </select>

          <br /><br />

          {paymentMethod === 'Card' && (
            <>
              <input
                type="text"
                name="cardNumber"
                value={cardDetails.cardNumber}
                onChange={handleCardChange}
                placeholder="Card Number (16 digits)"
                maxLength="16"
                required
              />
              <input
                type="text"
                name="expiryDate"
                value={cardDetails.expiryDate}
                onChange={handleCardChange}
                placeholder="Expiry Date (MM/YY)"
                maxLength="5"
                required
              />
              <input
                type="text"
                name="cvv"
                value={cardDetails.cvv}
                onChange={handleCardChange}
                placeholder="CVV (3 digits)"
                maxLength="3"
                required
              />
            </>
          )}

          {paymentMethod === 'UPI' && (
            <input
              type="text"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              placeholder="Enter UPI ID"
              required
            />
          )}

          {paymentMethod === 'Net Banking' && (
            <>
              <input
                type="text"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
                placeholder="Enter Bank Name"
                required
              />
              <input
                type="text"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                placeholder="Enter Mobile Number"
                maxLength="10"
                required
              />
              {otpSent && (
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter 4-digit OTP"
                  maxLength="4"
                  required
                />
              )}
            </>
          )}

          <br />
          <button type="submit" className="submit-button">
            {paymentMethod === 'Net Banking' && !otpSent ? 'Send OTP' : 'Make Payment'}
          </button>
        </form>
      ) : (
        <div className="thank-you-card">
          <h2>Payment Successful!</h2>
          <p>Thank you for ordering from <strong>FlavorRush</strong>!</p>
        </div>
      )}
    </div>
  );
};

export default Payment;
