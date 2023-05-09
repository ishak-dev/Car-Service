import React from "react";
import "../style/pages/carServiceHistory.css";
import CarService from "../components/carServiceHistory/carService";

const CarServiceHistory = () => {
  return (
    <div className="carServiceHistory-section">
      <h2>
        Car Service History{" "}
        <button className="confirm-cart-btn add-new-history-btn remove-float">
          ADD NEW
        </button>
      </h2>
      <div className="search-input">
        <input placeholder="Search for Car..." />
        <button className="search-btn">Search</button>
      </div>
      <div className="carservicehistory-notes">
        <CarService />
        <CarService />
        <CarService />
        <CarService />
      </div>
    </div>
  );
};

export default CarServiceHistory;
