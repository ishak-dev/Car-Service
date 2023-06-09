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
          <Link to="/adminDashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/adminArticles">Products</Link>
        </li>
        <li>
          <Link to="/carshistory">Services</Link>
        </li>
        <li onClick={() => (localStorage.clear(), window.location.reload())}>
          Logout
        </li>
        {/* <li>
          <Link to="/schedule">Schedule</Link>
        </li>
        <li>
          <Link to="/carshistory">My Cars</Link>
        </li> */}
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
