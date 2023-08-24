import React, { useContext, useState } from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { CartContext } from "../../context/CartContext";

const Checkoutleft = ({ subtotal }) => {
  const {
    shippingCountry,
    setShippingCountry,
    shippingRegion,
    setShippingRegion,
    shippingMethod,
    setShippingMethod,
    setGrandTotal,
    fullName,
    setFullName,
    email,
    setEmail,
    phoneNumber,
    setPhoneNumber,
    streetName,
    setStreetName,
    city,
    setCity,
    postalCode,
    setPostalCode,
    setFormNotPassed,
    formNotPassed,
    areItemsInCart,
  } = useContext(CartContext);

  const handleShippingChange = (e) => {
    if (e.target.value === "Free") {
      setGrandTotal(subtotal + 0);
      setShippingMethod(0);
    } else if (e.target.value === "Regular") {
      setGrandTotal(subtotal + 7.5);
      setShippingMethod(7.5);
    } else {
      setGrandTotal(subtotal + 22.5);
      setShippingMethod(22.5);
    }
  };

  return (
    <div className="checkoutleft">
      <div className="checklefttop">
        <div className="shippingcountry">
          {formNotPassed === true ? (
            <p className="w-full p-4 bg-red-600 text-white font-bold text-center rounded-lg mb-6">
              Please fill all the required fields
            </p>
          ) : areItemsInCart === false ? (
            <p className="w-full p-4 bg-red-600 text-white font-bold text-center rounded-lg mb-6">
              No items in cart
            </p>
          ) : null}
          <h1>Select shipping country</h1>
          <CountryDropdown
            value={shippingCountry}
            classes="countrydropdown"
            onChange={(e) => setShippingCountry(e)}
          />
        </div>
        <div className="line"></div>
        <div className="shippingaddress">
          <h1>Shipping address</h1>
          <form className="checkform" action="">
            <label className="checklabel" htmlFor="checkfullname">
              Full name*
            </label>
            <input
              type="text"
              id="checkfullname"
              value={fullName}
              placeholder="Enter your full name"
              className="checkinput"
              onChange={(e) => setFullName(e.target.value)}
            />

            <label htmlFor="checkmail" className="checklabel">
              Email address*
            </label>
            <input
              type="text"
              id="checkmail"
              value={email}
              placeholder="Enter your email address"
              className="checkinput"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="checkphone" className="checklabel">
              Phone number*
            </label>
            <input
              type="text"
              id="checkphone"
              value={phoneNumber}
              placeholder="Enter your phone number(only digits)"
              className="checkinput"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <label htmlFor="checkstreet" className="checklabel">
              Street name and house number*
            </label>
            <input
              type="text"
              id="checkstreet"
              value={streetName}
              placeholder="Enter your street name and house number"
              className="checkinput"
              onChange={(e) => setStreetName(e.target.value)}
            />
            <div className="checkcityregion">
              <div className="checkcity">
                <label htmlFor="checkcity" className="checklabel">
                  City*
                </label>
                <input
                  type="text"
                  id="checkcity"
                  value={city}
                  placeholder="Enter your city"
                  className="checkinput"
                  onChange={(e) => setCity(e.target.value)}
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
              value={postalCode}
              placeholder="Enter your postal code"
              className="checkinput"
              onChange={(e) => setPostalCode(e.target.value)}
            />
          </form>
        </div>
      </div>
      <div className="checkleftbottom">
        <h1>Shipping method</h1>
        <div className="shippingmethod">
          <div className="methodship">
            <div className="methodradio">
              <input
                className="radioship"
                type="radio"
                name="freeship"
                value="Free"
                id="freeship"
                onChange={(e) => handleShippingChange(e)}
              />
              <label className="radiolabel" htmlFor="freeship">
                Free shipping
              </label>
            </div>

            <p>$0</p>
          </div>
          <p>7-30 business days</p>
        </div>
        <div className="shippingmethod">
          <div className="methodship">
            <div className="methodradio">
              <input
                className="radioship"
                type="radio"
                value="Regular"
                name="freeship"
                id="regular"
                onChange={(e) => handleShippingChange(e)}
              />
              <label className="radiolabel" htmlFor="regular">
                Regular shipping
              </label>
            </div>

            <p>$7.50</p>
          </div>
          <p>3-14 business days</p>
        </div>
        <div className="shippingmethod">
          <div className="methodship">
            <div className="methodradio">
              <input
                className="radioship"
                type="radio"
                name="freeship"
                value="Express"
                id="expressship"
                onChange={(e) => handleShippingChange(e)}
              />
              <label className="radiolabel" htmlFor="expressship">
                Express shipping
              </label>
            </div>

            <p>$22.50</p>
          </div>
          <p>1-3 business days</p>
        </div>
      </div>
    </div>
  );
};

export default Checkoutleft;
