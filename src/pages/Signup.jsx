import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, resetCart } from "../slices/cartSlice";

import Auth from "../components/common/Auth";
import signup from "../assets/Images/signup.webp";

const Signup = () => {
  const token = useSelector((state) => state.auth.token);
  const items = useSelector((state) => state.cart.totalItems);
  const dispatch = useDispatch();
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
