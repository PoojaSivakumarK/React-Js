// src/pages/FAQ.jsx
import React, { useState } from 'react';
import '../styles.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "1. How do I place an order on FlavorRush?",
      answer: "Simply browse through our menu, add your favorite dishes to the cart, and proceed to checkout!"
    },
    {
      question: "2. What payment methods do you accept?",
      answer: "We accept Credit/Debit Cards, UPI, Net Banking, and Cash on Delivery (COD) in selected areas."
    },
    {
      question: "3. Can I schedule a delivery for a later time?",
      answer: "Yes, you can mention special delivery instructions during checkout. We'll do our best to accommodate your request."
    },
    {
      question: "4. What if there’s an issue with my order?",
      answer: "Contact our support team immediately through the Contact Us page, and we'll resolve it as quickly as possible!"
    },
    {
      question: "5. Is there a minimum order value?",
      answer: "We have no minimum order value for most locations. However, delivery charges may apply for small orders."
    }
  ];

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // close if same question clicked
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="text-page">
      <h2>Frequently Asked Questions</h2>
      <br />
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            <h4>{faq.question}</h4>
            <span className="faq-icon">{openIndex === index ? "▲" : "▼"}</span>
          </div>
          {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
          <br />
        </div>
      ))}
    </div>
  );
};

export default FAQ;
