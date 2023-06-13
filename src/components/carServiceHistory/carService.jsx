import React, { useEffect, useState } from "react";
import "../../style/components/carServiceHistory/carService.css";
import { getServiceTypesById, getVehicleByCarId } from "../../api/api";
const CarService = ({
  vehicleId,
  serviceTypeId,
  description,
  serviceDate,
  hours,
}) => {
  const [vehicle, setVehicle] = useState();
  const [serviceType, setServiceType] = useState();
  useEffect(() => {
    getVehicleByCarId(vehicleId).then((data) => setVehicle(data));
    getServiceTypesById(serviceTypeId).then((data) => setServiceType(data));
  }, []);
  console.log(vehicleId);
  return (
    <div className="carservice-container">
      <h3>{vehicle && vehicle.LicensePlate}</h3>
      <hr />
      <p>
        Date: <span>{serviceDate}</span>
      </p>
      <p>
        Time:
        <span> {hours}h</span>
      </p>

      <p>
        Car Brand: <span>{vehicle && vehicle.Make}</span>
      </p>
      <p>
        Car Model: <span>{vehicle && vehicle.Model}</span>
      </p>
      <p>
        Car Year: <span>{vehicle && vehicle.Year}</span>
      </p>
      <p>
        Service Type: <span>{serviceType && serviceType.serviceName}</span>
      </p>

      <p className="car-repairs">Car repairs:</p>
      <p>{description}</p>
    </div>
  );
};

export default CarService;
