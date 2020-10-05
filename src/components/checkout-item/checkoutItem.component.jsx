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
    <div>
      <div>
        <img src={imageURL} alt="item preview" />
      </div>
      <span>{name}</span>
      <span>
        <button> &#10094;</button>
        <span>{quantity}</span>
        <button> &#10095;</button>
      </span>
      <span>{price}</span>
      <button> &#10005;</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItemToCart(item)),
  removeItem: (item) => dispatch(removeItemFromCart(item)),
  clearItem: (item) => dispatch(clearItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
