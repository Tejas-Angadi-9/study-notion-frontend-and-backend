import React from "react";

import Boxes from "../AboutPage/Boxes";
import FoundingStory from "../../../assets/Images/FoundingStory.png";

const BoxSection = () => {
  return (
    <div className="flex flex-col gap-12 px-20 py-10">
      <div className="flex gap-20">
        <Boxes
          type={"text"}
          heading={"Our Founding Story "}
          paragraph={`Our e-learning platform was born out of a shared vision and passion for transforming education. It all began with a group of educators, technologists, and lifelong learners who recognized the need for accessible, flexible, and high-quality learning opportunities in a rapidly evolving digital world. As experienced educators ourselves, we witnessed firsthand the limitations and challenges of traditional education systems. We believed that education should not be confined to the walls of a classroom or restricted by geographical boundaries. We envisioned a platform that could bridge these gaps and empower individuals from all walks of life to unlock their full potential.`}
          color={"text-[#FF5349]"}
        />

        <Boxes type={"img"} image={FoundingStory} />
      </div>
      <div className="flex gap-20 mt-20">
        <Boxes
          type={"text"}
          heading={"Our Vision "}
          paragraph={
            "With this vision in mind, we set out on a journey to create an e-learning platform that would revolutionize the way people learn. Our team of dedicated experts worked tirelessly to develop a robust and intuitive platform that combines cutting-edge technology with engaging content, fostering a dynamic and interactive learning experience."
          }
          color={"text-[#FFA500]"}
        />

        <Boxes
          type={"text"}
          heading={"Our Mission"}
          paragraph={
            "Our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities."
          }
          color={
            "font-bold bg-gradient-to-b from-blue-25 to-[#00FFFF]  text-transparent bg-clip-text shadow-2xl"
          }
        />
      </div>
    </div>
  );
};

export default BoxSection;
