import React, { useEffect, useState } from "react";
import "../style/pages/login.css";
import { Link } from "react-router-dom";
import { login } from "../api/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    
    setFormData((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  }
  return (
    <div className="login-section">
      <div className="col-sm-5 left-side">
        <h4>Welcome to our shop, Design you own motorcycle</h4>

        <p className="p-tag">
          Our page allows you to create your own motorcycle, with around 1000
          items we sure that you will find something for you
        </p>
        <input
          className="login-input"
          id="username"
          type="email"
          name="email"
          placeholder="email"
          onChange={handleChange}
        />
        <input
          className="login-input"
          id="password"
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
        />
        <input type="checkbox" className="terms" />
        <p className="terms">Remember me</p>
        <button
          type="button"
          onClick={async () => toast.error(await login(formData))}
        >
          <b>LOGIN</b>
        </button>

        <p className="forget-password">
          <Link to="#">Forget password ?</Link>
        </p>
        <div className="center">
          <p className="account-registration">
            Don't have an account <Link to="/register">REGISTER HERE</Link>
          </p>
        </div>
      </div>
      <ToastContainer theme="dark" autoClose={2000} />
    </div>
  );
};

export default Login;
