import React from "react";

import HighLightText from "../HomePage/HighLightText";
import CTAButton from "../HomePage/Button";

const LearningGridData = [
  {
    order: -1,
    heading: "World-Class Learning for ",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.",
    HighLightText: "Anyone, Anywhere",
    BtnText: "Learn More",
    BtnLink: "/",
  },
  {
    order: 1,
    heading: "Curriculum Based on Industry Needs",
    description:
      "Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.",
  },
  {
    order: 2,
    heading: "Our Learning Methods",
    description: "The learning process uses the namely online and offline.",
  },
  {
    order: 3,
    heading: "Certification",
    description:
      "You will get a certificate that can be used as a certification during job hunting.",
  },
  {
    order: 4,
    heading: "Rating\nAuto-grading",
    description:
      "Save time and moYou will immediately get feedback during the learning process without having to wait for an answer or response from the mentor.ney! The Belajar curriculum is made to be easier to understand and in line with industry needs.",
  },
  {
    order: 5,
    heading: "Ready to Work",
    description:
      "Connected with over 150+ hiring partners, you will have the opportunity to find a job after graduating from our program.",
  },
];

const LearningGrid = () => {
  return (
    <div className="grid mx-auto grid-col-1 lg:grid-cols-4 mb-10 w-11/12 mt-20">
      {LearningGridData.map((card, index) => (
        <div
          key={index}
          className={`p-10 ${index === 0 && "lg:col-span-2 lg:h-[300px]"}
                    ${
                      card.order % 2 === 1
                        ? "bg-richblack-700 lg:h-[300px]"
                        : "bg-richblack-900 lg:h-[300px]"
                    } 
                    ${card.order === 3 && "lg:col-start-2"} 
                 `} // if index is 0 ie order -1 then handle separately to stretch the data 2 cols
        >
          {card.order < 0 ? (
            <div className="lg:w-[90%] flex flex-col pb-5 gap-3">
              <h1 className="text-4xl font-semibold">
                {card.heading} <HighLightText text={card.HighLightText} />
              </h1>
              <p className="font-medium text-richblack-100">{card.description}</p>
              <div className="w-fit mt-4">
                <CTAButton active={true} linkto={card.BtnLink}>
                  {card.BtnText}
                </CTAButton>
              </div>
            </div>
          ) : (
            <div className="flex flex-col justify-between gap-10">
              <h1 className="text-[18px]">
                {card.heading} <HighLightText text={card.HighLightText} />
              </h1>
              <p className="text-[14px] text-richblack-100">{card.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default LearningGrid;
