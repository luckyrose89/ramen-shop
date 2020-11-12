import React from "react";

const CartUpdate = ({ currentCartItem }) => {
  return (
    <div className="fixed bottom-0 left-0 z-10 flex w-full h-auto shadow-xl sm:hidden">
      <h4>Item Added!</h4>
      <div>
        <div>
          <img src={currentCartItem.imageURL} alt="Cart item preview" />
        </div>
        <div>{currentCartItem.name}</div>
        <div>
          <span>{currentCartItem.price}</span>X
          <span>{currentCartItem.quantity}</span>
        </div>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default CartUpdate;
