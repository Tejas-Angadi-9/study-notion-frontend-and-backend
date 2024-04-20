import React from "react";

const Boxes = ({ type, heading, paragraph, image, color }) => {
  return (
    <div className="w-[60%]">
      {type === "text" ? (
        <div className="text-left">
          <h2 className={`${color} text-left text-[36px] font-bold`}>
            {heading}
          </h2>
          <p className="text-richblack-300 text-l">{paragraph}</p>
        </div>
      ) : (
        <div>
          <img src={image} alt="image" className="rounded-md" />
        </div>
      )}
    </div>
  );
};

export default Boxes;
