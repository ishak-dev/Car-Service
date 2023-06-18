import React from "react";
import img1 from "../../img/img1.jpg";
import img2 from "../../img/img2.jpg";
import img3 from "../../img/img3.jpg";
import img4 from "../../img/img4.jpg";
import img5 from "../../img/img5.jpg";
import img6 from "../../img/img6.jpg";
import img7 from "../../img/img7.jpg";
import img8 from "../../img/img8.jpg";
import img9 from "../../img/img9.jpg";
import motor from "../../img/motor.png";
import "../../style/components/home/lastItem.css";

const LastItem = ({ name, price, quantity, img }) => {
  return (
    <div className="card list-card">
      <div className="img-container">
        <img
          src={img}
          className="card-img-top"
          alt="..."
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <div className="row">
          <div className="col-10">
            <p className="card-type">Quantity: {quantity}</p>
          </div>
          <div className="col-2">
            <p className="card-price">{price}$</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastItem;
