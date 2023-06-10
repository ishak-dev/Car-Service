import React, { useEffect, useState } from "react";
import "../style/pages/orders.css";
import Order from "../components/orders/order";
import { allUserOrders } from "../api/api";

const Orders = ({ user }) => {
  const [orderData, setOrderData] = useState([]);
  useEffect(() => {
    allUserOrders().then((data) => {
      setOrderData(data);
    });
  }, []);
  console.log(orderData);
  return (
    <div className="orders-section">
      <h2>My Ordered Items</h2>
      {orderData.length != 0 && orderData.map((item) => <Order data={item} />)}
    </div>
  );
};

export default Orders;
