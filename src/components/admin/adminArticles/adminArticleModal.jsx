import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { addPart } from "../../../api/api";
const AdminArticleModal = ({ handleClose, show }) => {
  const [data, setData] = useState({
    name: "",
    price: "",
    description: "",
    photo_link: "",
    quantity: "",
  });

  const handleClick = () => {
    addPart(data);
    handleClose();
  };

  const handleOption = (e) => {
    setData((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  };

  return (
    <Modal size="lg" show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Add your appointment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div class="form-group">
            <label for="exampleFormControlInput1">Name</label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder=""
              name="name"
              onChange={handleOption}
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Description</label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder=""
              name="description"
              onChange={handleOption}
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Price</label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder=""
              name="price"
              onChange={handleOption}
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Photo Link</label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder=""
              name="photo_link"
              onChange={handleOption}
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Quantity</label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder=""
              name="quantity"
              onChange={handleOption}
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

export default AdminArticleModal;
