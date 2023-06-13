import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { addPart, updatePart } from "../../../api/api";
const AdminArticleModal = ({
  handleClose,
  show,
  id,
  img,
  name,
  price,
  quantity,
  description,
  setCounter,
}) => {
  const [data, setData] = useState({
    name: name,
    price: price,
    description: description,
    photo_link: img,
    quantity: quantity,
  });

  const handleClick = () => {
    addPart(data);
    handleClose();
    setCounter((prevData) => prevData + 1);
  };

  const handleClick2 = () => {
    updatePart(data, id);
    handleClose();
    setCounter((prevData) => prevData + 1);
  };

  const handleOption = (e) => {
    setData((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  };

  return (
    <Modal size="lg" show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Edit or Add article #{id}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="form-group">
            <label for="exampleFormControlInput1">Name</label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder=""
              defaultValue={name}
              name="name"
              onChange={handleOption}
            />
          </div>
          <div className="form-group">
            <label for="exampleFormControlInput1">Description</label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder=""
              defaultValue={description}
              name="description"
              onChange={handleOption}
            />
          </div>
          <div className="form-group">
            <label for="exampleFormControlInput1">Price</label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder=""
              defaultValue={price}
              name="price"
              onChange={handleOption}
            />
          </div>
          <div className="form-group">
            <label for="exampleFormControlInput1">Photo Link</label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder=""
              defaultValue={img}
              name="photo_link"
              onChange={handleOption}
            />
          </div>
          <div className="form-group">
            <label for="exampleFormControlInput1">Quantity</label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder=""
              defaultValue={quantity}
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
          onClick={id ? handleClick2 : handleClick}
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AdminArticleModal;
