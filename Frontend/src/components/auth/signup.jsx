import { useState } from 'react';
import ValidationObject from "../../validation.js"
import {Link , useNavigate} from "react-router-dom";
import axios from "axios";
const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    file: '',
  });
  const navigateUser= useNavigate();
  const [formError, setFormError]= useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if(name=="file")
    {
    setFormData({
      ...formData,
      [name]: files[0],

    });
  }
  else{
    setFormData({
      ...formData,
      [name]: value,
    });
  }
    // console.log(FormData);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const NameV = ValidationObject.validateName(formData.name);
    const EmailV = ValidationObject.validateEmail(formData.email);
    const PassV = ValidationObject.validatePass(formData.password);

    if(typeof NameV == "string" && NameV.length >1)
    {
        return setFormError(NameV);
    }
    if(typeof EmailV == "string" && EmailV.length >2)
        {
            return setFormError(EmailV);
        }
    if(typeof PassV == "string" && PassV.length >2)
    {
        return setFormError(PassV);
    }

    e.preventDefault();
    console.log('Form Data:', formData);
    setFormError('');

    const formDataBody= new FormData();

    formDataBody.append("email",formData.email);
    formDataBody.append("password",formData.password);
    formDataBody.append("name",formData.name);
    formDataBody.append("file",formData.file);
    try{
      await axios.post("https://ecommerce-follow-along-dwdh.onrender.com/user/signup" , formDataBody,{
        headers:{
          "Content-Type": "multipart/form-data"
      },
    });
    navigateUser("/login");
    }
    catch(err){
      console.log("Something wrong"+ err.message)
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Sign Up</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* File Upload */}
          <div>
            <label htmlFor="file-upload" className="block text-sm font-medium text-gray-700">Upload File</label>
            <input
              type="file"
              id="file-upload"
              name="file"
              accept=".jpg , .jpeg , .png"
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm"
              required
            />
          </div>
           {/* Error Message */}
           {formError && <p className="text-red-500 text-sm">{formError}</p>}

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Sign Up
            </button>
          </div>
          <p className="text-center">
            <Link to= {"/login"} >Already have an acc?</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;