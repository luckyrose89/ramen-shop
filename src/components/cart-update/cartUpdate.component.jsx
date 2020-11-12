import React from "react";
import { withRouter } from "react-router-dom";

const CartUpdate = ({ currentCartItem, history }) => {
  return (
    <div className="fixed bottom-0 left-0 z-10 flex w-full h-auto bg-gray-200 shadow-xl sm:hidden">
      <div className="flex items-center">
        <div className="w-1/4">
          <img src={currentCartItem.imageURL} alt="Cart item preview" />
        </div>
        <div className="w-1/3 px-2 text-sm">{currentCartItem.name}</div>
        <div className="w-1/3">
          <span>${currentCartItem.price.toFixed(2)} </span>X
          <span> {currentCartItem.quantity}</span>
        </div>
        <button
          onClick={() => {
            history.push("/checkout");
          }}
          className="mr-4 px-2 py-1 bg-red-600 text-white hover:bg-red-800"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default withRouter(CartUpdate);
