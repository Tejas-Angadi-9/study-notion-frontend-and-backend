import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../services/operations/authAPI";
import { useNavigate } from "react-router-dom";

const ProfileDropDown = () => {
  const { user } = useSelector((state) => state.profile);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        dispatch(logout(navigate));
      }}>
      <div className="relative w-10 cursor-pointer">
        <img
          src={user?.image}
          alt={`${user?.firstName}.jpg`}
          className="rounded-full absolute top-1"
        />
      </div>
    </div>
  );
};

export default ProfileDropDown;
