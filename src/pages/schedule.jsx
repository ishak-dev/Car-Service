import React, { useEffect, useState } from "react";
import "../style/pages/schedule.css";
import ScheduleCard from "../components/schedule/scheduleCard";
import { allUserServices } from "../api/api";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ScheduleModal from "../components/schedule/scheduleModal";
const Schedule = () => {
  const [counter, setCounter] = useState(0);
  const [schedules, setSchedules] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    allUserServices().then((data) => setSchedules(data));
  }, []);
  useEffect(() => {
    counter > 0 && toast.success("You scheduled an appointment");
  }, [counter]);
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
        {schedules.length > 1
          ? schedules.map((schedule) => (
              <ScheduleCard
                key={schedule.id}
                date={schedule.ServiceDate}
                vehicleId={schedule.VehicleId}
                serviceTypeId={schedule.serviceTypeId}
                description={schedule.description}
                hours={schedule.hours}
              />
            ))
          : schedules != [] && (
              <ScheduleCard
                date={schedules.ServideDate}
                vehicleId={schedules.VehicleId}
                serviceTypeId={schedules.serviceTypeId}
                description={schedules.description}
                hours={schedules.hours}
              />
            )}
      </div>
      <ScheduleModal
        handleClose={handleClose}
        show={show}
        setCounter={setCounter}
      />
      <ToastContainer theme="dark" autoClose={2000} />
    </div>
  );
};

export default Schedule;
