import React from "react";

const FormInputTwo = ({ handleChange, label, value, ...otherProps }) => {
  return (
    <div className="my-2 flex flex-col">
      <label className="px-1 text-sm text-gray-900 font-bold">{label}</label>
      <input
        type="text"
        onChange={handleChange}
        value={value}
        {...otherProps}
        className="py-1 px-1 w-full border-solid border-b border-gray-500"
        required
      ></input>
    </div>
  );
};

export default FormInputTwo;
