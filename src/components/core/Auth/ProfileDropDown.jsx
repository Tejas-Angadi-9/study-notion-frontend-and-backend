import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../services/operations/authAPI";
import { useNavigate } from "react-router-dom";

const ProfileDropDown = () => {
  const { user } = useSelector((state) => state.profile);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // onClick={() => {
  //   dispatch(logout(navigate));
  // }}
  return (
    <div>
      <div className="relative w-10  duration-200 transition-all group">
        <img
          src={user?.image}
          alt={`${user?.firstName}.jpg`}
          className="rounded-full absolute top-1 cursor-pointer"
        />
        <div className="w-[250px] h-[120px] bg-richblack-700 absolute top-[3.5rem] -left-[5.5rem] rounded-md text-richblack-50 py-2 duration-200 transition-all opacity-0 group-hover:opacity-100 invisible group-hover:visible">
          <ul className="flex flex-col items-center justify-around p-3 gap-5 text-lg w-full">
            <li
              className="border-[1px] w-full flex items-center justify-center rounded-md cursor-pointer hover:scale-95 transition-all duration-200"
              onClick={() => navigate("/dashboard/my-profile")}>
              Dashboard
            </li>
            <li
              className="border-[1px] w-full flex items-center justify-center rounded-md cursor-pointer hover:scale-95 transition-all duration-200"
              onClick={() => {
                dispatch(logout(navigate));
              }}>
              Logout
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileDropDown;
