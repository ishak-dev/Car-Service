import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { addServiceAppointment, getServiceTypes } from "../../api/api";
const ScheduleModal = ({ handleClose, show, setCounter }) => {
  const [types, setTypes] = useState([]);
  const [option, setOption] = useState([]);
  const [date, setDate] = useState([]);
  const [description, setDescription] = useState([]);
  const [hours, setHours] = useState([]);
  useEffect(() => {
    getServiceTypes().then((data) => setTypes(data));
  }, []);

  const handleClick = () => {
    addServiceAppointment(option, date, description, hours);
    setCounter((prevState) => prevState + 1);
    handleClose();
  };

  const handleOption = (e) => {
    setOption(e.target.selectedIndex + 1);
  };
  const handleDate = (e) => {
    setDate(e.target.value);
  };
  const handleHours = (e) => {
    setHours(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  return (
    <Modal size="lg" show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Add your appointment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          {/* <div class="form-group">
            <label for="exampleFormControlInput1">Location name</label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder=""
            />
          </div> */}

          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">
              Select Service Type
            </label>
            <select
              className="form-control"
              id="exampleFormControlSelect1"
              onChange={handleOption}
            >
              {types != [] &&
                types.map((type) => <option>{type.serviceName}</option>)}
            </select>
            <select
              className="form-control"
              id="exampleFormControlSelect1"
              onChange={handleHours}
            >
              <option>11:00</option>
              <option>13:00</option>
              <option>15:00</option>
              <option>16:00</option>
              <option>18:00</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect2">Select Free Date</label>
            <select
              multiple
              className="form-control"
              id="dateForm"
              onChange={handleDate}
            >
              <option>12.06.2023</option>
              <option>13.06.2023</option>
              <option>14.06.2023</option>
              <option>16.06.2023</option>
              <option>17.06.2023</option>
              <option>19.06.2023</option>
              <option>20.06.2023</option>
              <option>23.06.2023</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Description</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              onChange={handleDescription}
            ></textarea>
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

export default ScheduleModal;
