import React from "react";

import ContactUsForm from "../components/common/ConatactPage/ContactUsForm";

const ContactFormSection = ({ heading, description }) => {
  return (
    <div className="mx-auto flex flex-col items-start">
      <h1 className="text-[36px] font-semibold">{heading}</h1>
      <p className="text-[16px] text-richblack-100">
        We’d love to here for you, Please fill out this form.
      </p>
      <ContactUsForm />
    </div>
  );
};

export default ContactFormSection;
