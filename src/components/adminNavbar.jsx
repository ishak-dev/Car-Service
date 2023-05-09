import React from "react";
import "../style/navbar.css";
import { BsFillCartCheckFill } from "react-icons/bs";
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
          <Link to="/Car-Service/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/Car-Service/orders">User Orders</Link>
        </li>
        <li>
          <Link to="/Car-Service/shop">Add Articles</Link>
        </li>
        <li>
          <Link to="/Car-Service/schedule">Schedule</Link>
        </li>
        <li>
          <Link to="/Car-Service/carshistory">My Cars</Link>
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
