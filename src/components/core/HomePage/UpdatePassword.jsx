import React, { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../../../services/operations/authAPI";

const UpdatePassword = () => {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const { password, confirmPassword } = formData;
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] =
    useState(false);
  const { loading } = useSelector((state) => state.auth.loading);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const currentURL = window.location.href;
  const token = currentURL.split("/")[4];

  function navigateBack() {
    navigate("/login");
  }

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(resetPassword(password, confirmPassword, token, navigate));
  }
  return (
    <div className="h-screen w-full text-richblack-5 flex items-center justify-center">
      {loading ? (
        <div>Loading....</div>
      ) : (
        <div className="w-[508px] flex flex-col items-start justify-center h-[450px]">
          <div className="flex flex-col items-start gap-2">
            <h2 className="text-[30px] text-richblack-5 font-semibold">
              Choose your new password
            </h2>
            <p className="text-[18px] text-richblack-300 font-[400]">
              Almost done. Enter your new password and youre all set.
            </p>
          </div>
          <div className="flex flex-col mt-10 w-full h-full justify-between">
            <form onSubmit={handleSubmit}>
              <div className="gap-10 flex flex-col">
                <div className="flex flex-col gap-3">
                  <label htmlFor="email" className="text-[14px]">
                    New Password{" "}
                    <span className="text-[#EF476F] outline-none border-none">
                      *
                    </span>{" "}
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
                </div>
                <div className="flex flex-col gap-3">
                  <label htmlFor="email" className="text-[14px]">
                    Confirm new password{" "}
                    <span className="text-[#EF476F] outline-none border-none">
                      *
                    </span>{" "}
                  </label>
                  <div className="relative w-full  mt-2">
                    <input
                      type={confirmPasswordVisibility ? "text" : "password"}
                      id="confirmpassword"
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

                {/* <CTAButton active={true}> */}
                <button
                  type="submit"
                  className="text-center text-[13px] px-6 py-3 rounded-md font-bold 
               bg-yellow-50 text-black hover:scale-95 transition-all duration-200">
                  Reset Password
                </button>
              </div>
            </form>
          </div>
          {/* back to login */}
          <button
            className="flex items-center gap-2 text-[20px]"
            onClick={navigateBack}>
            <IoIosArrowRoundBack className="text-4xl" />
            <p>Back to login</p>
          </button>
        </div>
      )}
    </div>
  );
};

export default UpdatePassword;
