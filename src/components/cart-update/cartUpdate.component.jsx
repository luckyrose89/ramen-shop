import React from "react";

const CartUpdate = ({ currentCartItem }) => {
  return (
    <div className="fixed bottom-0 left-0 z-10 flex w-full h-auto shadow-xl sm:hidden">
      <div>
        <img src={currentCartItem.imageURL} alt="Cart item preview" />
      </div>
      <span className="w-1/5 px-2">{currentCartItem.name}</span>
    </div>
  );
};

export default CartUpdate;
