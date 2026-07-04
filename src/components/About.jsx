import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import imgAboutTtl from '../assets/images/bg/page-title-bg.jpg'
import imgAboutTt2 from '../assets/images/about/about-three-info.png'
import imgAboutTt3 from '../assets/images/about/about-two-user1.png'
import imgAboutTt4 from '../assets/images/about/about-two-user2.png'
import imgAboutTt5 from '../assets/images/about/about-two-user3.png'
import imgAboutTt6 from '../assets/images/about/about-two-user4.png'
import imgAboutTt7 from '../assets/images/about/about-three-image.jpg'
const About = () =>  {
useEffect(() => {

  AOS.init({
    duration: 1200,
    once: false,
  });

}, []);
    return(

        <>
         <section className="page-title" style={{ backgroundImage: `url(${imgAboutTtl})` }}>
      <div className="auto-container">
        <div className="title-outer">
          <ul className="page-breadcrumb">
            <li><a href="index.html">Home</a></li>
            <li>About Us</li>
          </ul>
          <h1 className="title">About Us</h1>
        </div>
      </div>
    </section>
   
    <section className="about-section-three pt-120 pb-120">
      <div className="container">
        <div className="row g-5 g-xxl-0">
          <div className="col-xl-6 image-column" data-aos="fade-up">
            <div className="inner-column">
              <div className="shape">
                <img className="animation__rotate" src={imgAboutTt2} alt="Image" />
              </div>
              <figure className="image">
                <img src={imgAboutTt7} alt="Image" style={{height: "500px"}}/>
              </figure>
              
            </div>
          </div>

          <div className="col-xl-6 content-column" data-aos="fade-up"  data-aos-duration="3000">
            <div className="inner-column">
              <div className="sec-title">
                <h6 className="sub-title wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">ABOUT US</h6>
                <h5 className="title wow splt-txt" style={{textAlign:"justify"}} data-splitting>YourStory is India’s foremost chronicler and enabler of positive change. We place great trust in the power of listening to people, and in the ability of stories to inspire and empower. For a decade-and-half now, YourStory has provided the context for what’s possible. Through the tales of thousands of changemakers who have braved multiple limitations, YourStory has served as a catalyst for a better India. While riding with and charting the journeys of startups that are now billion-dollar companies, the Unicorns, YourStory continues to serve as the voice of multiple yet-unheralded entrepreneurs and other ordinary folks making a positive difference in society. And all on the same platform. YourStory has listened to and stood by every voice no matter their standing because their stories need to be told. Because they need to be able to access the same opportunities and chase the same dreams as those who have made it. That, in essence, is YourStory’s raison d'etre: to strive for an Equal India.
</h5>
              </div>
              <div className="about-block-three mt-50">
                <div className="row g-0">
                  
                  
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
export default About;