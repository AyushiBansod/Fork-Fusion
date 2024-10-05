import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function OrderNow() {
  // Scroll to the top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const location = useLocation();
  const { dish } = location.state || {}; // Get the passed dish data

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [quantity, setQuantity] = useState(1); // Quantity state

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order placed successfully for ${quantity} ${dish?.dishName}!`);
    // Reset form or handle further logic
    // Clear the form after submitting
    setName("");
    setPhone("");
    setAddress("");
  };

  if (!dish) {
    return (
      <div>
        No dish information available. Please go back and select a dish.
      </div>
    );
  }

  return (
    <div className="order-now-container">
      <h2 className="heading">Order Your Favourite Dish</h2>
      <div className="order-summary">
        <img src={dish.image} alt={dish.dishName} className="order-image" />
        <h3 className="ondishname">{dish.dishName}</h3>{" "}
        {/* Display the dish name here */}
        {/* Quantity Controls positioned below the dish name */}
        <div className="quantity-controls">
          <button onClick={handleDecrement}>-</button>
          <span>{quantity}</span>
          <button onClick={handleIncrement}>+</button>
        </div>
        <p className="onpricename">Price: € {dish.price}</p>
        <p className="total">
          Total: € {(dish.price * quantity).toFixed(2)}
        </p>{" "}
        {/* Show total price */}
      </div>

      <form onSubmit={handleSubmit}>
        <div className="order-form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="order-form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="order-form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Place Order
        </button>
      </form>
    </div>
  );
}

export default OrderNow;
