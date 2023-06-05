import React, { useEffect, useState } from "react";
import AdminOrder from "../components/admin/adminDashboard/order";
import { getAllOrders } from "../api/api";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [deleted, setDeleted] = useState(0);

  const handleApprove = () => {
    toast.success("You approved an order");
    setDeleted((prevState) => prevState + 1);
  };
  useEffect(() => {
    getAllOrders().then((data) => setOrders(data));
  }, [deleted]);

  console.log(orders);
  return (
    <div className="cart-section">
      <h2>Orders From Customers</h2>

      <div className="cart-item-container">
        <table className="cart-item-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Customer</th>
              <th>Approve</th>
            </tr>
          </thead>
          {orders.map(
            (order) =>
              order.approved == "false" && (
                <AdminOrder
                  id={order.id}
                  partId={order.part_id}
                  customerId={order.customer_id}
                  quantity={order.quantity}
                  handleApprove={handleApprove}
                />
              )
          )}
        </table>
      </div>
      <ToastContainer theme="dark" autoClose={2000} />
    </div>
  );
};

export default AdminDashboard;
