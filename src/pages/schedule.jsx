import React, { useEffect, useState } from "react";
import "../style/pages/schedule.css";
import ScheduleCard from "../components/schedule/scheduleCard";
import { allUserServices } from "../api/api";
import ScheduleModal from "../components/schedule/scheduleModal";
const Schedule = () => {
  const [schedules, setSchedules] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    allUserServices().then((data) => setSchedules(data));
  }, []);
  return (
    <div className="schedule-section">
      <h2>
        Your Appointment
        <button className="create-new-appointment-btn" onClick={handleShow}>
          Create New
        </button>
      </h2>
      <div className="card-colors">
        <li>Big Service</li>
        <li>Medium Service</li>
        <li>Small Service</li>
      </div>
      <div className="appointment-cards">
        {schedules.length > 1 ? (
          schedules.map((schedule) => (
            <ScheduleCard
              date={schedule.serviceDate}
              vehicleId={schedule.vehicleId}
              serviceTypeId={schedule.serviceTypeId}
            />
          ))
        ) : (
          <ScheduleCard
            date={schedules.servideDate}
            vehicleId={schedules.vehicleId}
            serviceTypeId={schedules.serviceTypeId}
          />
        )}
        <ScheduleCard />
        <ScheduleCard />
        <ScheduleCard />
        <ScheduleCard />
        <ScheduleCard />
        <ScheduleCard />
      </div>
      <ScheduleModal handleClose={handleClose} show={show} />
    </div>
  );
};

export default Schedule;
