import React, { useState } from "react";
import HighLightText from "../HomePage/HighLightText";
import CourseCard from "../HomePage/CourseCard";
import { HomePageExplore } from "../../../data/homepage-explore";

// Storing the data in an array -> Settign these as keys to the courses data

// console.log(HomePageExplore[0].courses);
const courses = HomePageExplore[0].courses;

const ExploreMore = () => {
  return (
    <div className="h-[350px] w-full relative">
      <div>
        <div className="text-4xl font-semibold text-center">
          Unlock the <HighLightText text={"Power of code"} />
        </div>

        <p className="text-center text-richblack-300 text-lg font-semibold mt-3">
          Learn to build Anything You Can Imagine
        </p>
      </div>
      {/* Course card */}
      <div className="w-full top-[30%] absolute h-full flex mx-auto items-center justify-between px-5">
        {courses.map((course, index) => (
          <div key={index} className="mt-12">
            <CourseCard courseData={course} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreMore;
