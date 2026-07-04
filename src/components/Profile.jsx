import React from "react";
import profileImg from '../assets/images/resource/team-details.jpg';

const Profile = () => {
const user = JSON.parse(localStorage.getItem("user"));
    return(
        <>
        <section className="team-details pt-120 pb-90">
    <div className="container">
      <div className="team-details__top pb-70">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="team-details__top-left">
              <div className="team-details__top-img">
                <img className="w-100" src={profileImg} alt="" />
                <div className="team-details__big-text"></div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="team-details__top-right pt-50">
              <div className="team-details__top-content">
                <h3 className="team-details__top-name">{user?.name}</h3>
                <p className="team-details__top-title">Chief Attorney</p>
                <p className="team-details__top-text-1">I help my clients stand out and they help me grow.</p>
                <div className="team-details-contact mb-30">
                  <h5 className="mb-0">Email Address</h5>
                  <div className=""><span><a href="#" className="__cf_email__" >{user?.email}</a></span></div>
                </div>
                <div className="team-details-contact mb-30">
                  <h5 className="mb-0">Phone Number</h5>
                  <div className=""><span>{user?.mobile}</span></div>
                </div>
                
                <div className="team-details__social">
                  <a href="#"><i className="fa fa-x"></i></a>
                  <a href="#"><i className="fab fa-facebook"></i></a>
                  <a href="#"><i className="fab fa-pinterest-p"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </section>
        </>
    )
}
export default Profile;