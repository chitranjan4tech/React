import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import loginImg from "../assets/images/login.png";

const Registration = () =>{

    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        email: "",
        mobile: "",
        password: ""
    });
const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/signup", form);
      alert("Signup successful");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };


     return (
    <div
      className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light"
    >
      <div className="row shadow-lg rounded overflow-hidden w-100" style={{ maxWidth: "950px" }}>
        
        {/* LEFT SIDE */}
        <div className="col-md-6 d-none d-md-flex flex-column justify-content-center align-items-center text-white p-5 loginBg">
          <img src={loginImg} alt="" title="Consultez" />

          
        </div>

        {/* RIGHT SIDE */}
        <div className="col-md-6 bg-white p-5">

          
         
          
            <>
              {/* SIGNUP FORM */}

              <h2 className="fw-bold mb-4 text-center">Sign Up</h2>

              <form onSubmit={handleSubmit}>

                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter full name"
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter email"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Mobile</label>
                  <input
                    type="text"
                    name="mobile"
                    className="form-control"
                    placeholder="Enter Mobile"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Create password"
                    onChange={handleChange}
                  />
                </div>

                

                <button className="btn loginBtn w-100">
                  Create Account
                </button>
              </form>

              <p className="text-center mt-4">
                Already have an account?{" "}
                <Link
                  to="/login"
                >
                  Login
                </Link>
              </p>
            </>
         
        </div>
      </div>
    </div>
  );
}
export default Registration;