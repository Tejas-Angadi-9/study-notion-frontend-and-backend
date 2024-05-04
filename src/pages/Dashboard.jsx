import React from "react";
import { useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";

import Sidebar from "../components/core/Dashboard/Sidebar";
import MyProfile from "../components/core/Dashboard/MyProfile";

const Dashboard = () => {
  const location = useLocation();
  const currentURL = location.pathname;
  console.log("Current URL: ", currentURL);
  const { loading: authLoading } = useSelector((state) => state.auth);
  const { loading: profileLoading } = useSelector((state) => state.auth);

  if (profileLoading || authLoading) {
    return <div className="mt-10">Loading...</div>;
  }

  return (
    <div className="relative flex min-h-[calc(100vh-3.5rem)] text-white">
      <Sidebar />
      <div className="h-[calc(100vh-3.5rem)] overflow-auto">
        <div className="mx-auto w-11/12 max-w-[100px] py-10">
          <Outlet />
        </div>
        {/* {currentURL === "/dashboard/my-profile" && <MyProfile />} */}
      </div>
    </div>
  );
};

export default Dashboard;
