import React from "react";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm sm:text-base font-bold mb-2">
        {label}
      </label>
      <input
        type="text"
        onChange={handleChange}
        {...otherProps}
        className="shadow appearance-none border py-2 px-3 w-full"
      />
    </div>
  );
};

export default FormInput;
