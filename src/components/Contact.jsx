import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact-container">
      <h2
        className="contact-title"
        style={{ marginTop: "0.5%", paddingBottom: "1.3%" }}
      >
        Contact Us
      </h2>
      <p>
        If you have any questions, concerns, or would like to learn more about
        our authentic recipes please reach to out us!
      </p>

      <div className="form-container">
        <h3>Get in Touch</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={3}
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>

      {/* Stay Connected Section */}
      <div className="connected-container">
        <h3>Stay Connected with Us</h3>
        <div className="contact-details">
          <div className="contact-section">
            <FaMapMarkerAlt className="contact-icon" />
            <p className="a1">
              Foodie Lane, Flavor Town Libertà, 8, 40100 Bologna , Italia
            </p>
            <p className="a2">
              Ciao Bella Cucina Ristorante Via Roma, 45 00184, Italy.
            </p>
            <p className="a3">Via Garibaldi, 15, 25121 Brescia BS, Italy.</p>
          </div>
          <div className="contact-section">
            <FaPhone className="contact-icon" />
            <p className="phn1">123-456-7890</p>
            <p className="phn2">098-765-4321</p>
            <p className="phn3">456-789-1234</p>
            <img className="img" src="caiobella.png" />
          </div>
          <div className="contact-section">
            <FaEnvelope className="contact-icon" />
            <p className="e1">info@ciaobella.com</p>
            <p className="e2">help@ciaobella.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
