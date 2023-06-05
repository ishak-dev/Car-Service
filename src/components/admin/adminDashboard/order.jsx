import React, { useEffect, useState } from "react";
import { getPartById, getUserById, updateOrder } from "../../../api/api";

const AdminOrder = ({ id, partId, customerId, quantity, handleApprove }) => {
  const [user, setUser] = useState();
  const [article, setArticle] = useState();
  useEffect(() => {
    getUserById(customerId).then((data) => setUser(data));
    getPartById(partId).then((data) => setArticle(data));
  }, []);

  const approve = () => {
    handleApprove();
    updateOrder(id);
  };
  return (
    <tbody>
      {article && user && (
        <tr>
          <td className="item-cart-info">
            <img
              src="https://live.staticflickr.com/65535/52157944359_68e75a2e2b_m.jpg"
              className="cart-img"
              alt="..."
            />
            <div className="item-cart-description">
              <h4>{article.name}</h4>
              <p>{article.description}</p>
            </div>
          </td>

          <td>
            <div className="item-quantity">
              <p>{quantity}</p>
            </div>
          </td>

          <td className="item-price">{article.price} $</td>
          <td>
            {user.FirstName} {user.LastName}
          </td>
          <td className="approve">
            <button
              style={{
                backgroundColor: "#ff3100",
                color: "white",
                padding: "10px 20px",
              }}
              onClick={approve}
            >
              Approve
            </button>
          </td>
        </tr>
      )}
    </tbody>
  );
};

export default AdminOrder;
