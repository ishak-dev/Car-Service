import React, { useEffect, useState } from "react";
import "../style/pages/schedule.css";
import ScheduleCard from "../components/schedule/scheduleCard";
import { allUserServices, getVehicleById } from "../api/api";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ScheduleModal from "../components/schedule/scheduleModal";
import CarModal from "../components/schedule/carModal";
const Schedule = () => {
  const [counter, setCounter] = useState(0);
  const [schedules, setSchedules] = useState([]);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [vehicle, setVehicle] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  useEffect(() => {
    allUserServices().then((data) => setSchedules(data));
    getVehicleById().then((data) => setVehicle(data));
  }, []);

  useEffect(() => {
    counter > 0 && toast.success("Successfull");
  }, [counter]);

  return (
    <div className="schedule-section">
      <h2>
        Your Appointment (Please add car first if you didn't)
        {!vehicle ? (
          <button className="create-new-appointment-btn" onClick={handleShow2}>
            Add Vehicle
          </button>
        ) : (
          <button className="create-new-appointment-btn" onClick={handleShow}>
            Create New
          </button>
        )}
      </h2>
      <div className="card-colors">
        {vehicle != "" && (
          <>
            <li>{vehicle.Make}</li>
            <li>{vehicle.Model}</li>
            <li>{vehicle.LicensePlate}</li>
          </>
        )}
      </div>
      <div className="appointment-cards">
        {schedules.length != [] ? (
          schedules.map((schedule) => (
            <ScheduleCard
              key={schedule.id}
              date={schedule.ServiceDate}
              vehicleId={schedule.VehicleId}
              serviceTypeId={schedule.serviceTypeId}
              description={schedule.description}
              hours={schedule.hours}
            />
          ))
        ) : (
          <p>You dont have appointments</p>
        )}
      </div>
      <ScheduleModal
        handleClose={handleClose}
        show={show}
        setCounter={setCounter}
      />
      <CarModal
        handleClose={handleClose2}
        show={show2}
        setCounter={setCounter}
      />
      <ToastContainer theme="dark" autoClose={2000} />
    </div>
  );
};

export default Schedule;
