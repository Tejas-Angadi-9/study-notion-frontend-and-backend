import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const OpenRoute = ({ children }) => {
  const token = useSelector((state) => state.auth.token);
  if (token) {
    return <div>{children}</div>;
  } else {
    return <Navigate to={"/dashboard/my-profile"} />;
  }
};

export default OpenRoute;
