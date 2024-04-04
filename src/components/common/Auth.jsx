import React, { useState } from "react";

import HighLighText from "../core/HomePage/HighLightText";
import LoginForm from "../core/Auth/LoginForm";
import SignupForm from "../core/Auth/SignupForm";
import frame from "../../assets/Images/frame.png";

const Auth = ({ heading, subHeading, highlightext, image, type }) => {
  const [role, setRole] = useState("student");

  function changeRole(value) {
    setRole(value);
  }
  console.log("Role: ", role);
  return (
    <div className="w-11/12 h-[100%] flex flex-row gap-[100px] justify-evenly">
      <div className="w-[50%] h-[80%] px-6 flex flex-col justify-evenly mb-10">
        <div className="mt-[200px] flex flex-col gap-5">
          {/* Heading */}
          <h2 className="text-[30px] text-richblack-25 w-[59%] font-semibold">
            {heading}
          </h2>
          {/* sub heading */}
          <p className="text-[20px] w-[70%] text-richblack-200">
            {subHeading}
            <span className="font-edu-sa text-[18px] mt-1 italic">
              <HighLighText text={`${highlightext}`} />
            </span>
          </p>
        </div>
        {/* Role picker  */}
        {type === "signup" && (
          <div className="border-2 border-richblack-700 w-[40%] h-fit my-8 flex text-[16px] justify-around p-1 rounded-full bg-richblack-800 gap-2">
            <div
              className={`w-[140px] rounded-full p-2 items-center text-center cursor-pointer ${
                role === "student" && "bg-richblack-900"
              } transition-all duration-200`}
              onClick={() => changeRole("student")}>
              Student
            </div>
            <div
              className={`w-[140px] rounded-full p-2 items-center text-center cursor-pointer ${
                role === "instructor" && "bg-richblack-900 "
              } transition-all duration-200`}
              onClick={() => changeRole("instructor")}>
              Instructor
            </div>
          </div>
        )}
        {/* Form with forget password */}
        <div>
          {type === "login" ? (
            <LoginForm role={role} />
          ) : (
            <SignupForm role={role} />
          )}
        </div>
      </div>

      <div className="w-[50%] h-[100%] px-6 flex flex-col items-center justify-center">
        <div className="w-fit h-fit relative">
          {/* Image */}
          <img
            src={image}
            alt=""
            className="absolute -top-5 -left-5"
            loading="lazy"
            draggable={false}
          />
          {/* Background grid/net image */}

          <img src={frame} alt={`frame.png`} loading="lazy" draggable={false} />
        </div>
      </div>
    </div>
  );
};

export default Auth;
