import React from "react";

const MenuItem = ({ name, price, description, imageURL }) => {
  return (
    <div className="flex justify-between md:w-2/3 mb-8 sm:mb-4 py-2 sm:py-0 cursor-pointer">
      <div className="px-3 py-2 w-2/3">
        <h4 className="pb-2">{name}</h4>
        <div className="text-xs md:text-base pb-2">${price.toFixed(2)}</div>
        <p className="text-xs md:text-base text-gray-700 pb-4">{description}</p>
        <button className="hidden sm:block px-3 py-2 bg-green-600 hover:bg-green-800 text-white rounded-lg text-sm focus:outline-none border-2 focus:border-green-900">
          Add
        </button>
      </div>
      <div
        className="relative w-24 h-24 sm:w-48 sm:h-auto bg-cover self-center sm:self-auto"
        style={{ backgroundImage: `url(${imageURL})` }}
      >
        <button className="absolute sm:hidden px-3 py-2 bg-green-600 hover:bg-green-800 text-white text-sm focus:outline-none">
          Add
        </button>
      </div>
    </div>
  );
};

export default MenuItem;
