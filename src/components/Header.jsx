import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import Login from "./Login";

import imgLogo from "../assets/images/new-lg1.png";


const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [profileMenu, setProfileMenu] = useState(false);
const [user, setUser] = useState(
  JSON.parse(localStorage.getItem("user"))
);


  return (
    <>
      <header className="main-header header-style-one">
        <div className="main-box">
          <div className="logo-box">
            <div className="logo">
              <Link to="/">
                 <img src={imgLogo} alt="" title="MyStory" />

              </Link>
            </div>
          </div>

          <div className="nav-outer d-none d-lg-block">
            <nav className="nav main-menu">
              <ul className="navigation">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                

                {/* <li className="dropdown">
                  <a href="#">Services</a>
                  <ul>
                    <li>
                      <a href="page-services.html">Services</a>
                    </li>
                    <li>
                      <a href="page-service-details.html">Services Details</a>
                    </li>
                  </ul>
                </li> */}

                <li>
                  <Link to="/blogs">Blogs</Link>
                </li>
                <li>
                  <a href="page-contact.html">Contact</a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="outer-box">
            <div className="info-box">
              <div className="call-info">
                <i className="fa-solid fa-phone ring__animation"></i>

                <div>
                  <h6 className="title">Phone:</h6>
                  <a href="tel:00222222200">+00 2222 222 00</a>
                </div>
              </div>

        {user ? (
  <div className="position-relative">
    <button
      className="btn-two"
      onClick={() =>
  setProfileMenu((prev) => !prev)
}
    >
      Hi, {user.name}
    </button>

    {profileMenu  && (
      <div
        style={{
          position: "absolute",
          top: "45px",
          right: "0",
          background: "#fff",
          border: "1px solid #ddd",
          borderRadius: "5px",
          minWidth: "160px",
          zIndex: 9999,
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <Link
  to="/profile"
  className="dropdown-item btnHover"
  onClick={() => setProfileMenu(false)}
  style={{
    display: "block",
    padding: "10px",
    textDecoration: "none",
    color: "#000",
    
  }}
>
  My Profile
</Link>
 <Link
  to="/my-blogs"
  className="dropdown-item btnHover"
  onClick={() => setProfileMenu(false)}
  style={{
    display: "block",
    padding: "10px",
    textDecoration: "none",
    color: "#000",
  }}
>
  My Blogs
</Link>

        <button
          className="dropdown-item btnHover"
          style={{
            width: "100%",
            border: "none",
            background: "none",
            textAlign: "left",
            padding: "10px",
          }}
          onClick={() => {
            localStorage.removeItem("token");
            localStorage.removeItem("user");

            window.location.href = "/";
          }}
        >
          Logout
        </button>
      </div>
    )}
  </div>
) : (
  <Link className="btn-two" to="/login">
    Sign In
  </Link>
)}
            </div>

            {/* MOBILE TOGGLER */}
            <div
              className="mobile-nav-toggler d-block d-lg-none"
              onClick={() => setMobileMenu(true)}
            >
              <i className="icon lnr-icon-bars"></i>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        {/* MOBILE MENU */}
        <div
          style={{
            position: "fixed",
            top: 0,
            left: mobileMenu ? "0" : "-100%",
            width: "300px",
            height: "100vh",
            background: "#fff",
            zIndex: 99999,
            transition: "0.4s",
            padding: "20px",
            overflowY: "auto",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "30px",
            }}
          >
            <img src={imgLogo} alt="" width="120" />

            <button
              onClick={() => setMobileMenu(false)}
              style={{
                border: "none",
                background: "none",
                fontSize: "24px",
                cursor: "pointer",
              }}
            >
              ×
            </button>
          </div>

          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ marginBottom: "20px" }}>
              <a href="/">Home</a>
            </li>

            <li style={{ marginBottom: "20px" }}>
              <a href="/">About</a>
            </li>

            <li style={{ marginBottom: "20px" }}>
              <a href="/">Services</a>
            </li>

            <li style={{ marginBottom: "20px" }}>
              <a href="/">Blogs</a>
            </li>

            <li style={{ marginBottom: "20px" }}>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
