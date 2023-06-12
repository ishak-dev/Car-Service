import React from "react";
import "../../style/components/home/myschedule.css";
const MySchedule = ({ date, hours, description }) => {
  return (
    <div className="schedule-tab">
      <h5>{date}</h5>
      <div className="schedule-info">
        <p>{description}</p>
        <p className="schedule-time">{hours}</p>
      </div>
    </div>
  );
};

export default MySchedule;
