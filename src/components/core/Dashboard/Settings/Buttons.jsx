import React from "react";
import { useNavigate } from "react-router-dom";

const Buttons = ({ text1, text2 }) => {
  const navigate = useNavigate();

  return (
    <div className="flex w-full justify-end gap-5">
      <button
        onClick={() => navigate("/dashboard/my-profile")}
        className={`text-center text-[14px] px-6 py-3 rounded-md font-bold 
    bg-richblack-700 border-[1px] border-richblack-900 text-richblack-25
    hover:scale-95 transition-all duration-200 flex items-center justify-center gap-2`}>
        {text1}
      </button>
      <button
        className={`text-center text-[14px] px-6 py-3 rounded-md font-bold 
    bg-yellow-25 border-[1px] border-richblack-900 text-richblack-900
    hover:scale-95 transition-all duration-200 flex items-center justify-center gap-2`}>
        {text2}
      </button>
    </div>
  );
};

export default Buttons;
