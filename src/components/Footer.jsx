import React from "react";

import imgFooterlg from '../assets/images/new-lg.png'
import { Link } from "react-router-dom";


const Footer = () => {

    return(
        <>
         <footer className="main-footer footer-style-one">
      <div className="outer-box">

        <div className="footer-left">
          <div className="logo">
            <a href="index.html"><img src={imgFooterlg} alt="Logo"/></a>
          </div>
          
        </div>

        <div className="row g-0 w-100">
          <div className="col-xl-8 left-column order-2 order-xl-1">

            <div className="footer-top">
              <div className="row g-4">
                <div className="col-lg-4">
                  <div className="info-item">
                    <ul>
                      <li><i className="fa-sharp fa-solid fa-phone"></i></li>
                      <li>
                        <span>Call Us:</span>
                        <h5 className="title">+91-99999-99999</h5>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="info-item">
                    <ul>
                      <li><i className="fa-sharp fa-solid fa-envelope"></i></li>
                      <li>
                        <span>Email Us:</span>
                        <h5 className="title"><a href="" className="__cf_email__" data-cfemail="c2abaca4ad82aaa7aeb2eca1adaf">email@mystory.com</a></h5>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="info-item">
                    <ul>
                      <li><i className="fa-sharp fa-solid fa-location-dot"></i></li>
                      <li>
                        <span>Location:</span>
                        <h5 className="title">Bengaluru</h5>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="widgets-section">

              <div className="row g-4">
                <div className="col-lg-4 footer-column">
                  <div className="footer-widget links-widget">
                    <h4 className="widget-title">Services</h4>
                    <div className="widget-content">
                      <ul className="user-links">
                        <li><a href="#0">Terms Of Service</a></li>
                        <li><a href="#0">Privacy</a></li>
                        <li><a href="#0">Content Policy</a></li>
                        
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 footer-column">
                  <div className="footer-widget links-widget">
                    <h4 className="widget-title">Pages</h4>
                    <div className="widget-content">
                      <ul className="user-links">
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/blogs">Blogs</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 footer-column">
                  <div className="footer-widget links-widget">
                    <h4 className="widget-title">Signup Newsletter</h4>
                    <div className="input-feild">
                      <input type="text" placeholder="Email Address"/>
                      <a className="btn-one-rounded" href="#0">Sign up now <i className="fa-regular fa-angle-right"></i></a>
                    </div>
                    <ul className="footer-nav">
                      <li><a href="#0"><i className="fa-brands fa-facebook-f"></i></a></li>
                      <li><a href="#0"><i className="fa-solid fa-x"></i></a></li>
                      <li><a href="#0"><i className="fa-brands fa-vimeo-v"></i></a></li>
                      <li><a href="#0"><i className="fa-brands fa-pinterest-p"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>

            <div className="footer-bottom">
              <p className="copyright-text">© Copyright 2026. All Right6 <a href="#0">MyStory</a></p>
            </div>

          </div>
          <div className="col-xl-4 right-column order-1 order-xl-2">
            <div className="inner-column">
              <h3 className="title">Have a Blogs in
                your Mind?</h3>
              <Link className="circle-btn" to={localStorage.getItem("token") ? "/add-blog" : "/login"}>Write Blog <i className="fa fa-pencil"></i></Link>
              
            </div>
           
          </div>
        </div>


      </div>
    </footer>
        </>
    )
}
export default Footer;