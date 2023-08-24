import React, { useState } from "react";
import "./Checkout.scss";
import Checkoutleft from "../../Checkoutleft/Checkoutleft";
import Checkoutright from "../../Checkoutright/Checkoutright";
import { useSelector } from "react-redux";

const Checkout = () => {
  const ProductItems = useSelector((state) => state.cart.cartItems);
  const subtotalAmount = useSelector((state) => state.cart.subTotalAmount);
  return (
    <div className="max-w-7xl m-auto mt-10 px-6">
      <div className="menu">
        <p>Cart</p> <span>&#62;</span>
        <span className="menunegative">Checkout</span> <span>&#62;</span>
        <p>Payment</p>
      </div>

      <div className="checkoutwrapper">
        <Checkoutleft subtotal={subtotalAmount} />
        <Checkoutright data={ProductItems} subtotal={subtotalAmount} />
      </div>
    </div>
  );
};

export default Checkout;
