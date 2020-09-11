import React from "react";

import "./menuItem.styles.scss";

const MenuItem = ({ name, price, description, imageURL }) => {
  return (
    <div className="menugrid border-2 border-gray-600 mr-4 mb-4 rounded-md overflow-hidden cursor-pointer">
      <div
        className="w-full h-48 bg-cover bg-no-repeat bg-top"
        style={{ backgroundImage: `url(${imageURL})` }}
      ></div>
      <div className="px-6 py-4 text-center">
        <h4>{name}</h4>
        <p>{description}</p>
        <div>${price.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default MenuItem;
