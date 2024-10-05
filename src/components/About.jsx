// src/components/About.jsx

import React from "react";

const About = () => {
  return (
    <div className="about-container">
      <h2
        className="about-title"
        style={{ marginTop: "-4%", paddingBottom: "3%" }}
      >
        About Us
      </h2>
      <p className="about-description">
        Welcome to Caio Bella Cucina, where we are dedicated to serving the best
        Italian cuisine with a passion for flavor and authenticity.
      </p>
      <div className="about-mission">
        <h3>Our Mission</h3>
        <p>
          To bring a piece of Italy to your table through fresh ingredients,
          traditional recipes, and a warm atmosphere that makes every meal
          special.
        </p>
        <p>
          Crafting dishes that honor Italy's culinary traditions, providing a
          dining experience that is memorable and heartwarming.
        </p>
      </div>
      <div className="about-history">
        <h3>Our History</h3>
        <p>
          Founded in 2020, Caio Bella Cucina started as a small family
          restaurant in the heart of the city, quickly gaining popularity for
          its homemade pasta and wood-fired pizzas.
        </p>
        Overcoming challenges to become a community favorite, expanding our menu
        to bring new Italian flavors to the table.
      </div>
      <div className="about-values">
        <h3>Our Values</h3>
        <ul>
          <li>Quality Ingredients</li>
          <li>Authenticity in Recipes</li>
          <li>Customer Satisfaction</li>
          <li>Community Engagement</li>
          <li>Master Chef's</li>
        </ul>
      </div>
      <div className="about-team">
        <h3>Meet Our Team</h3>
        <p>
          Our talented chefs and dedicated staff are passionate about delivering
          an unforgettable dining experience for you.
        </p>
        <p>
          Experienced chefs with expertise in Italian cuisine, a friendly and
          attentive service team ensuring every guest feels welcome.
        </p>
      </div>
    </div>
  );
};

export default About;
