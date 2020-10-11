import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { emptyCartItems } from "../../redux/cart/cart.actions";
import { createOrderHistoryDocument } from "../../firebase/firebase.utils";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price, currentUser, cartItems, emptyCartItems }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51GxxdHKf1CtSxFdrowYToiXQhB31w24YxHrt58q4P8Zk3kwMeWcs3XnrJ3EFY3KITWJgWbzg7xGSvdo20LzkGajO00SndCMQoq";
  const onToken = async (token) => {
    console.log(token);
    await createOrderHistoryDocument(currentUser.id, cartItems);
    emptyCartItems();
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Ramen Shop"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/QQb.svg"
      description={`Your total price is $${price.toFixed(2)}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartItems: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  emptyCartItems: () => dispatch(emptyCartItems()),
});

export default connect(mapStateToProps, mapDispatchToProps)(StripeButton);
