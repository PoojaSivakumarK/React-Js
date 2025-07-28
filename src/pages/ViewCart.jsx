import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

const ViewCart = ({ cartItems, removeFromCart, updateQuantity }) => {
  const navigate = useNavigate();
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="view-cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
            <span className="cart-item-name">{item.name}</span>
          
            <div className="cart-item-details">
              <p className="cart-item-price">₹{item.price * item.quantity}</p>
          
              <div className="quantity-control">
                <button onClick={() => updateQuantity(index, -1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(index, 1)}>+</button>
              </div>
            </div>
          
            <button className="remove-button" onClick={() => removeFromCart(index)}>Remove</button>
          </div>
          
          ))}
          <h3>Total: ₹{total}</h3>
          <button className='submit-button' onClick={() => navigate('/payment')}>Proceed to Payment</button>
        </div>
      )}
    </div>
  );
};

export default ViewCart;
