import React, { useContext, useState } from "react";
import "./PaymentRight.scss";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useDispatch, useSelector } from "react-redux";
import { paymentVerification } from "../../redux/PaymentSlice";
import ReactLoading from "react-loading";
import axios from "axios";

const PaymentRight = ({
  data,
  subtotal,
  cvv,
  cardName,
  cardNumber,
  expirationDate,
}) => {
  const {
    setAreItemsInCart,
    setFieldsEmpty,
    paymentError,
    setPaymentError,
    paymentProcessed,
    setPaymentProcessed,
  } = useContext(CartContext);

  const ProductsCart = useSelector((state) => state.cart.cartItems);
  const fullName = useSelector((state) => state.payment.fullName);
  const email = useSelector((state) => state.payment.paymentEmail);
  const phoneNumber = useSelector((state) => state.payment.phoneNumber);
  const streetName = useSelector((state) => state.payment.streetAddress);
  const city = useSelector((state) => state.payment.city);
  const postalCode = useSelector((state) => state.payment.postalCode);
  const shippingMethod = useSelector((state) => state.payment.shippingMethod);
  const shippingRegion = useSelector((state) => state.payment.paymentRegion);
  const shippingCountry = useSelector((state) => state.payment.paymentCountry);
  const grandTotal = useSelector((state) => state.payment.grandTotalPrice);
  const userEmail = useSelector((state) => state.user.userEmail);
  const [processing, setProcessing] = useState(false);
  const [orderNumber, setOrderNumber] = useState(0);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlePaymentProcess = () => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
    }, 5000);
    setOrderNumber(Math.floor(Math.random() * 1000));

    const PaymentDetails = {
      orderNumber,
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
      ProductsCart,
      userEmail,
    };

    if (
      cardName !== "" &&
      cardNumber !== "" &&
      expirationDate !== "" &&
      cvv !== ""
    ) {
      if (ProductsCart.length === 0) {
        setAreItemsInCart(false);

        setTimeout(() => {
          setAreItemsInCart(false);
        }, 3000);
      } else {
        axios
          .post(
            "http://ecomserver.elnatandev.elnatansamueldev.com/api/payment/details",
            PaymentDetails
          )
          .then((res) => {
            console.log(res.data);

            if (res.data === true) {
              setPaymentProcessed(true);
              setPaymentError(false);

              setTimeout(() => {
                setPaymentProcessed(false);
                setPaymentError(false);
              }, 5000);
            } else {
              setPaymentProcessed(false);
              setPaymentError(true);

              setTimeout(() => {
                setPaymentProcessed(false);
                setPaymentError(false);
              }, 5000);
            }
          })
          .catch((err) => console.log(err));
      }
      return;
    } else {
      setFieldsEmpty(true);

      setTimeout(() => {
        setFieldsEmpty(false);
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
          {processing === true ? (
            <ReactLoading
              type="spin"
              color="#000"
              height={30}
              width={30}
              className="paymentloading"
            />
          ) : (
            <button
              className="checkoutbtn"
              onClick={() => handlePaymentProcess()}
            >
              Finish payment
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentRight;
