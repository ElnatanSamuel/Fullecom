import React, { useContext, useState } from "react";
import "./Checkoutright.scss";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useDispatch, useSelector } from "react-redux";
import { paymentVerification } from "../../redux/PaymentSlice";

const Checkoutright = ({ data, subtotal }) => {
  const {
    setFormNotPassed,
    formNotPassed,
    shippingMethod,
    setShippingMethod,
    grandTotal,
    setGrandTotal,
    shippingCountry,
    shippingRegion,
    fullName,
    email,
    phoneNumber,
    streetName,
    city,
    postalCode,
    setAreItemsInCart,
  } = useContext(CartContext);

  const ProductsCart = useSelector((state) => state.cart.cartItems);

  const PaymentDetails = {
    shippingMethod,
    grandTotal,
    shippingCountry,
    shippingRegion,
    fullName,
    email,
    phoneNumber,
    streetName,
    city,
    postalCode,
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handlePaymentProcess = () => {
    if (
      shippingMethod !== "" &&
      grandTotal !== 0 &&
      shippingCountry !== "" &&
      shippingRegion !== "" &&
      fullName !== "" &&
      email !== "" &&
      phoneNumber !== "" &&
      streetName !== "" &&
      city !== "" &&
      postalCode !== ""
    ) {
      if (ProductsCart.length === 0) {
        setAreItemsInCart(false);

        setTimeout(() => {
          setAreItemsInCart(false);
        }, 3000);
      } else {
        dispatch(paymentVerification(PaymentDetails));
        navigate("/checkout/payment");
      }
      return;
    } else {
      setFormNotPassed(true);

      setTimeout(() => {
        setFormNotPassed(false);
      }, 3000);
    }
  };
  return (
    <div className="checkoutright">
      <h1>Your Order</h1>

      {data?.map((items) => (
        <div className="checkoutitems">
          <div className="checkoutitem">
            <img src={items.image[0]} alt="" />
            <div className="checkoutitemdesc">
              <p className="checkoutitemdesctitle">
                {items.title.slice(0, 14)}
                {items.title.length > 14 ? <span>...</span> : null}
              </p>
              <p className="checkoutitemdesccolor">{items.color}</p>
              <span className="sm: text-xs lg:text-base">
                x{items.quantity}
              </span>
            </div>
          </div>
          <div className="checkoutitemprice">
            <p>${items.originalPrice * items.quantity}</p>
          </div>
        </div>
      ))}

      <div className="line"></div>
      <div className="checkoutdiscount">
        <h1>Discount Code</h1>
        <div className="checkoutdiscountinput">
          <input type="text" placeholder="Add discount code" />
          <button className="checkdiscountbtn">Apply</button>
        </div>
      </div>
      <p className="newcustomercheckout">
        <span className="font-extrabold">New customer?</span>{" "}
        <Link to="/account">
          <span className="underline cursor-pointer">Sign up</span>
        </Link>{" "}
        to get better offer
      </p>
      <div className="line"></div>
      <div className="checkoutrightbottom">
        <div className="cartchecktop">
          <div className="cartcheckleft">
            <p>Subtotal</p>
            <p>Discount</p>
            <p>Shipping cost</p>
          </div>
          <div className="cartcheckright">
            <p className="cartsubtotal">${subtotal}</p>
            <p className="cartdiscount">$0</p>
            <p className="cartdiscount">${shippingMethod}</p>
          </div>
        </div>
        <div className="checkline"></div>
        <div className="cartcheckbottom">
          <div className="checktotal">
            <p className="cartgrandtotal">Grand total</p>
            <p className="checkgrandtotal">${grandTotal}</p>
          </div>

          <button
            className="checkoutbtn"
            onClick={() => handlePaymentProcess()}
          >
            Continue to payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkoutright;
