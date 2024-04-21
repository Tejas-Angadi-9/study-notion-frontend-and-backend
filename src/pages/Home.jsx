import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "../App.css";

import HighLightText from "../components/core/HomePage/HighLightText";
import CTAButton from "../components/core/HomePage/Button";
import InstructorSection from "../components/core/HomePage/InstructorSection";
import banner from "../assets/Images/banner.mp4";
import CodeBlocks from "../components/core/HomePage/CodeBlocks";
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection";
import TimeLineSection from "../components/core/HomePage/TimeLineSection";
import Footer from "../components/common/Footer";
import ExploreMore from "../components/core/HomePage/ExploreMore";
import { useSelector } from "react-redux";

const Home = () => {
  const token = useSelector((state) => state.auth.token);
  const userData = useSelector((state) => state.profile.user);

  console.log("userData: ", userData);
  console.log("Token: ", token);
  return (
    <div>
      {/* //* Section 1 */}
      <div className="relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center text-white justify-between">
        {/* Section 1 button */}
        <Link to={"/signup"}>
          <div className="group mt-12 p-3 mx-auto rounded-full bg-richblue-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95 w-fit ">
            <div className="flex flex-row items-center justify-center gap-2 rounded-full px-10 py-[5px]">
              <p>Become an instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        {/* Heading text */}
        <div className="text-center text-4xl font-semibold mt-7">
          Empower Your future with <HighLightText text={"Coding Skills"} />
        </div>
        <div className="mt-4 w-[90%] text-center text-lg font-bold text-richblack-500">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div>

        {/* Yellow & Black Buttons */}
        <div className="flex flex-row gap-7 mt-8">
          <CTAButton active={true} linkto={"/signup"}>
            Learn More
          </CTAButton>
          <CTAButton linkto={"/signup"}>Book a Demo</CTAButton>
        </div>

        {/* Video section  */}
        <div className="mx-3 my-11 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] shadow-cyan-500/50 overflow-x-hidden w-10/12">
          <video
            loop
            muted
            autoPlay
            typeof="video/mp4"
            className="rounded-all"
            onContextMenu={(e) => e.preventDefault()}>
            <source src={banner} type="video/mp4" />
          </video>
        </div>

        {/* Code Section */}
        <div>
          {/* Code Section 1 */}
          <CodeBlocks
            position={"flex-row"}
            heading={
              <div className="text-4xl font-semibold">
                Unlock your <HighLightText text="coding courses" /> with our
                online courses
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              active: true,
              btnText: "Try it yourself",
              linkto: "/signup",
            }}
            ctabtn2={{
              active: false,
              btnText: "Learn more",
              linkto: "/login",
            }}
            codeblock={`<!DOCTYPE html>\n<html>\n<head><title>Example</title><linkrel="stylesheet"href="styles.css">\n</head>\n<body>\n<h1><ahref="/">Header</a>\n</h1>\n<nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>\n</nav>
            `}
            codeColor={"text-yellow-25"}
            gradiantColor={"blue"}
          />

          {/* Code Section 2 */}
          <CodeBlocks
            position={"flex-row-reverse"}
            heading={
              <div className="text-4xl font-semibold">
                Start <HighLightText text="coding courses" /> coding in seconds
              </div>
            }
            subheading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctabtn1={{
              active: true,
              btnText: "Continue Lesson",
              linkto: "/signup",
            }}
            ctabtn2={{
              active: false,
              btnText: "Learn more",
              linkto: "/login",
            }}
            codeblock={`<!DOCTYPE html>\n<html>\n<head><title>Example</title><linkrel="stylesheet"href="styles.css">\n</head>\n<body>\n<h1><ahref="/">Header</a>\n</h1>\n<nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>\n</nav>
            `}
            codeColor={"text-caribbeangreen-25"}
            gradiantColor={"pink"}
          />
        </div>
        <ExploreMore />
      </div>
      {/*//* Section 2 */}
      <div className="bg-pure-greys-5 text-richblack-700">
        <div className="homepage_bg h-[310px]">
          <div className="w-11/12 max-w-maxContent flex flex-col items-center justify-center gap-5 mx-auto">
            <div className="h-[160px] mb-10"></div>
            <div className="flex flex-row gap-7 text-white mx-auto">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex flex-row gap-3 items-center">
                  Explore Full Catalog
                  <FaArrowRight />
                </div>
              </CTAButton>
              <CTAButton active={false} linkto={"/signup"}>
                <div className="flex gap-3 items-center">Learn more</div>
              </CTAButton>
            </div>
          </div>
        </div>

        <div className="w-11/12 mx-auto max-w-maxContent flex flex-col items-center -mt-18">
          <div className="flex flex-row gap-5 mb-10 mt-[150px]">
            <div className="text-4xl font-semibold w-[45%]">
              Get the skills you need for a{" "}
              <HighLightText text={"Job that is in demand"} />
            </div>
            <div className="flex flex-col gap-10 w-[40%] items-start">
              <div className="text-[16px]">
                The modern StudyNotion is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.
              </div>
              <CTAButton active={true} linkto={"/signup"}>
                <div>Learn more</div>
              </CTAButton>
            </div>
          </div>
        </div>

        <TimeLineSection />
        <LearningLanguageSection />
      </div>
      {/* //* Section 3 -> This has 2 boxes (Become an instructor & reviews section )*/}
      <div className="11/12 mx-auto max-w-c ontent flex flex-col items-center bg-richblack-900 text-white gap-8">
        <InstructorSection />
        {/* <Reviews /> */}
        <h2 className="text-center text-4xl font-semibold mt-10">
          Review from other learners
        </h2>
        {/* Review slider here */}
      </div>

      {/*//* Section 4 */}
      <Footer />
    </div>
  );
};

export default Home;
