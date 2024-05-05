import React from "react";

import { FaRegTrashCan } from "react-icons/fa6";

const DeleteAccount = () => {
  return (
    <div className="bg-[#340019] border-[1px] border-richblack-400 rounded-md flex gap-10 p-10 justify-between">
      <div className="flex items-start justify-center gap-10">
        <div className="bg-[#691432] w-[55px] h-[55px] flex items-center justify-center rounded-full text-[26px] text-[#EF476F] font-bold">
          <FaRegTrashCan />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-[18px] font-semibold">Delete Account</h2>
          <p className="text-[#FBC7D1]  text-[16px]">
            Would you like to delete account? <br />
            This account contains Paid Courses. Deleting your account will
            remove all the content associated with it.
          </p>

          <button className="text-[#D43D63] italic text-[16px] w-fit h-[50px] border-2 px-4 py-2 rounded-md mt-2 hover:scale-95 transition-all duration-200 hover:bg-[#691432]">
            I want to delete my account
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccount;
