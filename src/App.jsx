import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route, Link, Router } from "react-router-dom";
import Navbar from "./components/navbar";
import UserDashboard from "./pages/UserDashboard";
import Home from "./pages/home";
import Footer from "./components/footer";
import Shop from "./pages/shop";
import Schedule from "./pages/schedule";
import Orders from "./pages/orders";
import Cart from "./pages/cart";
import Login from "./pages/login";
import Register from "./pages/register";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/dashboard" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
