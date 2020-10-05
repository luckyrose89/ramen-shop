import React from "react";

const CartItem = ({ item: { name, price, quantity, imageURL } }) => {
  return (
    <div className="w-full flex h-20 mb-4">
      <img className="w-1/3" src={imageURL} alt="item preview" />
      <div className="w-2/3 flex flex-col items-start px-4 hover:underline">
        <span className="text-sm">{name}</span>
        <span className="text-sm">
          {quantity} X {price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
