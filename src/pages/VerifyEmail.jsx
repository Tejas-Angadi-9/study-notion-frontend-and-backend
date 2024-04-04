import React, { useEffect, useState } from "react";
import OTPInput from "react-otp-input";

import { IoIosArrowRoundBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../services/operations/authAPI";
import { useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const [otp, setOtp] = useState("");
  const { signupData, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!signupData) {
      navigate("/signup");
    }
  }, []);

  //   const {accoutType} = signupData;

  function handleSubmit(e) {
    e.preventDefault();

    const {
      accountType,
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      phoneNumber,
    } = signupData;

    dispatch(
      signup(
        accountType,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        phoneNumber,
        otp,
        navigate,
      ),
    );
  }

  return (
    <div className="h-screen w-full text-richblack-5 flex items-center justify-center">
      {loading ? (
        <div>Loading....</div>
      ) : (
        <div className="w-[508px] flex flex-col items-start justify-center h-[450px]">
          <div className="flex flex-col items-start gap-2">
            <h2 className="text-[30px] text-richblack-5 font-semibold">
              Verify Email
            </h2>
            <p className="text-[18px] text-richblack-300 font-[400]">
              A verification code has been sent to you. Enter the code below
            </p>
          </div>
          <div className="flex flex-col mt-10 w-full h-full justify-between">
            <form onSubmit={handleSubmit} className="">
              <div className="gap-10 flex flex-col">
                <OTPInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={6}
                  renderSeparator={<span>-</span>}
                  inputStyle={{ color: "black" }}
                  renderInput={(props) => <input {...props} />}
                />
                <button
                  type="submit"
                  className="text-center text-[13px] px-6 py-3 rounded-md font-bold 
                 bg-yellow-50 text-black hover:scale-95 transition-all duration-200">
                  Verify & Register
                </button>
              </div>
            </form>
          </div>
          {/* back to login */}
          <button
            className="flex items-center gap-2 text-[20px]"
            onClick={() => navigate("/login")}>
            <IoIosArrowRoundBack className="text-4xl" />
            <p>Back to login</p>
          </button>
        </div>
      )}
    </div>
  );
};

export default VerifyEmail;
