import React from "react";
import "../style/pages/cart.css";
import CartItem from "../components/cart/cartItem";
const Cart = () => {
  return (
    <div className="cart-section">
      <h2>My Cart</h2>

      <div className="cart-item-container">
        <table className="cart-item-table">
          <thead>
            <tr>
              <th>Description</th>
              <th>Quantity</th>
              <th>Remove</th>
              <th>Price</th>
            </tr>
          </thead>
          <CartItem />
          <CartItem />
          <CartItem />
        </table>
      </div>
      <button className="confirm-cart-btn">PURCHASE</button>
    </div>
  );
};

export default Cart;
