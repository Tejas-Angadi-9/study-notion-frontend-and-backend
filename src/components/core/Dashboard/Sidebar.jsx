import React, { useState } from "react";

import { sidebarLinks } from "../../../data/dashboard-links";
import { logout } from "../../../services/operations/authAPI";
import { useDispatch, useSelector } from "react-redux";
import { VscSignOut } from "react-icons/vsc";

import SidebarLinks from "./SidebarLinks";
import { useNavigate } from "react-router-dom";
import ConfirmationModal from "../../common/ConfirmationModal";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [confirmationModal, setConfirmationModal] = useState(null);

  // Getting all the required data
  const { user, loading: profileLoading } = useSelector(
    (state) => state.profile,
  );
  const { loading: authLoading } = useSelector((state) => state.auth);

  // show the loading.... when any one of the loading is true
  if (profileLoading || authLoading) {
    return <div className="mt-10">Loading...</div>;
  }
  console.log("User data: ", user);

  return (
    <div>
      <div className="flex min-w-[222px] gap-3 flex-col border-r-[1px] border-r-richblack-700 h-[calc(100vh-3.5rem)] bg-richblack-800 py-10 relative pl-5 text-richblack-100">
        <SidebarLinks
          link={{
            name: sidebarLinks[0].name,
            path: sidebarLinks[0].path,
          }}
          iconName={sidebarLinks[0].icon}
        />
        {sidebarLinks.map((link) => {
          if (link.type && user?.accountType == link?.type)
            return (
              <>
                <SidebarLinks key={link.id} link={link} iconName={link.icon} />
              </>
            );
        })}

        {/* Creating horizontal line */}
        <div className="mx-auto mt-6 mb-6 h-[1px] w-10/12 bg-richblack-600"></div>

        {/* Creating 2 links for settings and logout */}
        <div className="flex flex-col gap-3">
          <SidebarLinks
            link={{ name: "Settings", path: "dashboard/settings" }}
            iconName="VscSettingsGear"
          />

          <button
            onClick={() =>
              setConfirmationModal({
                text1: "Are you sure?",
                text2: "You will be logged out from the application",
                btn1Text: "Logout",
                btn2Text: "Cancel",
                btn1Handler: () => dispatch(logout(navigate)),
                btn2Handler: () => setConfirmationModal(null), // this makes the modal to close
              })
            }>
            <div className="flex items-center gap-x-2 ml-3.5">
              <VscSignOut className="text-lg" />
              <span>Logout</span>
            </div>
          </button>
        </div>
        {confirmationModal && (
          <ConfirmationModal modalData={confirmationModal} />
        )}
      </div>
    </div>
  );
};

export default Sidebar;
