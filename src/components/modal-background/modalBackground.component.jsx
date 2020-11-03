import React from "react";

const ModalBackground = (props) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-30 bg-gray-500 px-5">
      {props.children}
    </div>
  );
};

export default ModalBackground;
