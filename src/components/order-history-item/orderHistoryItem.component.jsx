import React from "react";

const OrderHistoryItem = ({ item }) => {
  const cartItems = item.cartItems;
  let orderDate = item.createdAt.toDate().toDateString();
  let itemsOrdered = [];
  let orderTotal = 0;
  cartItems.forEach((dish) => {
    orderTotal += dish.price * dish.quantity;
    itemsOrdered.push(dish.name);
  });
  return (
    <div className="relative max-w-xl mx-auto shadow-lg h-auto w-full my-8 py-8 px-8 text-sm sm:text-base">
      <div className="py-2">{itemsOrdered.join(", ")}</div>
      <div className="py-2">Total: ${orderTotal.toFixed(2)}</div>
      <div>Ordered on: {orderDate}</div>
      <button className="absolute top-0 right-0 text-white bg-green-700 px-2 py-1 mr-2 mt-2 hover:bg-green-800">
        RE-ORDER
      </button>
    </div>
  );
};

export default OrderHistoryItem;
