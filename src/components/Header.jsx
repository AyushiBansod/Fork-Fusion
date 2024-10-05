import React from "react";
import "../App.css"; // Ensure the CSS is imported here
import { GiChefToque } from "react-icons/gi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="custom-header">
      <div className="header-left">
        <h1>
          <i>Ciao Bella Cucina </i>
          <GiChefToque className="chef-icon" />
        </h1>
      </div>
      <div className="header-right">
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
