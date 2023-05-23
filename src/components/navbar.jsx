import React from "react";
import "../style/navbar.css";

import logo from "../img/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <img src={logo} alt="logo" />
        </li>
        <li>
          <Link to="/Car-Service/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/Car-Service/orders">Orders</Link>
        </li>
        <li>
          <Link to="/Car-Service/shop">Shop</Link>
        </li>
        <li>
          <Link to="/Car-Service/schedule">Schedule</Link>
        </li>
        <li>
          <Link to="/Car-Service/cart">Cart</Link>
        </li>
        <li>
          <div className="search-input">
            <input placeholder="Search for parts..." />
            <button className="search-btn">Search</button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
