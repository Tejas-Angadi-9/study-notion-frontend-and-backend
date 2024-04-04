import React from "react";
import { FaArrowRight } from "react-icons/fa";

import HighLightText from "./HighLightText";
import CTAButton from "./Button";
import instructorImage from "../../../assets/Images/Instructor.png";

const InstructorSection = () => {
  return (
    <div className="mt-10">
      <div className="flex flex-row gap-20 items-center ml-[20%]">
        {/* Left box */}
        <div className="w-fit">
          <img
            src={instructorImage}
            alt="instructorImage.png"
            className="rounded-md shadow-white"
          />
        </div>
        {/* Right box */}
        <div>
          {/* heading and subheading */}
          <div className="w-fit flex flex-col gap-10">
            <h2 className="text-4xl font-semibold w-[50%]">
              Become an <HighLightText text={"Instructor"} />
            </h2>
            <p className="font-medium text-[16px] w-[90%] text-richblack-300">
              Instructors from around the world teach millions of students on
              StudyNotion. We provide the tools and skills to teach what you
              love.
            </p>

            {/* button */}
            <div className="w-fit">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex flex-row gap-3 items-center mx-auto">
                  Start Teaching today
                  <FaArrowRight />
                </div>
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorSection;
