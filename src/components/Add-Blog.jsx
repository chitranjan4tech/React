import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import JoditEditor from "jodit-react";
//import { useRef, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
const AddBlog = () => {
// const [description, setDescription] = useState();
const editor = useRef(null);

const [description, setDescription] = useState("");

// add blog
const [form, setForm] = useState({
  title: "",
  category: "",
  short_description: "",
  status: "",
  
});
const user = JSON.parse(
  localStorage.getItem("user")
);
const navigate = useNavigate();
const [image, setImage] = useState(null);
const handleChange = (e) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value,
  });
};
const handleSubmit = async (e) => {

  e.preventDefault();

  const formData = new FormData();

  formData.append("title", form.title);
  formData.append("category", form.category);
  formData.append(
    "short_description",
    form.short_description
  );

  formData.append(
    "full_description",
    description
  );
  formData.append(
  "author_name",
  user.name
);
formData.append(
  "author_email",
  user.email
);

  formData.append("status", form.status);


  formData.append("image", image);

  try {

    const res = await axios.post(
      "http://localhost:5000/add-blog",
      formData
    );

    toast.success("Blog Added Successfully");
navigate("/my-blogs");
  } catch (err) {

  console.log(err);

  alert(
    err.response?.data?.message ||
    err.message
  );
}
};
    return(
        <>
        <section>
  	<div className="container pt-80 pb-120">
  		<div className="section-content">
  		<form id="checkout-form" onSubmit={handleSubmit}>
  			<div className="row mt-30">
  			<div className="col-md-12">
  				<div className="billing-details">
  				<h3 className="mb-30">Add New Blog</h3>
  				<div className="row">
  					{/* <div className="mb-3 col-md-6">
  					<label for="checkuot-form-fname">First Name</label>
  					<input id="checkuot-form-fname" type="email" className="form-control" placeholder="First Name" />
  					</div>
  					<div className="mb-3 col-md-6">
  					<label for="checkuot-form-lname">Last Name</label>
  					<input id="checkuot-form-lname" type="email" className="form-control" placeholder="Last Name" />
  					</div> */}
  					<div className="col-md-12">
                        <div className="mb-3">
  						<label >Blog Image</label>
  						<input id="checkuot-form-cname" type="file" className="form-control"  onChange={(e) =>
    setImage(e.target.files[0])
  } />
  					</div>
  					<div className="mb-3">
  						<label >Blog Title</label>
  						<input id="checkuot-form-cname" name="title" type="text" className="form-control"  onChange={handleChange} />
  					</div>
                    <div className="mb-3">
  						<label >Category</label>
  						<input id="checkuot-form-address" name="category" list="datalistOptions" className="form-control" onChange={handleChange}/>
                        <datalist id="datalistOptions">
                            <option value="Education" />
                            <option value="Motivation"/>
                            <option value="Lifestyle"/>
                            <option value="Finance"/>
                            <option value="Travel"/>
                            <option value="Health"/>
                            <option value="News"/>
                        </datalist>
  					</div>
  					
  					<div className="mb-3">
  						<label >Short Description</label>
  						<textarea  id="checkuot-form-email" name="short_description" className="form-control" onChange={handleChange} />
  					</div>
                    <div className="mb-3">
  						<label >Full Description</label>
  						<JoditEditor
    ref={editor}
    value={description}
    onBlur={(newContent) =>
      setDescription(newContent)
    }
  />
  					</div>
  					<div className="mb-3">
  					<label>Status</label>
  					<select className="form-control" name="status" onChange={handleChange}>
  						<option value="">Select Status</option>
  						<option value="Published">Published</option>
  						<option value="Draft">Draft</option>
  						
  					</select>
  					</div>
                    <div className="col-lg-6 col-sm-12 column">
  											<div className="field-input message-btn">
  												<button  className="theme-btn btn-two" data-loading-text="Please wait..."><span className="btn-title">Submit</span></button>
  											</div>
  										</div>
  					</div>
  					
  					
  					
  					
  				</div>
  				</div>
  			</div>
  			
  			
  			</div>
  		</form>
  		</div>
  	</div>
	</section>
        </>
    )
}

export default AddBlog;