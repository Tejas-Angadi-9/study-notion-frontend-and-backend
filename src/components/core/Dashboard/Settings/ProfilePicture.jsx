import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FiUpload } from "react-icons/fi";

const ProfilePicture = () => {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.profile);

  const [selectedImage, setSelectedImage] = useState(user?.image);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  console.log("Selected Image: ", selectedImage);

  return (
    <div className="bg-richblue-800 border-[1px] border-richblack-400 rounded-md flex gap-10 p-10 justify-between">
      <div className="flex items-center justify-center gap-10">
        <img
          src={selectedImage}
          alt=""
          width={100}
          height={100}
          className="rounded-md"
        />
        <div>
          <p>Change Profile Picture</p>
          <div className="flex gap-3 mt-2">
            {/* Use a button element instead of an input element */}
            <label
              htmlFor="fileInput"
              className={`text-center text-[13px] px-6 py-3 rounded-md font-bold 
              bg-richblack-800 border-[1px] border-richblack-900
              hover:scale-95 transition-all duration-200`}>
              Select
            </label>
            <input
              type="file"
              id="fileInput"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />

            <button
              className={`text-center text-[13px] px-6 py-3 rounded-md font-bold 
        bg-yellow-25 border-[1px] border-richblack-900 text-richblack-900
        hover:scale-95 transition-all duration-200 flex items-center justify-center gap-2`}>
              Upload
              <FiUpload className="text-[18px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePicture;
