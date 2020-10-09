import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import CheckoutItem from "../../components/checkout-item/checkoutItem.component";

const CheckoutPage = ({ cartItems, total }) => {
  return (
    <div className="px-5 py-5 mt-10 mb-32 max-w-3xl mx-auto">
      <h1 className="text-center sm:text-2xl uppercase text-gray-800 my-10">
        Checkout
      </h1>
      <div className="hidden sm:flex text-center my-5">
        <div className="w-1/5 px-2">
          <span>Product</span>
        </div>
        <div className="w-1/5 px-2">
          <span>Description</span>
        </div>
        <div className="w-1/5 px-2">
          <span>Quantity</span>
        </div>
        <div className="w-1/5 px-2">
          <span>Price</span>
        </div>
        <div className="w-1/5 px-2">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="mt-6 text-right">
        <span>TOTAL: ${total.toFixed(2)}</span>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
