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
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/orders">Orders</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/schedule">Schedule</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li
          onClick={() => {
            localStorage.clear();
            window.location.reload();
          }}
        >
          Logout
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
