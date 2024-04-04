import React from "react";
import CTAButton from "../components/core/HomePage/Button";

// const navigate = useNavigate();

// const goBack = () => {
//   navigate(-1);
// };
const NotFound = () => {
  return (
    <div className="h-screen text-richblack-5 flex items-center justify-center text-8xl">
      <div className="flex flex-col">
        Page Not Found :(
        <button className="w-fit mt-20 mx-auto">
          <CTAButton active linkto={"/"}>
            Go Back to home page
          </CTAButton>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
