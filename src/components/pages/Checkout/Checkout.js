import React, { useState } from "react";
import "./Checkout.scss";
import Checkoutleft from "../../Checkoutleft/Checkoutleft";
import Checkoutright from "../../Checkoutright/Checkoutright";

const Checkout = () => {
  const data = {
    id: 5,
    image: [
      "https://www.mensjournal.com/.image/t_share/MTk2MTM3MjMxODU2NzcyNjEz/14-frame-heritage-jacket-in-supermoon.jpg",
      "https://images.pexels.com/photos/6311274/pexels-photo-6311274.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    title: "Black jacket",
    onSale: true,
    originalPrice: 125,
    currentPrice: 250,
    category: "Women",
    subCategory: "Jackets",
    brand: "Louie V",
    color: "Black",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis laudantium quia porro animi est suscipit architecto autem facilis quis beatae!",
  };
  return (
    <div className="max-w-7xl m-auto mt-10 px-6">
      <div className="menu">
        <p>Cart</p> <span>&#62;</span>
        <span className="menunegative">Checkout</span> <span>&#62;</span>
        <p>Payment</p>
      </div>

      <div className="checkoutwrapper">
        <Checkoutleft data={data} />
        <Checkoutright data={data} />
      </div>
    </div>
  );
};

export default Checkout;
