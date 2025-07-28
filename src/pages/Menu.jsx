import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';
import butterChicken from '../assets/butter_chicken.png';
import paneerTikka from '../assets/paneer_tikka.jpg';
import chickenBiryani from '../assets/chicken_biryani.jpg';
import schezwanNoodles from '../assets/schezwan_noodles.png';
import springRolls from '../assets/spring_rolls.jpg';
import manchurian from '../assets/manchurian.png';
import margheritaPizza from '../assets/pizza.jpeg';
import pastaAlfredo from '../assets/alfredo_pasta.jpg';
import lasagna from '../assets/lasagna.jpg';

const foodItems = [
  { id: 1, name: "Butter Chicken", cuisine: "Indian", description: "Rich tomato gravy with tender chicken.", price: 250, image: butterChicken  },
  { id: 2, name: "Paneer Tikka", cuisine: "Indian", description: "Grilled cottage cheese cubes.", price: 180, image: paneerTikka },
  { id: 3, name: "Chicken Biryani", cuisine: "Indian", description: "Fragrant basmati rice and chicken with spices.", price: 270, image: chickenBiryani },
  { id: 4, name: "Schezwan Noodles", cuisine: "Chinese", description: "Spicy noodles with vegetables.", price: 150, image: schezwanNoodles },
  { id: 5, name: "Spring Rolls", cuisine: "Chinese", description: "Crispy rolls with veggies.", price: 120, image: springRolls },
  { id: 6, name: "Manchurian", cuisine: "Chinese", description: "Fried vegetable balls in sauce.", price: 140, image: manchurian },
  { id: 7, name: "Margherita Pizza", cuisine: "Italian", description: "Classic cheese pizza.", price: 200, image: margheritaPizza },
  { id: 8, name: "Pasta Alfredo", cuisine: "Italian", description: "Creamy white sauce pasta.", price: 220, image: pastaAlfredo },
  { id: 9, name: "Lasagna", cuisine: "Italian", description: "Layered pasta with cheese and sauce.", price: 280, image: lasagna},
];

const Menu = ({ addToCart }) => {
  const [quantities, setQuantities] = useState({});
  const navigate = useNavigate();

  const handleQuantityChange = (id, change) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + change) // minimum 1
    }));
  };

  const handleAddToCart = (item) => {
    const quantity = quantities[item.id] || 1;
    const newItem = { ...item, quantity };
    addToCart(newItem);
    alert(`${item.name} (x${quantity}) added to cart!`);
    setQuantities(prev => ({ ...prev, [item.id]: 1 })); // reset after adding
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home">
      <div className="menu-nav">
        <button onClick={() => scrollToSection('indian')}>Indian</button>
        <button onClick={() => scrollToSection('chinese')}>Chinese</button>
        <button onClick={() => scrollToSection('italian')}>Italian</button>
      </div>

      {["Indian", "Chinese", "Italian"].map(cuisine => (
        <section id={cuisine.toLowerCase()} key={cuisine}>
          <h3 className="cuisine-name">{cuisine} Cuisine</h3>
          <div className="card-container">
            {foodItems.filter(item => item.cuisine === cuisine).map(item => (
              <div className="card" key={item.id}>
                <img src={item.image} alt={item.name} className="card-image" />
                <h4>{item.name}</h4>
                <p>{item.description}</p>
                <div className="price-and-quantity">
                  <p className="price">₹{item.price}</p>
                  <div className="quantity-control">
                    <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                    <span>{quantities[item.id] || 1}</span>
                    <button onClick={() => handleQuantityChange(item.id, +1)}>+</button>
                  </div>
                </div>
                <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Menu;
