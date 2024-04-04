import React from "react";

const HighLightText = ({ text }) => {
  return (
    <span className="font-bold bg-gradient-to-b from-blue-25 to-[#00FFFF]  text-transparent bg-clip-text shadow-2xl">
      {text}
    </span>
  );
};

export default HighLightText;
