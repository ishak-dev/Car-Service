import React from "react";
import "../style/pages/login.css";
import { Link } from "react-router-dom";
const Login = () => {
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
        />
        <input
          className="login-input"
          id="password"
          type="password"
          name="password"
          placeholder="password"
        />
        <input type="checkbox" className="terms" />
        <p className="terms">Remember me</p>
        <button type="submit">
          <b>LOGIN</b>
        </button>

        <p className="forget-password">
          <Link to="#">Forget password ?</Link>
        </p>
        <div className="center">
          <p className="account-registration">
            Don't have an account <Link to="#">REGISTER HERE</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
