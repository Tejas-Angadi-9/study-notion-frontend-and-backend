import React from "react";
import { useSelector } from "react-redux";
import Auth from "../components/common/Auth";

import signup from "../assets/Images/login.webp";

const Login = () => {
  const tokenData = useSelector((state) => state.auth.token);
  // TODO: Make the login & Signup. Be advised -> There are some common things. Make sure you use code reusability
  return (
    <div className="h-screen text-richblack-5 flex items-center justify-center text-8xl">
      <Auth
        heading={"Welcome Back"}
        subHeading={"Build skills for today, tomorrow, and beyond."}
        highlightext={" Education to future-proof your career."}
        image={signup}
        button={"Sign in"}
        type={"login"}
      />
    </div>

    // !Read about "Reference hook"
  );
};

export default Login;
