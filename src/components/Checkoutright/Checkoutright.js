import React from "react";
import "./Checkoutright.scss";

const Checkoutright = ({ data }) => {
  return (
    <div className="checkoutright">
      <h1>Your Order</h1>
      <div className="checkoutitems">
        <div className="checkoutitem">
          <img src={data.image[0]} alt="" />
          <div className="checkoutitemdesc">
            <p className="checkoutitemdesctitle">
              {data.title.slice(0, 14)}
              {data.title.length > 14 ? <span>...</span> : null}
            </p>
            <p className="checkoutitemdesccolor">{data.color}</p>
            <span>x1</span>
          </div>
        </div>
        <div className="checkoutitemprice">
          <p>${data.originalPrice}</p>
        </div>
      </div>
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
        <span className="underline cursor-pointer">Sign up</span> to get better
        offer
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
            <p className="cartsubtotal">$2000</p>
            <p className="cartdiscount">$0</p>
            <p className="cartdiscount">$22</p>
          </div>
        </div>
        <div className="checkline"></div>
        <div className="cartcheckbottom">
          <div className="checktotal">
            <p className="cartgrandtotal">Grand total</p>
            <p className="checkgrandtotal">$0</p>
          </div>
          <button className="checkoutbtn">Continue to payment</button>
        </div>
      </div>
    </div>
  );
};

export default Checkoutright;
