import React, { useContext, useState } from "react";
import "./Payment.scss";
import Checkoutright from "../../Checkoutright/Checkoutright";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { useSelector } from "react-redux";
import PaymentRight from "../../PaymentRight/PaymentRight";
import { CartContext } from "../../../context/CartContext";

const Payment = () => {
  const [shippingCountry, setShippingCountry] = useState("");
  const [shippingRegion, setShippingRegion] = useState("");
  const ProductItems = useSelector((state) => state.cart.cartItems);
  const subtotalAmount = useSelector((state) => state.cart.subTotalAmount);
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cvv, setCvv] = useState("");
  const [expirationDate, setExpirationDate] = useState("");

  const {
    fieldsEmpty,
    areItemsInCart,
    paymentError,
    setPaymentError,
    paymentProcessed,
    setPaymentProcessed,
  } = useContext(CartContext);

  return (
    <div className="max-w-7xl m-auto px-8 mt-10 relative">
      <div className="menu">
        <p>Cart</p> <span>&#62;</span>
        <p>Checkout</p>
        <span>&#62;</span>
        <span className="menunegative">Payment</span>
      </div>

      {paymentProcessed === true ? (
        <div className="paymentprocessing">
          <p className="">Payment have been processed</p>
          <img src="/img/greentick.png" alt="" className="" />
        </div>
      ) : paymentError === true ? (
        <div className="paymentprocessing">
          <p className="">Payment not processed, please try again</p>
        </div>
      ) : null}

      <div className="paymentwrapper">
        <div className="paymentleft">
          <div className="paymentmethods">
            {fieldsEmpty === true ? (
              <p className="sm: text-xs lg: w-full p-4 bg-red-600 text-white font-bold text-center rounded-lg mb-6">
                Please fill all the required fields
              </p>
            ) : areItemsInCart === false ? (
              <p className="sm: text-xs lg: w-full p-4 bg-red-600 text-white font-bold text-center rounded-lg mb-6">
                No items in cart
              </p>
            ) : null}
            <h1>
              Select payment methods{" "}
              <span>(only credit card is currently available)</span>
            </h1>
            <div className="selectpaymentmethods">
              <Accordion className="paymentaccordion">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <p className="sorttitle">Credit card</p>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="selectpaymentinput">
                    <input
                      type="text"
                      placeholder="Card number"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Name on card"
                      value={cardName}
                      onChange={(e) => setCardName(e.target.value)}
                    />
                    <div className="selectpaymentinputexpiry">
                      <input
                        type="text"
                        placeholder="Expiration date(MM/YY)"
                        value={expirationDate}
                        onChange={(e) => setExpirationDate(e.target.value)}
                      />
                      <input
                        type="text"
                        placeholder="CVV"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                      />
                    </div>
                  </div>
                </AccordionDetails>
              </Accordion>
              <div className="selectpaymentclosed">
                <p>Paypal</p>
                <img src="/img/paypallone.png" alt="" />
              </div>
              <div className="selectpaymentclosed">
                <p>Neteller</p>
                <img src="/img/nettellerlone.png" alt="" />
              </div>
            </div>
          </div>
          {/* 
          <div className="billingaddress">
            <h1>Billing address</h1>
            <form className="checkform" action="">
              <label htmlFor="checkphone" className="checklabel">
                Phone number*
              </label>
              <input
                type="text"
                id="checkphone"
                placeholder="Enter your phone number(only digits)"
                className="checkinput"
              />
              <label htmlFor="checkstreet" className="checklabel">
                Street name and house number*
              </label>
              <input
                type="text"
                id="checkstreet"
                placeholder="Enter your street name and house number"
                className="checkinput"
              />
              <div className="checkcityregion">
                <div className="checkcity">
                  <label htmlFor="checkcity" className="checklabel">
                    City*
                  </label>
                  <input
                    type="text"
                    id="checkcity"
                    placeholder="Enter your city"
                    className="checkinput"
                  />
                </div>
                <RegionDropdown
                  classes="countrydropdown"
                  country={shippingCountry}
                  value={shippingRegion}
                  onChange={(e) => setShippingRegion(e)}
                />
              </div>
              <label className="checklabel" htmlFor="checkpostal">
                Postal code*
              </label>
              <input
                type="text"
                id="checkpostal"
                placeholder="Enter your postal code"
                className="checkinput"
              />

              <CountryDropdown
                value={shippingCountry}
                classes="countrydropdown"
                onChange={(e) => setShippingCountry(e)}
              />
            </form>
          </div> */}
        </div>
        <PaymentRight
          data={ProductItems}
          subtotal={subtotalAmount}
          cvv={cvv}
          cardName={cardName}
          cardNumber={cardNumber}
          expirationDate={expirationDate}
        />
      </div>
    </div>
  );
};

export default Payment;
