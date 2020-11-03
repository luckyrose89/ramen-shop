import React from "react";

const AdminMenuItem = ({ item, handleEditButton, handleDeleteButton }) => {
  const { name, price, description, imageURL } = item;
  return (
    <div className="my-4 px-4 w-full overflow-hidden sm:w-1/2 md:w-1/3 lg:my-2 lg:px-2">
      <div className="shadow-md">
        <img
          className="w-full h-64 object-cover"
          src={imageURL}
          alt="Dish Preview"
        ></img>
        <div className="px-6 py-4 h-40 sm:h-56">
          <div className="font-bold sm:text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-base">{description}</p>
          <div className="font-bold sm:text-xl mb-2">${price.toFixed(2)}</div>
        </div>
        <div className="px-6 pt-4 pb-4 mb-6">
          <button
            onClick={() => handleEditButton()}
            className="mr-4 px-2 py-1 bg-teal-500 text-white hover:bg-teal-700"
          >
            Edit
          </button>
          <button
            onClick={() => handleDeleteButton()}
            className="mr-4 px-2 py-1 bg-red-400 text-white hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminMenuItem;
