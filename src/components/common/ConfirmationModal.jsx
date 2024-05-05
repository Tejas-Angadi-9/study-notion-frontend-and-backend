import React from "react";

import IconButton from "./IconButton";

// This modal will get a heading, paragraph and 2 buttons. One to confirm and another to cancel
const ConfirmationModal = ({ modalData }) => {
  return (
    <div>
      {/* Text part */}
      <div>
        <p>{modalData.text1}</p>
        <p>{modalData.text2}</p>
        {/* Buttons */}
        <div className="flex gap-2">
          <button onclick={modalData.btn1Handler}>
            {modalData?.btn1Text}
          </button>
          <button onClick={modalData?.btn2Handler}>
            {modalData?.btn2Text}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
