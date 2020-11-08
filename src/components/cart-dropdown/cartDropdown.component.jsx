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
    <div className="hidden absolute cart-dropdown  overflow-y-scroll w-64 z-10 py-4 px-4 shadow-2xl sm:flex sm:flex-col sm:items-center bg-white">
      <div className="flex flex-col">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="my-10">Your Cart is Empty!</span>
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
