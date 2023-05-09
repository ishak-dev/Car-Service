import React from "react";
import "../style/pages/schedule.css";
import ScheduleCard from "../components/schedule/scheduleCard";
const Schedule = () => {
  return (
    <div className="schedule-section">
      <h2>
        Your Appointment
        <button className="create-new-appointment-btn">Create New</button>
      </h2>
      <div className="card-colors">
        <li>Big Service</li>
        <li>Medium Service</li>
        <li>Small Service</li>
      </div>
      <div className="appointment-cards">
        <ScheduleCard />
        <ScheduleCard />
        <ScheduleCard />
        <ScheduleCard />
        <ScheduleCard />
        <ScheduleCard />
      </div>
    </div>
  );
};

export default Schedule;
