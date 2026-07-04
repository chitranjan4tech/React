import React, {
  useEffect,
  useState
} from "react";

import axios from "axios";
import {
  useParams
} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import imgBnr1 from '../assets/images/shape/banner-arry.png'
import imgBnr2 from '../assets/images/shape/banner-shape.png'

import imgBanner1 from '../assets/images/banner/bnr4.png'
import imgBanner2 from '../assets/images/banner/banner-image2.jpg'
import imgBanner3 from '../assets/images/banner/banner-image3.jpg'

import imgAbout1 from '../assets/images/about/about-image1.jpg'
import imgAboutinfo from '../assets/images/about/about-info.png'
import imgAbout2 from '../assets/images/about/about-image2.jpg'
import imgAboutUser from '../assets/images/about/about-user.png'
import imgAboutSig from '../assets/images/about/signature.png'
import { ReactTyped } from "react-typed";
const Home = ()=> {
  const [latestBlogs, setLatestBlogs] = useState([]);
  const { id } = useParams();
const fetchLatestBlogs = async () => {

  try {

    const res = await axios.get(
      "http://localhost:5000/latest-blogs"
    );

    setLatestBlogs(res.data);

  } catch (err) {

    console.log(err);
  }
};
useEffect(() => {

  
  fetchLatestBlogs();

}, [id]);
useEffect(() => {

  AOS.init({
    duration: 1200,
    once: false,
  });

}, []);
const capitalizeWords = (text) => {

  return text
    .split(" ")
    .map(
      word =>
        word.charAt(0).toUpperCase() +
        word.slice(1)
    )
    .join(" ");
};

    return(
        <>
      <section className="banner-section">
      {/* <div className="arry"><img className="animation__arryLeftRight" src={imgBnr1} alt="Image" /></div> */}
      {/* <div className="sec-shape"><img src={imgBnr2} alt="Image" /></div> */}
      

      <div className="swiper banner-slider">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="slide-bg"  style={{ backgroundImage: `url(${imgBanner1})` }}></div>
            <div className="container">
              <div className="outer-box">
                <div className="row g-0 align-items-end">
                  <div className="col-lg-12 col-md-12 col-sm-12 content-column text-center">
                    <div className="inner-column bnrText">
                      <h6 className="sub-title" data-animation="fadeInUp" data-delay=".3s">Publish your passions, your way
                      </h6>
                     <h1
  className="title"
  style={{ fontSize: "3.5rem" }}
  data-animation="fadeInUp"
  data-delay=".5s"
>

  <ReactTyped
    strings={[
      "Create a unique and beautiful blog easily.",
      "Share Your Stories With The World.",
      "Write. Publish. Inspire."
    ]}
    typeSpeed={60}
    backSpeed={30}
    loop
  />

</h1>
                      {/* <Link className="btn-one" data-animation="fadeInUp" data-delay=".8s" to="/login">Create Your Blog</Link> */}
                    <Link
  className="btn-one" data-animation="fadeInUp" data-delay=".8s"
  to={localStorage.getItem("token") ? "/add-blog" : "/login"}
>
  Create Your Blog
</Link>
                    </div>
                  </div>

                 
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="slide-bg" style={{ backgroundImage: `url(${imgBanner2})` }}></div>
            <div className="container">
              <div className="outer-box">
                <div className="row g-0 align-items-end">
                  <div className="col-lg-8 content-column">
                    <div className="inner-column">
                      <h6 className="sub-title" data-animation="fadeInUp" data-delay=".3s">Growth, Innovation, and Success
                      </h6>
                      <h1 className="title" data-animation="fadeInUp" data-delay=".5s">transforming
                        <span>business growth</span>
                        Drive Success
                      </h1>
                      <a className="btn-one" data-animation="fadeInUp" data-delay=".8s" href="page-contact.html">free consultation</a>
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <p className="text" data-animation="fadeInUp" data-delay=".9s">Take your brand to new heights Agency offering everything from strategy business.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="slide-bg" style={{ backgroundImage: `url(${imgBanner3})` }}></div>
            <div className="container">
              <div className="outer-box">
                <div className="row g-0 align-items-end">
                  <div className="col-lg-8 content-column">
                    <div className="inner-column">
                      <h6 className="sub-title" data-animation="fadeInUp" data-delay=".3s">Growth, Innovation, and Success
                      </h6>
                      <h1 className="title" data-animation="fadeInUp" data-delay=".5s">transforming
                        <span>business growth</span>
                        Drive Success
                      </h1>
                      <a className="btn-one" data-animation="fadeInUp" data-delay=".8s" href="page-contact.html">free consultation</a>
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <p className="text" data-animation="fadeInUp" data-delay=".9s">Take your brand to new heights Agency offering everything from strategy business.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      <section className="about-section pt-120 pb-120 paralax__animation">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 image-column wow fadeInRight" data-aos="fade-up">
            <div className="inner-column">
              <div data-depth="0.01" className="image1 overlay-anim">
                <img src={imgAbout1} alt="Image" /> 
              </div>
              
            </div>
          </div>

          <div className="col-lg-6 content-column" data-aos="fade-up">
            <div className="inner-column">
              <div className="content-box">
                <div className="sec-title">
                  <h6 className="sub-title wow fadeInUp" >ABOUT US</h6>
                  <h2 className="title wow splt-txt" data-splitting>Join millions of others</h2>
                  <p className="text wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">Welcome to HubPages! We are an open community of passionate people—writers, explorers, knowledge-seekers, interacting and informing one another, asking questions, and finding answers. It is a rich and rewarding publishing platform with a unique set of tools and resources to help writers find and build an audience, easily create articles, and earn all sorts of rewards, from accolades to ad revenue. Over 35,000,000 people explore our Network Sites every month (sign up now and start writing!)</p>
                </div>
               

                
              </div>

              

              <div className="info mt-50">
                <a href="page-services.html" className="btn-two">Find Services</a>
                <div className="user">
                  <div className="image">
                    <img src={imgAboutUser} alt="Image" />
                  </div>
                  <div>
                    <img src={imgAboutSig} alt="Image" />
                    <p className="sub-title">Founder</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
       <section className="blog-section pb-120">
      <div className="container">
        <div className="sec-title mb-50">
          <h6 className="sub-title wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">New & Blogs</h6>
          <div className="flex-content">
            <h2 className="title wow splt-txt" data-splitting>Our News & Blogs</h2>
            <Link to="/blogs" className="btn-two wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">All news & Blogs</Link>
          </div>
        </div>

       <div className="row g-4">
            {latestBlogs.map((item) => (
            <div className="col-lg-4 col-md-6" key={item.id} data-aos="fade-up">
              <div className="blog-block">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <img
            src={`http://localhost:5000/uploads/${item.image}`}
            alt=""
            
          />
                    </figure>
                  </div>
                  <div className="content-box">
                    <ul className="info">
                      <li>
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_56_1581)">
                            <path
                              d="M9.32324 -0.0292969C4.11958 -0.0292969 -0.1138 4.08889 -0.1138 9.15097C-0.1138 14.213 4.11958 18.3312 9.32324 18.3312C14.5269 18.3312 18.7603 14.213 18.7603 9.15097C18.7603 4.08889 14.5269 -0.0292969 9.32324 -0.0292969ZM9.32324 17.1162C4.80842 17.1162 1.13523 13.543 1.13523 9.15097C1.13523 4.75899 4.80842 1.18575 9.32324 1.18575C13.8381 1.18575 17.5113 4.75899 17.5113 9.15097C17.5113 13.543 13.8381 17.1162 9.32324 17.1162Z"
                              fill="#163839" />
                            <path
                              d="M11.4622 8.67124C12.1485 8.08923 12.5851 7.23506 12.5851 6.28186C12.5851 4.5326 11.122 3.10938 9.32364 3.10938C7.52524 3.10938 6.06221 4.5326 6.06221 6.28186C6.06221 7.23506 6.49875 8.08923 7.18509 8.67124C5.87882 9.08638 4.96577 9.73177 4.46158 10.6007C3.61495 12.0592 4.2838 13.5543 4.31253 13.6173C4.45326 13.9239 4.82255 14.0616 5.13731 13.9245C5.45227 13.7878 5.59362 13.4285 5.4529 13.1222C5.44852 13.1122 5.01719 12.1145 5.54907 11.1983C6.067 10.3059 7.37141 9.70525 9.32364 9.4592C11.2671 9.70423 12.5692 10.3008 13.0915 11.1868C13.6295 12.0997 13.2033 13.1015 13.1929 13.1252C13.0547 13.431 13.1963 13.788 13.5102 13.9243C13.5928 13.9603 13.6794 13.9773 13.7644 13.9773C14.0031 13.9773 14.2313 13.8433 14.335 13.6173C14.3639 13.5543 15.0325 12.0594 14.1859 10.6007C13.6813 9.73157 12.7683 9.08638 11.4622 8.67124ZM9.32364 8.23929C8.21388 8.23929 7.31124 7.36122 7.31124 6.28186C7.31124 5.20249 8.21388 4.32442 9.32364 4.32442C10.4334 4.32442 11.336 5.20249 11.336 6.28186C11.336 7.36122 10.4334 8.23929 9.32364 8.23929Z"
                              fill="#163839" />
                          </g>
                          <defs>
                            <clipPath>
                              <rect width="19" height="19" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <a href="#0">{capitalizeWords(item.author_name)}</a>
                      </li>
                     
                    </ul>
                    <h4 className="title">
                      <Link to="news-details.html">{item.title.length > 40
    ? item.title.substring(0, 40) + "..."
    : item.title}</Link>
                    </h4>
                    <Link to={`/blogs-details/${item.id}`} className="arry-btn">Read More
                      <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M7.38853 0.804688C5.43079 0.804688 3.5533 1.56122 2.16901 2.90791C0.784654 4.25449 0.00695801 6.08099 0.00695801 7.98541C0.00695801 9.88983 0.784654 11.7163 2.16901 13.0629C3.55325 14.4096 5.43085 15.1661 7.38853 15.1661C8.6842 15.1661 9.95714 14.8343 11.0793 14.2041C12.2014 13.5738 13.1332 12.6674 13.7812 11.5757C14.429 10.4841 14.7701 9.24582 14.7701 7.98541C14.7701 6.08094 13.9924 4.25454 12.6081 2.90791C11.2238 1.56122 9.34622 0.804688 7.38853 0.804688ZM11.0793 7.99972C11.0818 8.1558 11.0189 8.30616 10.905 8.41625L8.47505 10.7729C8.32501 10.9192 8.10619 10.9764 7.90096 10.9231C7.69582 10.8698 7.53539 10.714 7.48018 10.5146C7.42509 10.315 7.48358 10.102 7.63362 9.95577L9.05678 8.56993H4.28832C4.07742 8.56993 3.88246 8.46044 3.77693 8.28273C3.67148 8.10492 3.67148 7.88592 3.77693 7.70822C3.88249 7.53051 4.07742 7.42102 4.28832 7.42102H9.07022L7.63378 6.02366C7.48343 5.87741 7.42473 5.66432 7.47972 5.46457C7.53481 5.26482 7.69515 5.10874 7.9005 5.05525C8.10584 5.00175 8.32498 5.05885 8.47522 5.20511L10.9052 7.56178C11.0173 7.67008 11.08 7.81744 11.0795 7.97111V7.99986L11.0793 7.99972Z"
                          fill="#163839" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            ))}
           
          </div>
         
        </div>
      
    </section>
        </>
    )
}
export default Home;