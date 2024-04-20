import React from "react";

import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { BsGlobeAmericas } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";

const data = [
  {
    icon: <HiChatBubbleLeftRight size={"30px"} color="#AFB2BF" />,
    heading: "Chat on us",
    description: "Our friendly team is here to help.\n@mail address",
  },
  {
    icon: <BsGlobeAmericas size={"30px"} color="#AFB2BF" />,
    heading: "Visit us",
    description:
      "Come and say hello at our office HQ.\nHere is the location/ address",
  },
  {
    icon: <BsTelephoneFill size={"20px"} color="#AFB2BF" />,
    heading: "Call us",
    description: "Mon - Fri From 8am to 5pm\n+123 456 7890",
  },
];

const ContactLeftSection = () => {
  return (
    <div className="w-[450px] h-[400px] bg-richblack-800 flex flex-col items-start justify-between p-10 gap-10 rounded-[10px]">
      {data.map((el, index) => {
        return (
          <div key={index} className="w-[90%] h-[100px]">
            <div className="flex">
              {el.icon}
              <div className="ml-4 flex flex-col">
                <h3>{el.heading}</h3>
                <p className="text-richblack-100">{el.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ContactLeftSection;
