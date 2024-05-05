import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../services/operations/authAPI";

const LoginForm = ({ type, accountType }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const [formData, setFormData] = useState({
    // Initialize form fields
    email: "",
    password: "",
    accountType: accountType,
  });

  const { email, password } = formData;

  // Function to handle form field changes
  const handleInputChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
      accountType: accountType,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login(email, password, navigate));
    console.log(email, password);
  };

  return (
    <div className="text-[20px] w-[50%]">
      <form onSubmit={handleSubmit} className="flex flex-col items-start gap-3">
        <label htmlFor="email" className="text-[14px]">
          Email Address{" "}
          <span className="text-[#EF476F] outline-none border-none">*</span>{" "}
        </label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full bg-richblue-900 focus:bg-richblue-900 p-1 rounded-md border-b-2 border-b-richblack-500 text-[16px] py-3 px-3 flex items-center"
          placeholder="Enter email address"
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        />
        <label htmlFor="password" className="text-[14px]">
          Password{" "}
          <span className="text-[#EF476F] outline-none border-none">*</span>{" "}
        </label>
        <div className="relative w-full">
          <input
            type={passwordVisibility ? "text" : "password"}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full bg-richblue-900 focus:bg-richblue-900 p-1 rounded-md border-b-2 border-b-richblack-500 text-[16px] py-3 px-3 flex items-center"
            placeholder="Enter Password"
            required
          />
          {passwordVisibility ? (
            <LuEyeOff
              className="absolute right-4 top-[50%] -translate-y-[50%] cursor-pointer"
              onClick={() => setPasswordVisibility((prev) => !prev)}
            />
          ) : (
            <LuEye
              className="absolute right-4 top-[50%] -translate-y-[50%] cursor-pointer"
              onClick={() => setPasswordVisibility((prev) => !prev)}
            />
          )}
        </div>
        <div className="flex justify-end mt-2 text-[12px] w-full cursor-pointer text-[#47A5C5]">
          <Link to={"/forgot-password"}>Forget paasword</Link>
        </div>
        <button
          onClick={() => console.log(formData)}
          className={`w-full text-center text-[13px] px-6 py-3 rounded-md font-bold 
            bg-yellow-50 text-black hover:scale-95 transition-all duration-200 mt-5`}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
