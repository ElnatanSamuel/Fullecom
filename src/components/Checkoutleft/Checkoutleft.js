import React, { useState } from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

const Checkoutleft = () => {
  const [shippingCountry, setShippingCountry] = useState("");
  const [shippingRegion, setShippingRegion] = useState("");

  return (
    <div className="checkoutleft">
      <div className="checklefttop">
        <div className="shippingcountry">
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
              placeholder="Enter your full name"
              className="checkinput"
            />

            <label htmlFor="checkmail" className="checklabel">
              Email address*
            </label>
            <input
              type="text"
              id="checkmail"
              placeholder="Enter your email address"
              className="checkinput"
            />
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
                id="freeship"
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
                name="freeship"
                id="regular"
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
                id="expressship"
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
