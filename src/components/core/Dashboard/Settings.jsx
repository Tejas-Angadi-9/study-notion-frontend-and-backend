import React from "react";
import { useSelector } from "react-redux";

import ProfilePicture from "./Settings/ProfilePicture";
import Information from "./Settings/Information";
import Buttons from "./Settings/Buttons";
import ChangePasswords from "./Settings/ChangePasswords";
import DeleteAccount from "./Settings/DeleteAccount";

const Settings = () => {
  return (
    <div className="w-[100%] flex flex-col justify-start h-fit gap-10 px-20 py-10">
      <div className="w-[100%]">
        <h1 className="text-[30px] mt-10">Edit Profile</h1>

        <div className="w-11/12 flex flex-col gap-10 mt-5">
          {/* 3 sections */}
          {/* Section 1 -> Change the profile pic */}
          <ProfilePicture />
          {/* Section 2 -> Change the profile information */}
          <Information />
          <Buttons text1={"Cancel"} text2={"Save"} />
          {/* Section 3 -> Change the password */}
          <ChangePasswords />
          <Buttons text1={"Cancel"} text2={"Update"} />
          {/* Section 4 -> Delete Account */}
          <DeleteAccount />
        </div>
      </div>
    </div>
  );
};

export default Settings;
