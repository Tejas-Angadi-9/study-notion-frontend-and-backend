import React from "react";

import ContactLeftSection from "../components/core/ContactUsPage/ContactLeftSection";
import ContactFormSection from "./ContactFormSection";
import Footer from "../components/common/Footer";

const ContactUs = () => {
  return (
    <div className="h-full mx-auto w-full text-white mt-14">
      <div className="flex flex-col gap-10 mt-7 px-[5.2rem] lg:flex-row w-11/12 mx-auto mb-16">
        {/* Left section */}
        <div className="w-[50%]">
          <ContactLeftSection />
        </div>
        {/* Right section  */}
        <div className="w-[50%] -mt-6">
          <ContactFormSection
            heading={"Got a Idea? We’ve got the skills. Let’s team up"}
            description={
              "Tall us more about yourself and what you’re got in mind."
            }
          />
        </div>
      </div>
      <div className="mx-auto flex items-center justify-center text-2xl font-semibold m-5 text-[#e75555]">
        Reviews section coming soon....
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
