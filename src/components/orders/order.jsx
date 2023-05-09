import React from "react";
import "../../style/components/orders/order.css";
import Article from "../shop/article";
const Order = () => {
  return (
    <details className="order-container">
      <summary>
        5 Items - 17.04.2023 <span>Total Price: 300 $</span>
      </summary>
      <Article />
      <Article />
      <Article />
      <Article />
    </details>
  );
};

export default Order;
