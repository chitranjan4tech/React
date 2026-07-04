import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css"
import { toast } from "react-toastify";

import loginImg from "../assets/images/login.png";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(
      "http://localhost:5000/login",
      form
    );

    localStorage.setItem("token", res.data.token);

    localStorage.setItem(
      "user",
      JSON.stringify(res.data.user)
    );

    // alert("Login Successful");
    toast.success("Login Successful");

    setTimeout(() => {
  window.location.href = "/";
}, 1500);

  } catch (err) {
    console.log(err);

    // alert(
    //   err.response?.data?.message ||
    //   "Invalid email or password"
    // );
    toast.error(
  err.response?.data?.message ||
  "Invalid email or password"
);
  }
};

  return (
    <div
      className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light"
    >
      <div className="row shadow-lg rounded overflow-hidden w-100" style={{ maxWidth: "950px" }}>
        
        {/* LEFT SIDE */}
        <div className="col-md-6 d-none d-md-flex flex-column justify-content-center align-items-center text-white p-5 loginBg" >
          
          <img src={loginImg} alt="" title="Consultez" />

         
        </div>

        {/* RIGHT SIDE */}
        <div className="col-md-6 bg-white p-5">

          
            <>
              <h2 className="fw-bold mb-4 text-center">Login</h2>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                     name="email"
                    className="form-control"
                    placeholder="Enter email"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter password"
                    onChange={handleChange}
                    required
                  />
                </div>

                

                <button className="btn w-100 loginBtn">
                  Login
                </button>
              </form>
              <div className="d-flex justify-content-between align-items-center mb-3">
                  

                  <a href="/" className="text-decoration-none">
                    Forgot Password?
                  </a>
                </div>
              <p className="text-center mt-4">
                Don't have an account?{" "}
                <Link
                  to="/registration"
                >
                  Sign Up
                </Link>
              </p>
            </>
          
        </div>
      </div>
    </div>
  );
};

export default Login;