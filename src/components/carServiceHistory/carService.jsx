import React from "react";
import "../../style/components/carServiceHistory/carService.css";
const CarService = ({ date, vehicleId, serviceTypeId }) => {
  return (
    <div className="carservice-container">
      <h3>3123142151</h3>
      <hr />
      <p>
        Car Brand: <span>Mercedes</span>
      </p>
      <p>
        Car Model: <span>CLS</span>
      </p>
      <p>
        Car Year: <span>2001</span>
      </p>
      <p>
        Car Kilometers: <span>190000</span>
      </p>
      <p>
        Car Brand: <span>Mercedes</span>
      </p>
      <p className="car-repairs">Car repairs:</p>
      <p>
        In this car we repair following: doors, windows, engine, lights doors,
        windows, engine, lights doors, windows, engine, lights doors, windows,
        engine, lights doors, windows, engine, lights
      </p>
    </div>
  );
};

export default CarService;
