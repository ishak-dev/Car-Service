import React, { useEffect, useState } from "react";
import "../../style/components/schedule/scheduleCard.css";
import { getServiceTypesById } from "../../api/api";
const ScheduleCard = ({
  date,
  vehicleId,
  serviceTypeId,
  description,
  hours,
  setCounter,
}) => {
  const [serviceType, setServiceType] = useState([]);
  useEffect(() => {
    serviceTypeId != undefined &&
      getServiceTypesById(serviceTypeId).then((data) => setServiceType(data));
  }, []);
  return (
    <div className="appointment-card dark-orange">
      <h3>{date}</h3>
      <p>{hours} h</p>
      <h3>{serviceType.serviceName}</h3>
      <h4>{serviceType.serviceDescription}</h4>
      <p>{description}</p>
    </div>
  );
};

export default ScheduleCard;
