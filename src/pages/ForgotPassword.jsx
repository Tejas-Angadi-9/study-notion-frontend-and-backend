import React, { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPasswordResetToken } from "../services/operations/authAPI";

const ForgotPassword = () => {
  const navigate = useNavigate();

  function navigateBack() {
    navigate("/login");
  }

  const [emailSent, setEmailSent] = useState(false);
  const [email, setEmail] = useState("test@123.com");
  const { loading } = useSelector((state) => state.auth.loading);
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    // Current page depends on emailSent so when we get the success from the backend as the mail is sent then we can change the state from false to true. By this, the UI also updates with condition
    dispatch(getPasswordResetToken(email, setEmailSent));
  }

  console.log("email: ", email);
  return (
    <div className="h-screen w-full text-richblack-5 flex items-center justify-center">
      {loading ? (
        <div>Loading....</div>
      ) : (
        <div className="w-[508px] flex flex-col items-start justify-center h-[450px]">
          <div className="flex flex-col items-start gap-2">
            <h2 className="text-[30px] text-richblack-5 font-semibold">
              {emailSent ? "Check your email" : "Reset your password"}
            </h2>
            <p className="text-[18px] text-richblack-300 font-[400]">
              {emailSent
                ? `We have sent the reset email to ${email}`
                : "Have no fear. We’ll email you instructions to reset your password. If you dont have access to your email we can try account recovery"}
            </p>
          </div>
          <div className="flex flex-col mt-10 w-full h-full justify-between">
            <form onSubmit={handleSubmit} className="">
              <div className="gap-10 flex flex-col">
                {!emailSent && (
                  <div className="flex flex-col gap-3">
                    <label htmlFor="email" className="text-[14px]">
                      Email Address{" "}
                      <span className="text-[#EF476F] outline-none border-none">
                        *
                      </span>{" "}
                    </label>
                    <input
                      type="text"
                      id="email"
                      className="w-full bg-richblue-900 focus:bg-richblue-900 p-1 rounded-md border-b-2 border-b-richblack-500 text-[16px] py-3 px-3 flex items-center"
                      placeholder="Enter email address"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                )}

                {/* <CTAButton active={true}> */}
                <button
                  type="submit"
                  className="text-center text-[13px] px-6 py-3 rounded-md font-bold 
                 bg-yellow-50 text-black hover:scale-95 transition-all duration-200">
                  {emailSent ? "Resend Password" : "Reset Password"}
                </button>
                {/* </CTAButton> */}
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

export default ForgotPassword;
