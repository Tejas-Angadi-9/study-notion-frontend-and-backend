import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../services/operations/authAPI";

import { IoMdArrowDropdown } from "react-icons/io";

const ProfileDropDown = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.profile);
  console.log("User from profile dropdown: ", user);
  return (
    <div className="flex items-center justify-center gap-2 text-richblack-100">
      <div className="relative">
        <Link
          to={"/dashboard/my-profile"}
          className="flex items-center justify-center text-[22px] gap-2 group">
          <img
            src={user?.image}
            alt="user.jpg"
            className="w-[35px] rounded-full text-richblack-100"
          />
          <IoMdArrowDropdown />
          <div className="invisible absolute top-6 left-[50%] translate-x-[-50%] translate-y-[22%] flex flex-col rounded-md bg-richblack-800 p-4 text-richblack-25 transition-all duration-200 group-hover:visible group-hover:opacity-100 lg:w-[200px] z-10 text-lg">
            <Link to={"/dashboard/my-profile"}>
              <h3 className="w-full h-fit p-1 rounded-md hover:bg-richblack-500 hover:text-richblack-25 cursor-pointer">
                Dashboard
              </h3>
            </Link>
            <Link to={"/"}>
              <h3
                className="w-full h-fit p-1 rounded-md hover:bg-richblack-500 hover:text-richblack-25 cursor-pointer"
                onClick={() => dispatch(logout(navigate))}>
                Logout
              </h3>
            </Link>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProfileDropDown;
