import React, { useEffect, useState } from "react";
import "../style/pages/carServiceHistory.css";
import CarService from "../components/carServiceHistory/carService";
import { allServices } from "../api/api";

const CarServiceHistory = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    allServices().then((data) => setServices(data));
  }, []);
  console.log(services);
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
        {services.map((service) => (
          <CarService
            vehicleId={service.VehicleID}
            serviceDate={service.ServiceDate}
            serviceTypeId={service.serviceTypeId}
            description={service.description}
            hours={service.hours}
          />
        ))}
      </div>
    </div>
  );
};

export default CarServiceHistory;
