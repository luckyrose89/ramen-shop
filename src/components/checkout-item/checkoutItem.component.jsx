import React from "react";
import { connect } from "react-redux";

import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from "../../redux/cart/cart.actions";

const CheckoutItem = ({ cartItem, addItem, removeItem, clearItem }) => {
  const { name, price, imageURL, quantity } = cartItem;
  return (
    <div className="flex w-full py-6 items-center text-center text-sm border-none sm:border-solid sm:border-gray-600 sm:border-b">
      <div className="w-1/5 px-2">
        <img className="w-full h-full" src={imageURL} alt="item preview" />
      </div>
      <span className="w-1/5 px-2">{name}</span>
      <span className="w-1/5 px-2">
        <button className="text-lg" onClick={() => removeItem(cartItem)}>
          &#10094;
        </button>
        <span className="px-2">{quantity}</span>
        <button className="text-lg" onClick={() => addItem(cartItem)}>
          &#10095;
        </button>
      </span>
      <span className="w-1/5 px-2">${price.toFixed(2)}</span>
      <button
        className="w-1/5 px-2 flex flex-col items-center"
        onClick={() => clearItem(cartItem)}
      >
        <svg
          className="h-6 w-6 fill-current text-gray-800"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItemToCart(item)),
  removeItem: (item) => dispatch(removeItemFromCart(item)),
  clearItem: (item) => dispatch(clearItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
