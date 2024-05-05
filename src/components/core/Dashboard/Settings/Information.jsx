import React, { useState } from "react";
import { useSelector } from "react-redux";

const Information = () => {
  const { user } = useSelector((state) => state.profile);

  const [genderOption, setGenderOption] = useState(
    user?.additionalDetails.gender,
  );

  const handleGenderSelection = (e) => {};

  return (
    <div className="bg-richblue-800 border-[1px] border-richblack-400 rounded-md flex gap-10 p-10 justify-between">
      <div className="flex flex-col justify-center gap-10 w-full">
        <h3 className="font-semibold text-[20px]">Profile Information</h3>
        <form className="flex flex-col items-start gap-3">
          <div className="flex w-full gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="firstname" className="text-[14px]">
                First Name{" "}
              </label>
              <input
                type="text"
                id="firstname"
                value={user?.firstName}
                name="firstName"
                className="w-full bg-richblue-900 focus:bg-richblue-900 p-1 rounded-md border-b-2 border-b-richblack-500 text-[16px] py-3 px-3 flex items-center"
                placeholder="Enter first name"
                required
              />
            </div>
            <div className="flex flex-col  gap-2">
              <label htmlFor="lastname" className="text-[14px]">
                Last Name{" "}
              </label>
              <input
                type="text"
                id="lastname"
                value={user?.lastName}
                name="lastName"
                className="w-full bg-richblue-900 focus:bg-richblue-900 p-1 rounded-md border-b-2 border-b-richblack-500 text-[16px] py-3 px-3 flex items-center"
                placeholder="Enter last name"
                required
              />
            </div>
          </div>
          <div className="flex">
            <div>
              <label htmlFor="dateOfBirth" className="text-[14px]">
                Date of Birth{" "}
              </label>
              <input
                type="date"
                id="dateOfBirth"
                value={user?.additionalDetails.dob}
                className="w-[93%] bg-richblue-900 focus:bg-richblue-900 p-1 rounded-md border-b-2 border-b-richblack-500 text-[16px] py-3 px-3 flex items-center"
                placeholder="Enter the date of birth"
                required
              />
            </div>
            <div>
              <label htmlFor="gender" className="text-[14px]">
                Gender{" "}
              </label>
              <select
                value={genderOption}
                onChange={handleGenderSelection}
                type="dropdown"
                id="gender"
                name="phoneNumber"
                className="w-[93%] bg-richblue-900 focus:bg-richblue-900 p-1 rounded-md border-b-2 border-b-richblack-500 text-[16px] py-3 px-3 flex items-center"
                placeholder="Enter phone number"
                required>
                <option value={genderOption}>{genderOption}</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
            </div>
          </div>
          <div className="flex w-full gap-5">
            <div>
              <label htmlFor="phoneno" className="text-[14px]">
                Phone Number{" "}
              </label>
              <div className="relative w-full mt-2">
                <input
                  id="phoneno"
                  name="phoneno"
                  className="w-full bg-richblue-900 focus:bg-richblue-900 p-1 rounded-md border-b-2 border-b-richblack-500 text-[16px] py-3 px-3 flex items-center"
                  placeholder="Enter phoneno"
                  value={user?.additionalDetails.phoneno}
                />
              </div>
            </div>
            <div>
              <label htmlFor="about" className="text-[14px]">
                About{" "}
              </label>
              <div className="relative w-full  mt-2">
                <input
                  id="about"
                  name="about"
                  className="w-full bg-richblue-900 focus:bg-richblue-900 p-1 rounded-md border-b-2 border-b-richblack-500 text-[16px] py-3 px-3 flex items-center"
                  placeholder="Enter Bio Details"
                  value={user?.additionalDetails.about}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Information;
