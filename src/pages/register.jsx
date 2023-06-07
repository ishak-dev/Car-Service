import React, { useState } from "react";
import { Link } from "react-router-dom";
import { addUser } from "../api/api";
const Register = () => {
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
    Phone: "",
    Address: "",
  });

  function handleChange(e) {
    setFormData((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  }

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
          id="firstName"
          type="text"
          name="FirstName"
          placeholder="First name"
          onChange={handleChange}
        />
        <input
          className="login-input"
          id="LastName"
          type="text"
          name="LastName"
          placeholder="Last name"
          onChange={handleChange}
        />
        <input
          className="login-input"
          id="email"
          type="email"
          name="Email"
          placeholder="email"
          onChange={handleChange}
        />
        <input
          className="login-input"
          id="password"
          type="password"
          name="Password"
          placeholder="Password"
          onChange={handleChange}
        />
        <input
          className="login-input"
          id="phone"
          type="text"
          name="Phone"
          placeholder="Phone"
          onChange={handleChange}
        />
        <input
          className="login-input"
          id="Address"
          type="text"
          name="Address"
          placeholder="Address"
          onChange={handleChange}
        />
        <input type="checkbox" className="terms" />
        <p className="terms">Remember me</p>
        <button type="submit" onClick={() => console.log(addUser(formData))}>
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
