// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import Blogs from './components/Blogs'
import About from "./components/About";
import BlogsDetails from "./components/Blogs-details";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Profile from "./components/Profile";
import MyBlogs from "./components/MyBlogs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddBlog from "./components/Add-Blog";
import EditBlog from "./components/Edit-Blog";
import ScrollToTop from "./components/ScrollToTp";
function App() {
 

  return (
    <BrowserRouter>
    <div className="page-wrapper">
      <ToastContainer position="top-right"
  autoClose={3000} />
<Header />


  <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs-details" element={<BlogsDetails />} />
        <Route path="/blogs-details/:id" element={<BlogsDetails />} />
        <Route path="/login" element={<Login /> }/>
        <Route path="/registration" element={<Registration />} />
        <Route path="/profile" element={ <Profile /> }/>
        <Route path="/my-blogs" element={<MyBlogs /> } />
        <Route path="/add-blog" element={<AddBlog />} />
        <Route path="/edit-blog/:id" element={<EditBlog />}/>
      </Routes>
     
      <Footer></Footer>
    </div>
      </BrowserRouter>
   
  )
}

export default App
