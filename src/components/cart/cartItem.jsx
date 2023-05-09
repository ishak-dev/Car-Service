import React from "react";
import "../../style/components/cart/cartItem.css";
const CartItem = () => {
  return (
    <tbody>
      <tr>
        <td className="item-cart-info">
          <img
            src="https://live.staticflickr.com/65535/52157944359_68e75a2e2b_m.jpg"
            className="cart-img"
            alt="..."
          />
          <div className="item-cart-description">
            <h4>Very good engine</h4>
            <p>Some description about this item</p>
          </div>
        </td>

        <td>
          <div className="item-quantity">
            <p>+</p>
            <p>2</p>
            <p>-</p>
          </div>
        </td>
        <td className="remove-item">
          <p>x</p>
        </td>
        <td className="item-price">55 $</td>
      </tr>
    </tbody>
  );
};

export default CartItem;
