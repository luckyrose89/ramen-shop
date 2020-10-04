import React from "react";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import CartItem from "../cart-item/cartItem.component";

import "./cartDropdown.styles.scss";

const CartDropdown = ({ history, dispatch }) => {
  return (
    <div className="absolute cart-dropdown w-56 h-64 z-10 px-4 shadow-lg flex flex-col items-center">
      <CartItem />
      <button
        onClick={() => {
          history.push("/checkout");
        }}
        className=" w-40 h-12 p-2 bg-gray-700 text-white text-sm uppercase hover:bg-gray-500"
      >
        Go To Checkout
      </button>
    </div>
  );
};

export default withRouter(CartDropdown);
