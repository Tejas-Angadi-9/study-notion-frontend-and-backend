import React from "react";

import Auth from "../components/common/Auth";
import signup from "../assets/Images/signup.webp";

const Signup = () => {
  return (
    <div className="h-screen text-richblack-5 flex items-center justify-center text-8xl">
      <Auth
        heading={"Join the millions learning to code with StudyNotion for free"}
        subHeading={"Build skills for today, tomorrow, and beyond."}
        highlightext={" Education to future-proof your career."}
        image={signup}
        button={"Create Account"}
        type={"signup"}
      />
    </div>
  );
};

export default Signup;
