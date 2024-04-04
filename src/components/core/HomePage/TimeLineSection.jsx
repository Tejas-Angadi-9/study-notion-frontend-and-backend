import React from "react";

import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg";
import timeLineImage from "../../../assets/Images/TimelineImage.png";

const timeLineData = [
  {
    logo: Logo1,
    heading: "Leadership",
    description: "Fully committed to the success company",
  },
  {
    logo: Logo2,
    heading: "Responsibility",
    description: "Students will always be our top priority",
  },
  {
    logo: Logo3,
    heading: "Flexibility",
    description: "The ability to switch is an important skills",
  },
  {
    logo: Logo4,
    heading: "Solve the problem",
    description: "Code your way to a solution",
  },
];

const TimeLineSection = () => {
  return (
    <div className="mb-10 flex">
      {/* Outer box */}
      <div className="flex justify-between flex-row gap-15 items-center w-11/12 max-w-maxContent mx-auto">
        {/* Left box */}
        <div className="w-[45%] flex flex-col gap-5">
          {/* 4 items with 3 components */}
          {timeLineData.map((element, index) => {
            return (
              <div key={index} className="flex flex-col gap-6">
                <div className="w-[50px] h-[50px] bg-white rounded-full justify-center flex items-center">
                  <img src={element.logo} alt={element.heading} />
                </div>
                <div>
                  <h2>{element.heading}</h2>
                  <p>{element.description}</p>
                </div>
              </div>
            );
          })}
          {/* //TODO: Create dotted lines */}
        </div>
        {/* Right Part */}
        <div className="relative shadow-2xl">
          <img
            src={timeLineImage}
            alt="timelineImage.png"
            className="shadow-white object-cover h-fit rounded-md"
            draggable={false}
          />
          {/* Overlapping green part */}
          <div className="absolute bg-caribbeangreen-700 flex flex-row text-white uppercase py-8 left-[10%] -translate-y-[50%] rounded-md shadow-2xl">
            {/* 2 boxes */}
            <div className="flex items-center gap-5 border-r border-x-caribbeangreen-300 px-7">
              <h1 className="text-3xl font-bold">10</h1>
              <h2 className="text-caribbeangreen-300 text-sm">
                Years of Experience
              </h2>
            </div>
            <div className="flex items-center gap-5 px-7">
              <h1 className="text-3xl font-bold">250</h1>
              <h2 className="text-caribbeangreen-300 text-sm">
                Types of courses
              </h2>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLineSection;
