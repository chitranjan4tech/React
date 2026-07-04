import React, {
  useEffect,
  useState
} from "react";

import axios from "axios";

import {
  useParams
} from "react-router-dom";
import { Link } from "react-router-dom";

import imgBlogBg from '../assets/images/background/page-title-bg.jpg'
import imgBlogDetail from '../assets/images/resource/news-details.jpg'
import imgBlogCmd from '../assets/images/resource/testi-2.jpg'

const BlogsDetails = () => {
const user = JSON.parse(
  localStorage.getItem("user")
);
const { id } = useParams();
const [comment, setComment] = useState("");
const [comments, setComments] = useState([]);
const [blog, setBlog] = useState(null);
const [latestBlogs, setLatestBlogs] = useState([]);
useEffect(() => {

  fetchBlogDetails();
  fetchLatestBlogs();
 fetchComments();
}, [id]);

const fetchBlogDetails = async () => {

  try {

    const res = await axios.get(
      `http://localhost:5000/blog-details/${id}`
    );

    setBlog(res.data);

  } catch (err) {

    console.log(err);
  }
};
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

const handleCommentSubmit = async (e) => {

  e.preventDefault();

  if (!user) {

    alert("Please login first");

    return;
  }

  try {

    await axios.post(
      "http://localhost:5000/add-comment",
      {
        blog_id: id,
        user_id: user.id,
        name: user.name,
        email: user.email,
        comment,
      }
    );

    fetchComments();

    setComment("");

  } catch (err) {

    console.log(err);
  }
};

const fetchComments = async () => {

  try {

    const res = await axios.get(
      `http://localhost:5000/blog-comments/${id}`
    );

    setComments(res.data);

  } catch (err) {

    console.log(err);
  }
};
if (!blog) {
  return <h2>Loading...</h2>;
}

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
        <section className="page-title" style={{ backgroundImage: `url(${imgBlogBg})` }}>
		<div className="auto-container">
			<div className="title-outer">
				<h1 className="title">Blog Details</h1>
				<ul className="page-breadcrumb">
					<li><Link to="/">Home</Link></li>
					<li><Link to="/blogs">Blogs</Link></li>
				</ul>
			</div>
		</div>
	</section>
	
	<section className="blog-details pt-120 pb-120">
		<div className="container">
			<div className="row">
				<div className="col-xl-8 col-lg-7">
					<div className="blog-details__left">
						<div className="blog-details__img">
							<img
  src={`http://localhost:5000/uploads/${blog.image}`}
  alt=""
  style={{
    width: "100%",
    height: "450px",
    objectFit: "cover",
  }}
/>
							<div className="blog-details__date">
								<span className="day">
  {new Date(blog.date).getDate()}
</span>

<span className="month">
  {new Date(blog.date).toLocaleString(
    "default",
    { month: "short" }
  )}
</span>
							</div>
						</div>
						<div className="blog-details__content">
							<ul className="list-unstyled blog-details__meta">
								<li><a href=""><i className="fas fa-user-circle"></i> {capitalizeWords(blog.author_name)}</a> </li>
								<li><a href=""><i className="fas fa-comments"></i> {comments.length}{" "}
										Comments</a>
								</li>
							</ul>
							<h3 className="blog-details__title">{blog.title}</h3>
							<div
  className="blog-details__text-2"
  dangerouslySetInnerHTML={{
    __html: blog.full_description,
  }}
></div>
							
						</div>
						<div className="blog-details__bottom">
							<p className="blog-details__tags"> <span>Tags</span> <a href="">{blog.category}</a> </p>
							<div className="blog-details__social-list"> <a href="news-details.html"><i className="fa fa-x"></i></a> <a href="news-details.html"><i className="fab fa-facebook"></i></a> <a href="news-details.html"><i className="fab fa-pinterest-p"></i></a> <a href="news-details.html"><i className="fab fa-instagram"></i></a> </div>
						</div>
						
						<div className="comment-one">
							<h3 className="comment-one__title">{comments.length} Comments</h3>
							{comments.map((item) => (
							<div className="comment-one__single" key={item.id}>
								<div className="comment-one__image"> <img src={imgBlogCmd} alt=""/> </div>
								<div className="comment-one__content">
									<h3>{item.name}</h3>
									<p>{item.comment}</p>
									{/* <a href="" className="theme-btn btn-style-two comment-one__btn"><span className="btn-title">Reply</span></a> */}
								</div>
							</div>
							))}
							
							<div className="comment-form">
								<h3 className="comment-form__title mb-30">Leave a Comment</h3>
								<form id="contact_form" name="contact_form" className="" onSubmit={handleCommentSubmit}>
									
									<div className="mb-3">
										<textarea name="form_message" value={comment} onChange={(e) =>setComment(e.target.value)} className="form-control required" rows="5" placeholder="Enter Message"></textarea>
									</div>
									<div className="mb-3">
										
										<button type="submit" className="theme-btn btn-two" data-loading-text="Please wait..."><span className="btn-title">Submit Comment</span></button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
				<div className="col-xl-4 col-lg-5">
					<div className="sidebar">
						
						<div className="sidebar__single sidebar__post">

  <h3 className="sidebar__title">
    Latest Blogs
  </h3>

  <ul className="sidebar__post-list list-unstyled">

    {latestBlogs.map((item) => (

      <li key={item.id}>

        <div className="sidebar__post-image">

          <img
            src={`http://localhost:5000/uploads/${item.image}`}
            alt=""
            style={{
              width: "80px",
              height: "80px",
              objectFit: "cover",
            }}
          />

        </div>

        <div className="sidebar__post-content">

          <h3>

            <span className="sidebar__post-content-meta">

              <i className="fas fa-user-circle"></i>

              {capitalizeWords(item.author_name)}

            </span>

            <Link to={`/blogs-details/${item.id}`}>

              {item.title.length > 40
    ? item.title.substring(0, 40) + "..."
    : item.title}

            </Link>

          </h3>

        </div>

      </li>
    ))}

  </ul>

</div>
					
						
					</div>
				</div>
			</div>
		</div>
	</section>
        </>
    )
}
export default BlogsDetails;