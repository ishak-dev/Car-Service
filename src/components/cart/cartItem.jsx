import React from "react";
import "../../style/components/cart/cartItem.css";

const CartItem = ({
  img,
  name,
  description,
  price,
  setCounter,
  quantity,
  setQuantity,
}) => {
  return (
    <tbody>
      <tr>
        <td className="item-cart-info">
          <img
            src={img}
            className="cart-img"
            alt="..."
          />
          <div className="item-cart-description">
            <h4>{name}</h4>
            <p>{description}</p>
          </div>
        </td>

        <td>
          <div className="item-quantity">
            <p
              onClick={() => {
                setQuantity((prevState) => prevState + 1);
              }}
            >
              +
            </p>
            <p>{quantity}</p>
            <p
              onClick={() => {
                setQuantity((prevState) => prevState - 1);
              }}
            >
              -
            </p>
          </div>
        </td>
        <td className="remove-item">
          <p
            onClick={() => {
              localStorage.removeItem("itemId"),
                setCounter((prevState) => prevState + 1);
                
            }}
          >
            x
          </p>
        </td>
        <td className="item-price">{price} $</td>
      </tr>
    </tbody>
  );
};

export default CartItem;
