import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const ScheduleModal = ({ handleClose, show }) => {
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
            <select className="form-control" id="exampleFormControlSelect1">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect2">Select Free Date</label>
            <select
              multiple
              className="form-control"
              id="exampleFormControlSelect2"
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
          onClick={handleClose}
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ScheduleModal;
