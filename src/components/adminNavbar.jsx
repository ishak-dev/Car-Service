import React from "react";
import "../style/navbar.css";

import logo from "../img/logo.png";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
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
          <Link to="/orders">User Orders</Link>
        </li>
        <li>
          <Link to="/shop">Add Articles</Link>
        </li>
        <li>
          <Link to="/schedule">Schedule</Link>
        </li>
        <li>
          <Link to="/carshistory">My Cars</Link>
        </li>
        {/* <li>
          <div className="search-input">
            <input placeholder="Search for parts..." />
            <button className="search-btn">Search by ID</button>
          </div>
        </li> */}
      </ul>
    </div>
  );
};

export default AdminNavbar;
