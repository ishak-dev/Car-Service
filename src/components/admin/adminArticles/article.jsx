import React, { useState } from "react";
import AdminArticleModal from "./adminArticleModal";

const AdminArticle = ({ id, img, name, price, quantity }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);
  return (
    <tbody>
      <tr>
        <td className="item-cart-info">
          <img src={img} className="cart-img" alt="..." />
          <div className="item-cart-description">
            <h4>{name}</h4>
            <p>{id}</p>
          </div>
        </td>

        <td>
          <div>{price}</div>
        </td>

        <td className="item-price">{quantity} </td>
        <td className="item-price">
          <button
            style={{
              backgroundColor: "#ff3100",
              color: "white",
              padding: "5px 25px",
              borderRadius: "6px",
              border: "none",
            }}
            onClick={handleShow}
          >
            Edit
          </button>
        </td>
      </tr>
      <AdminArticleModal handleClose={handleClose} show={show} />
    </tbody>
  );
};

export default AdminArticle;
