import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ArticleModal = ({ handleClose, show, name, description, price, id,img }) => {
  const addToCart = () => {
    localStorage.setItem("itemId", id);
  };

  const handleClick = () => {
    addToCart();
    toast.success("You added to cart");
  };
  return (
    <Modal size="lg" show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>{name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div
          style={{ width: "fit-content", margin: "auto", marginBottom: "25px" }}
        >
          <img
            src={img}
            alt="article picture"
            style={{ width: "100%" }}
          />
        </div>
        <div className="text">
          <p>{description}</p>
        </div>

        {/* <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Select Service Type</label>
          <select className="form-control" id="exampleFormControlSelect1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div> */}
        {/* <div className="form-group">
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
        </div> */}

        <div className="price-container" style={{ fontSize: "24px" }}>
          Price: <span style={{ color: "#ff3100" }}>{price}$</span>
        </div>
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
          Add to cart
        </Button>
      </Modal.Footer>
      <ToastContainer theme="dark" autoClose={2000} />
    </Modal>
  );
};

export default ArticleModal;
