import React, { useEffect, useState } from "react";
import AdminOrder from "../components/admin/adminDashboard/order";
import { getAllCustomers, getAllOrders } from "../api/api";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import User from "../components/admin/adminDashboard/user";
const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);
  const [deleted, setDeleted] = useState(0);

  const handleApprove = () => {
    toast.success("You approved an order");
    setDeleted((prevState) => prevState + 1);
  };
  useEffect(() => {
    getAllOrders().then((data) => setOrders(data));
    getAllCustomers().then((data) => setUsers(data));
  }, [deleted]);

  console.log(orders);
  console.log(users);
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
        <h3 style={{ fontWeight: "bold", marginTop: "80px" }}>Users</h3>
        <table className="cart-item-table">
          <thead>
            <tr>
              <th>User</th>
              <th>Phone</th>
              <th>Address</th>
            </tr>
          </thead>
          {users.map((user) => (
            <User
              id={user.id}
              firstName={user.FirstName}
              lastName={user.LastName}
              email={user.Email}
              phone={user.Phone}
              address={user.Address}
            />
          ))}
        </table>
      </div>
      <ToastContainer theme="dark" autoClose={2000} />
    </div>
  );
};

export default AdminDashboard;
