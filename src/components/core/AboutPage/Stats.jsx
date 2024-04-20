import React from "react";

const statsData = [
  { count: "5K", label: "Active Students" },
  { count: "10+", label: "Mentors" },
  { count: "200+", label: "Courses" },
  { count: "50+", label: "Awards" },
];

const Stats = () => {
  return (
    <div>
      <div className="flex gap-20">
        {statsData.map((stat, index) => {
          return (
            <div key={index} className="font-inter">
              <h1 className="text-[30px] font-semibold text-richblack-5">
                {stat.count}
              </h1>
              <h2 className="text-[16px] text-richblack-100">{stat.label}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stats;
