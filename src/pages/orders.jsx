import React from "react";
import "../style/pages/orders.css";
import Order from "../components/orders/order";

const Orders = () => {
  return (
    <div className="orders-section">
      <h2>My Ordered Items</h2>
      <Order />
      <Order />
    </div>
  );
};

export default Orders;
