import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link, useNavigate } from "react-router-dom";

import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";

const ChangePasswords = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signupData = useSelector((state) => state.auth.signupData);
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] =
    useState(false);
  const { user } = useSelector((state) => state.profile);

  const [formData, setFormData] = useState({
    // Initialize form fields
    password: "",
    confirmPassword: "",
  });

  const { phoneNumber, confirmPassword } = formData;

  // Function to handle form field changes
  const handleInputChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="bg-richblue-800 border-[1px] border-richblack-400 rounded-md flex gap-10 p-10 justify-between">
      <div className="flex flex-col justify-center gap-10 w-full">
        <h3 className="font-semibold text-[20px]">Profile Information</h3>
        <form className="flex flex-col items-start gap-3">
          <div className="flex w-full gap-5">
            <div>
              <label htmlFor="password" className="text-[14px]">
                Current Password{" "}
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
                New Password{" "}
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
        </form>
      </div>
    </div>
  );
};

export default ChangePasswords;
