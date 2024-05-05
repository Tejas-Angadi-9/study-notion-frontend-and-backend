import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TbEdit } from "react-icons/tb";

import IconButton from "../../common/IconButton";

const MyProfile = () => {
  const { user } = useSelector((state) => state.profile);
  const navigate = useNavigate();

  return (
    <div className="w-[100%]">
      <h1 className="text-[30px] mt-10">My Profile</h1>

      <div className="w-[100%] flex flex-col justify-start h-fit gap-10 px-20 py-10">
        {/* Section 1 */}
        <div className="bg-richblue-800 border-[1px] border-richblack-400 rounded-md flex gap-10 p-10 justify-between">
          <div className="flex gap-20 items-center justify-center">
            <img
              src={user?.image}
              alt={`profile-${user?.firstName}`}
              className="aspect-square w-[78px] rounded-full object-cover"
            />
            <div>
              <p className="text-[18px]">
                {user?.firstName + " " + user?.lastName}
              </p>
              <p className="text-[14px] text-richblack-200">{user?.email}</p>
            </div>
          </div>

          <div className="bg-yellow-25 w-[100px] h-10 text-richblack-900 p-2 rounded-md font-semibold items-center justify-center hover:scale-x-95 transition-all duration-200 flex gap-2">
            <TbEdit />
            <IconButton
              text={"Edit"}
              onclick={() => {
                navigate("/dashboard/settings");
              }}
            />
          </div>
        </div>

        {/* Section 2 */}
        <div className="bg-richblue-800 border-[1px] border-richblack-400 rounded-md flex flex-col gap-10 p-10 justify-between">
          <div className="flex justify-between px-10 w-full">
            <h2 className="font-semibold text-[18px]">Personal Details</h2>
            <div className="bg-yellow-25 w-[100px] h-10 text-richblack-900 p-2 rounded-md font-semibold items-center justify-center hover:scale-x-95 transition-all duration-200 flex gap-2 cursor-pointer">
              <TbEdit />
              <IconButton
                text={"Edit"}
                onclick={() => {
                  navigate("/dashboard/settings");
                }}
              />
            </div>
          </div>
          <div className="flex flex-col gap-10 justify-between items-center py-4 text-[14px]">
            <div className="flex px-10 w-full -mt-6">
              <div className="flex flex-col w-[50%]">
                {/* First Name section */}
                <h3 className="text-richblack-400">First Name</h3>
                <p>{user?.firstName}</p>
              </div>
              <div className="flex flex-col w-[50%]">
                {/* last Name section */}
                <h3 className="text-richblack-400">Last Name</h3>
                <p>{user?.lastName}</p>
              </div>
            </div>
            <div className="flex px-10 w-full">
              {/* Email section */}
              <div className="flex flex-col w-[50%]">
                {/* First Name section */}
                <h3 className="text-richblack-400">Email</h3>
                <p>{user?.email}</p>
              </div>
              {/* Phone number section */}
              <div className="flex flex-col w-[50%]">
                {/* last Name section */}
                <h3 className="text-richblack-400">Phone Number</h3>
                <p>{user?.additionalDetails.phoneno}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex w-full justify-between px-10">
              <p className="font-semibold text-[18px]">About</p>
              <div className="bg-yellow-25 w-[100px] h-10 text-richblack-900 p-2 rounded-md font-semibold items-center justify-center hover:scale-x-95 transition-all duration-200 flex gap-2 cursor-pointer">
                <TbEdit />
                <IconButton
                  text={"Edit"}
                  onclick={() => {
                    navigate("/dashboard/settings");
                  }}
                />
              </div>
            </div>
            <div className="px-10 -mt-5">
              <p
                className={`${
                  user?.additionalDetails.about
                    ? "text-richblack-25"
                    : "text-richblack-300"
                }`}>
                {user?.additionalDetails.about
                  ? user?.additionalDetails.about
                  : "Write something about yourself"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
