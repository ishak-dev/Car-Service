import { useState, useEffect, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route, Link, Router, Navigate } from "react-router-dom";
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
import AdminDashboard from "./pages/adminDashboard";
import AdminArticles from "./pages/adminArticles";
import { useJwt } from "react-jwt";

function App() {
  const [user, setUser] = useState("users");
  const token = localStorage.getItem("token");
  const [userToken, setUserToken] = useState();
  const { decodedToken, isExpired } = useJwt(token);

  useEffect(() => {
    if (decodedToken !== undefined && decodedToken != null) {
      setUserToken(decodedToken);
    }
  }, [decodedToken]);

  return (
    <div className="App">
      {decodedToken != undefined && decodedToken.role == "admin" ? (
        <AdminNavbar />
      ) : (
        <Navbar />
      )}

      <Routes>
        <Route
          path="/"
          element={token == null ? <Navigate to={"/login"} /> : decodedToken != undefined && decodedToken.role == "admin" ? (
            <AdminDashboard />
          ) : (
            <Home />)}
        />
        <Route
          path="/dashboard"
          element={token == null ? <Navigate to={"/login"} /> : <Home />}
        />
        <Route
          path="/shop"
          element={
            token == null ? <Navigate to={"/login"} /> : <Shop user={user} />
          }
        />
        <Route
          path="/schedule"
          element={token == null ? <Navigate to={"/login"} /> : <Schedule />}
        />
        <Route
          path="/orders"
          element={
            token == null ? <Navigate to={"/login"} /> : <Orders user={user} />
          }
        />
        <Route
          path="/cart"
          element={token == null ? <Navigate to={"/login"} /> : <Cart />}
        />
        <Route
          path="/login"
          element={
            userToken ? (
              <Navigate
                to={
                  userToken.role == "admin" ? "/adminDashboard" : "/dashboard"
                }
              />
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="/register"
          element={
            userToken ? (
              <Navigate
                to={
                  userToken.role == "admin" ? "/adminDashboard" : "/dashboard"
                }
              />
            ) : (
              <Register />
            )
          }
        />
        <Route
          path="/carshistory"
          element={
            token == null ? <Navigate to={"/login"} /> : <CarServiceHistory />
          }
        />
        <Route
          path="/adminArticles"
          element={
            token == null ? <Navigate to={"/login"} /> : <AdminArticles />
          }
        />
        <Route
          path="/adminDashboard"
          element={
            userToken == null ? <Navigate to={"/login"} /> : <AdminDashboard />
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
