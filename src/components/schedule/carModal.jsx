import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {
  addServiceAppointment,
  addVehicle,
  getServiceTypes,
} from "../../api/api";
const CarModal = ({ handleClose, show, setCounter }) => {
  const [data, setData] = useState({
    Make: "",
    Model: "",
    Year: "",
    VIN: "",
    LicensePlate: "",
  });

  useEffect(() => {}, []);

  const handleClick = () => {
    addVehicle(data);
    setCounter((prevState) => prevState + 1);
    handleClose();
  };

  const handleChange = (e) => {
    setData((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  };

  return (
    <Modal size="lg" show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Add your vehicle</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div class="form-group">
            <label for="exampleFormControlInput1">Car manufacturer</label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder=""
              name="Make"
              onChange={handleChange}
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Model</label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder=""
              name="Model"
              onChange={handleChange}
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Year</label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder=""
              name="Year"
              onChange={handleChange}
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">VIN</label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              name="VIN"
              placeholder=""
              onChange={handleChange}
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">License plate</label>
            <input
              type="text"
              name="LicensePlate"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder=""
              onChange={handleChange}
            />
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn btn-light" onClick={handleClose}>
          Close
        </Button>
        <Button
          className="btn btn-light save"
          style={{ color: "white", backgroundColor: "#ff3100" }}
          onClick={handleClick}
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CarModal;
