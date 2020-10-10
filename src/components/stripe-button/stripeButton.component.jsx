import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51GxxdHKf1CtSxFdrowYToiXQhB31w24YxHrt58q4P8Zk3kwMeWcs3XnrJ3EFY3KITWJgWbzg7xGSvdo20LzkGajO00SndCMQoq"

    const onToken = (token) => {
        console.log(token);
        alert("Payment Successful");
      };

    return(
        <StripeCheckout
            label= "Pay Now"
            name= "Ramen Shop"
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/QQb.svg"
            description={`Your total price is $${price.toFixed(2)}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeButton;