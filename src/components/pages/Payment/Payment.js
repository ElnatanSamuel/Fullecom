import React, { useState } from "react";
import "./Payment.scss";
import Checkoutright from "../../Checkoutright/Checkoutright";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

const Payment = () => {
  const [shippingCountry, setShippingCountry] = useState("");
  const [shippingRegion, setShippingRegion] = useState("");

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
    <div className="max-w-7xl m-auto px-8 mt-10">
      <div className="menu">
        <p>Cart</p> <span>&#62;</span>
        <p>Checkout</p>
        <span>&#62;</span>
        <span className="menunegative">Payment</span>
      </div>
      <div className="paymentwrapper">
        <div className="paymentleft">
          <div className="paymentmethods">
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
                    <input type="text" placeholder="Card number" />
                    <input type="text" placeholder="Name on card" />
                    <div className="selectpaymentinputexpiry">
                      <input type="text" placeholder="Expiration date(MM/YY)" />
                      <input type="text" placeholder="CVV" />
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
          </div>
        </div>
        <Checkoutright data={data} />
      </div>
    </div>
  );
};

export default Payment;
