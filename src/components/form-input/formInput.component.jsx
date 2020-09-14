import React from "react";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div>
      <input type="text" onChange={handleChange} {...otherProps} />
    </div>
  );
};

export default FormInput;
