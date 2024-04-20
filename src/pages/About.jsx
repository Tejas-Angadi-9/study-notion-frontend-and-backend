import React from "react";

import HighLightText from "../components/core/HomePage/HighLightText";
import Quote from "../components/core/AboutPage/Quote";
import BoxSection from "../components/core/AboutPage/BoxSection";
import Stats from "../components/core/AboutPage/Stats";
import LearningGrid from "../components/core/AboutPage/LearningGrid";
import ContactFormSection from "./ContactFormSection";

import Aboutus1 from "../assets/Images/aboutus1.webp";
import Aboutus2 from "../assets/Images/aboutus2.webp";
import Aboutus3 from "../assets/Images/aboutus3.webp";

import Footer from "../components/common/Footer";

const About = () => {
  return (
    <div className="h-full mt-[100px] text-white text-center">
      {/* Section 1 */}
      <section>
        <div className="flex flex-col gap-12">
          <header className="text-[36px] font-semibold w-fit">
            Driving Innovation in Online Education for a <br />
            <HighLightText text={"Brighter Future"} />
            <p className="text-[16px] text-richblack-300 mt-5">
              Studynotion is at the forefront of driving innovation in online
              education. We're passionate about creating a brighter future by
              offering cutting-edge courses, leveraging emerging technologies,
              and nurturing a vibrant learning community.
            </p>
          </header>
          <div className="flex gap-10 items-center justify-center mx-auto">
            <img src={Aboutus1} alt="aboutus1.png" />
            <img src={Aboutus2} alt="aboutus2.png" />
            <img src={Aboutus3} alt="aboutus3.png" />
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="mt-20 w-[60%] mx-auto">
        <div className="flex flex-col gap-12">
          <Quote />
        </div>
      </section>

      {/* Section 3 */}
      <section className="mt-20 mx-auto">
        <BoxSection />
      </section>

      {/* Section 4 */}
      <section className="w-screen -ml-[100px] h-[200px] bg-[#2C333F] flex items-center justify-center mt-10">
        <Stats />
      </section>

      {/* Section 5 */}
      <section className="flex flex-col gap-10">
        <LearningGrid />
        <ContactFormSection
          heading={"Get in Touch"}
          description={"We’d love to here for you, Please fill out this form."}
        />
      </section>

      {/* Section 6 */}
      {/* //TODO: Reviews section needs to be added */}
      <div className="mx-auto flex items-center justify-center text-2xl font-semibold m-5 text-[#e75555]">
        Reviews section coming soon....
      </div>
      <section className="mt-20">
        <Footer />
      </section>
    </div>
  );
};

export default About;
