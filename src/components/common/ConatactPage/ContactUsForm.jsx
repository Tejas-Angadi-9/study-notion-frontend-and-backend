import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
// import { apiConnector } from "../../../services/apiconnector";

const ContactUsForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const submitContactForm = async (data) => {
    console.log("Logging Data: ", data);
    try {
      setLoading(true);
      // const response = await apiConnector("POST", contactusEndpoint.CONTACT_US_API, data);
      const response = { status: "OK", data };
      console.log("Logging response: ", response);
      setLoading(false);
    } catch (err) {
      console.log("Error: ", err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        firstname: "",
        lastname: "",
        email: "",
        message: "",
      });
    }
  }, [reset, isSubmitSuccessful]);

  return (
    <form onSubmit={handleSubmit(submitContactForm)}>
      <div className="flex flex-col gap-10 items-center mx-auto mt-10">
        <div className="flex flex-col gap-5 items-start justify-center text-start">
          <div className="flex gap-10">
            {/* First name */}
            <div className="flex flex-col w-fit">
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="Enter first name"
                className="w-full bg-richblue-900 focus:bg-richblue-900 p-1 rounded-md border-b-2 border-b-richblack-500 text-[16px] py-3 px-3 flex items-center"
                {...register("firstname", { required: true })}
              />
              {errors.firstname && (
                <span style={{ color: "#D9544D" }} className="mt-2">
                  Please enter your firstname
                </span>
              )}
            </div>
            {/* Last name */}
            <div className="flex flex-col w-fit">
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Enter last name"
                className="w-full bg-richblue-900 focus:bg-richblue-900 p-1 rounded-md border-b-2 border-b-richblack-500 text-[16px] py-3 px-3 flex items-center"
                {...register("lastname", { required: true })}
              />
              {errors.lastname && (
                <span style={{ color: "#D9544D" }} className="mt-2">
                  Please enter your lastname
                </span>
              )}
            </div>
          </div>
          {/* Email */}
          <div className="flex flex-col w-full">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              className="w-full bg-richblue-900 focus:bg-richblue-900 p-1 rounded-md border-b-2 border-b-richblack-500 text-[16px] py-3 px-3 flex items-center"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span style={{ color: "#D9544D" }} className="mt-2">
                Please enter your email
              </span>
            )}
          </div>
          {/* Message */}
          <div className="flex flex-col w-full">
            <label htmlFor="message">Message</label>
            <textarea
              type="text"
              rows={7}
              name="message"
              id="message"
              style={{ resize: "none" }}
              placeholder="Enter the message"
              className="w-full bg-richblue-900 focus:bg-richblue-900 p-1 rounded-md border-b-2 border-b-richblack-500 text-[16px] py-3 px-3 flex items-center"
              {...register("message", { required: true })}
            />
            {errors.message && (
              <span style={{ color: "#D9544D" }} className="mt-2">
                Please enter the message
              </span>
            )}
          </div>
        </div>
        <button
          className="rounded-md bg-yellow-50 text-center px-6 py-2 text-[16px] text-richblack-900 font-semibold w-full flex items-center justify-center"
          type="submit">
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactUsForm;
