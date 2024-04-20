import React from "react";

import HighLightText from "../HomePage/HighLightText";

const Quote = () => {
  return (
    <div className="text-richblack-50 text-[26px] font-semibold">
      "We are passionate about revolutionizing the way we learn. Our innovative
      platform
      <HighLightText text={" combines technology"} />,
      <span className="text-[#FFA500] font-semibold"> expertise</span>, and
      community to crate an{" "}
      <span className="text-[#eecc5b] font-semibold">
        unparalleled educational experience
      </span>
      "
    </div>
  );
};

export default Quote;
