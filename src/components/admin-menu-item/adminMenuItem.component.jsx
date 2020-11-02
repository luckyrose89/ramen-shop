import React from "react";

const AdminMenuItem = ({ item }) => {
  const { name, price, description, imageURL } = item;
  return (
    <div className="my-4 px-4 w-full overflow-hidden sm:w-1/2 md:w-1/3 lg:my-2 lg:px-2 shadow-lg ">
      <img
        className="w-full h-64 object-cover"
        src={imageURL}
        alt="Dish Preview"
      ></img>
      <div className="px-6 py-4">
        <div className="font-bold sm:text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <div className="font-bold sm:text-xl mb-2">${price.toFixed(2)}</div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="mr-4">Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default AdminMenuItem;
