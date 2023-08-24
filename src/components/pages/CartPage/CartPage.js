import React, { useContext, useState } from "react";
import CartList from "../../CartList/CartList";
import "./CartPage.scss";
import { useSelector } from "react-redux";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";

const CartPage = () => {
  const ProductItems = useSelector((state) => state.cart.cartItems);
  const subtotalAmount = useSelector((state) => state.cart.subTotalAmount);
  const { priceSubTotal } = useContext(CartContext);
  return (
    <div className="max-w-7xl m-auto px-6 mt-10">
      <div className="cartwrapper">
        <div className="cartpageleft">
          <CartList proditem={ProductItems} />
        </div>
        <div className="cartpageright">
          <div className="cartchecktop">
            <div className="cartcheckleft">
              <p>Subtotal</p>
              <p>Discount</p>
            </div>
            <div className="cartcheckright">
              <p className="cartsubtotal">${subtotalAmount}</p>
              <p className="cartdiscount">$0</p>
            </div>
          </div>
          <div className="checkline"></div>
          <div className="cartcheckbottom">
            <div className="checktotal">
              <p className="cartgrandtotal">Grand total</p>
              <p className="checkgrandtotal">${subtotalAmount}</p>
            </div>
            <Link to="/checkout">
              <button className="checkoutbtn">Checkout now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
