import React from "react";
import "../style/pages/orders.css";
import Order from "../components/orders/order";

const Orders = ({ user }) => {
  return (
    <div className="orders-section">
      <h2>My Ordered Items</h2>
      <Order user={user} />
      <Order user={user} />
    </div>
  );
};

export default Orders;
