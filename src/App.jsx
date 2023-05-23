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
import AdminNavbar from "./components/adminNavbar";
import CarServiceHistory from "./pages/carServiceHistory";

function App() {
  const [user, setUser] = useState("user");

  return (
    <div className="App">
      {user == "admin" ? <AdminNavbar /> : <Navbar />}

      <Routes>
        <Route path="/Car-Service" element={<Home />} />
        <Route path="/Car-Service/dashboard" element={<Home />} />
        <Route path="/Car-Service/shop" element={<Shop user={user} />} />
        <Route path="/Car-Service/schedule" element={<Schedule />} />
        <Route path="/Car-Service/orders" element={<Orders user={user} />} />
        <Route path="/Car-Service/cart" element={<Cart />} />
        <Route path="/Car-Service/login" element={<Login />} />
        <Route path="/Car-Service/register" element={<Register />} />
        <Route
          path="/Car-Service/carshistory"
          element={<CarServiceHistory />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
