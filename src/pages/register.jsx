import React from "react";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    //All style and classes from login are used as register as well
    <div className="login-section">
      <div className="col-sm-5 left-side">
        <h4>Register within few steps</h4>
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
        <input
          className="login-input"
          id="password"
          type="password"
          name="password"
          placeholder="password"
        />
        <input
          className="login-input"
          id="password"
          type="password"
          name="password"
          placeholder="password"
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

export default Register;
