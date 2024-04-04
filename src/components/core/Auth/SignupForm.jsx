import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";
import { setUser } from "../../../slices/profileSlice";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { setSingupData } from "../../../slices/authSlice";
import { sendotp, signup } from "../../../services/operations/authAPI";

const FillUpForm = ({ type, accountType }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signupData = useSelector((state) => state.auth.signupData);
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] =
    useState(false);

  const [formData, setFormData] = useState({
    // Initialize form fields
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: null,
    accountType: accountType,
    confirmPassword: "",
  });

  const { firstName, lastName, email, password, phoneNumber, confirmPassword } =
    formData;

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
    if (password != confirmPassword) {
      toast.error("passwords do not match!");
      return;
    }
    dispatch(setSingupData(formData));
    // Sending the OTP with the help of the operation function which sends the OTP as POST method
    dispatch(sendotp(email, navigate));
  };
  console.log("signupData: ", signupData);

  //* Reset
  // setFormData({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   password: "",
  //   role: "",
  //   confirmpassword: "",
  // });

  return (
    <div className="text-[20px] w-[50%]">
      {type === "login" ? (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-start gap-3">
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
            {type === "login" ? "login" : "Sign up"}
          </button>
        </form>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-[500px] items-start gap-3">
          <div className="flex w-full gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="firstname" className="text-[14px]">
                First Name{" "}
                <span className="text-[#EF476F] outline-none border-none">
                  *
                </span>{" "}
              </label>
              <input
                type="text"
                id="firstname"
                name="firstName"
                onChange={handleInputChange}
                value={formData.firstName}
                className="w-full bg-richblue-900 focus:bg-richblue-900 p-1 rounded-md border-b-2 border-b-richblack-500 text-[16px] py-3 px-3 flex items-center"
                placeholder="Enter first name"
                required
              />
            </div>
            <div className="flex flex-col  gap-2">
              <label htmlFor="lastname" className="text-[14px]">
                Last Name{" "}
                <span className="text-[#EF476F] outline-none border-none">
                  *
                </span>{" "}
              </label>
              <input
                type="text"
                id="lastname"
                name="lastName"
                onChange={handleInputChange}
                value={formData.lastName}
                className="w-full bg-richblue-900 focus:bg-richblue-900 p-1 rounded-md border-b-2 border-b-richblack-500 text-[16px] py-3 px-3 flex items-center"
                placeholder="Enter last name"
                required
              />
            </div>
          </div>
          <div className="flex">
            <div>
              <label htmlFor="email" className="text-[14px]">
                Email Address{" "}
                <span className="text-[#EF476F] outline-none border-none">
                  *
                </span>{" "}
              </label>
              <input
                type="text"
                id="email"
                name="email"
                onChange={handleInputChange}
                value={formData.email}
                className="w-[93%] bg-richblue-900 focus:bg-richblue-900 p-1 rounded-md border-b-2 border-b-richblack-500 text-[16px] py-3 px-3 flex items-center"
                placeholder="Enter email address"
                required
              />
            </div>
            <div>
              <label htmlFor="phonenumber" className="text-[14px]">
                Phone Number{" "}
                <span className="text-[#EF476F] outline-none border-none">
                  *
                </span>{" "}
              </label>
              <input
                type="tel"
                id="phonenumber"
                name="phoneNumber"
                onChange={handleInputChange}
                value={formData.phoneNumber}
                className="w-[93%] bg-richblue-900 focus:bg-richblue-900 p-1 rounded-md border-b-2 border-b-richblack-500 text-[16px] py-3 px-3 flex items-center"
                placeholder="Enter phone number"
                required
              />
            </div>
          </div>
          <div className="flex w-full gap-5">
            <div>
              <label htmlFor="password" className="text-[14px]">
                Password{" "}
                <span className="text-[#EF476F] outline-none border-none">
                  *
                </span>{" "}
              </label>
              <div className="relative w-full mt-2">
                <input
                  type={passwordVisibility ? "text" : "password"}
                  id="password"
                  name="password"
                  onChange={handleInputChange}
                  value={formData.password}
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
            </div>
            <div>
              <label htmlFor="confirmpassword" className="text-[14px]">
                Confirm Password{" "}
                <span className="text-[#EF476F] outline-none border-none">
                  *
                </span>{" "}
              </label>
              <div className="relative w-full  mt-2">
                <input
                  type={confirmPasswordVisibility ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  onChange={handleInputChange}
                  value={formData.confirmPassword}
                  className="w-full bg-richblue-900 focus:bg-richblue-900 p-1 rounded-md border-b-2 border-b-richblack-500 text-[16px] py-3 px-3 flex items-center"
                  placeholder="Enter Password"
                  required
                />
                {confirmPasswordVisibility ? (
                  <LuEyeOff
                    className="absolute right-4 top-[50%] -translate-y-[50%] cursor-pointer"
                    onClick={() =>
                      setConfirmPasswordVisibility((prev) => !prev)
                    }
                  />
                ) : (
                  <LuEye
                    className="absolute right-4 top-[50%] -translate-y-[50%] cursor-pointer"
                    onClick={() =>
                      setConfirmPasswordVisibility((prev) => !prev)
                    }
                  />
                )}
              </div>
            </div>
          </div>
          <button
            type="submit"
            className={`w-full text-center text-[13px] px-6 py-3 rounded-md font-bold 
            bg-yellow-50 text-black hover:scale-95 transition-all duration-200 mt-5`}>
            {type === "login" ? "login" : "Sign up"}
          </button>
        </form>
      )}
      {/* Sign in button */}
    </div>
  );
};

export default FillUpForm;
