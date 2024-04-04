import React from "react";
import Union from "../../../assets/Images/Union.png";
import Vector from "../../../assets/Images/Vector.png";

const CourseCard = ({ courseData }) => {
  return (
    <div className="w-[341px] h-[300px] text-richblack-25 bg-richblue-900 p-5 cursor-pointer rounded-md hover:bg-white transition-all duration-300 hover:  hover:shadow-yellow-25 hover:text-black shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]">
      <div className="flex flex-col gap-4">
        <h2 className="text-[20px] font-semibold items-start">
          {courseData.heading}
        </h2>
        <p className="text-[16px] font-base items-start">
          {courseData.description}
        </p>
        <div className="mt-14 h-fit border-t-2 border-dotted flex items-center flex-row justify-between hover:text-[#0A5A72]">
          <div className="flex flex-row mt-2 items-center gap-2  font-inter">
            <img src={Union} alt="" width={"25px"} />
            <p>{courseData.level}</p>
          </div>
          <div className="flex flex-row mt-2 items-center gap-2 justify-center">
            <img src={Vector} alt="" width={"25px"} />
            {courseData.lessionNumber} Lessons
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
