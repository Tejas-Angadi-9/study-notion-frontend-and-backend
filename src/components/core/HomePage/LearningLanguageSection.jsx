import React from "react";

import HighLightText from "../HomePage/HighLightText";
import CTAButton from "../HomePage/Button";
import know_your_progress from "../../../assets/Images/Know_your_progress.png";
import compare_with_others from "../../../assets/Images/Compare_with_others.png";
import plan_your_lesson from "../../../assets/Images/Plan_your_lessons.png";

const LearningLanguageSection = () => {
  return (
    <div className="mt-[80px]">
      <div className="flex gap-5 flex-col">
        {/* Heading */}
        <h2 className="text-4xl font-semibold text-center mt-[100px]">
          Your swiss knife for <HighLightText text={" learning any language"} />
        </h2>
        {/* Subheading */}
        <p className="mx-auto w-[40%] text-center text-richblack-600 text-base mt-3 font-medium">
          Using spin making learning multiple languages easy. with 20+ languages
          realistic voice-over, progress tracking, custom schedule and more.
        </p>

        {/* 3 Images */}
        <div className="flex flex-row items-center justify-center mt-5 translate-x-[1%]">
          <img
            src={know_your_progress}
            alt="know_your_progress.png"
            className="-mr-[6%]"
          />
          <img src={compare_with_others} alt="compare_with_others.png" />
          <img
            src={plan_your_lesson}
            alt="plan_your_lesson.png"
            className="-ml-[8%]"
          />
        </div>

        {/* Button */}
        <div className="w-fit mx-auto mb-32">
          <CTAButton active={true} linkto={"/signup"}>
            Learn More
          </CTAButton>
        </div>
      </div>
    </div>
  );
};

export default LearningLanguageSection;
