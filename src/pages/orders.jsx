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
      {orderData.length > 1 ? (
        orderData.map((item) => <Order data={item} />)
      ) : (
        <Order data={orderData} />
      )}
    </div>
  );
};

export default Orders;
