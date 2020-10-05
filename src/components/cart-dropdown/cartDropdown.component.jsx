import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItems } from "../../redux/cart/cart.selectors";

import CartItem from "../cart-item/cartItem.component";

import "./cartDropdown.styles.scss";

const CartDropdown = ({ history, dispatch, cartItems }) => {
  return (
    <div className="absolute cart-dropdown w-64 z-10 px-4 shadow-lg flex flex-col items-center">
      <div className="flex flex-col overflow-y-scroll">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span>Your Cart is Empty!</span>
        )}
      </div>
      <button
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
        className=" w-40 h-12 p-2 mt-auto mb-4 bg-gray-700 text-white text-sm uppercase hover:bg-gray-500"
      >
        Go To Checkout
      </button>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
