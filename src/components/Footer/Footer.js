import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerwrapper max-w-7xl m-auto">
        <div className="top">
          <div className="left">
            <h1>CLOTHES</h1>
            <p>
              Specializes in providing high-quality, stylish products for your
              wardrobe
            </p>
          </div>
          <div className="center">
            <div className="col">
              <h1>SHOP</h1>
              <ul>
                <li>All Collections</li>
                <li>Winter Edition</li>
                <li>Discount</li>
              </ul>
            </div>
            <div className="col">
              <h1>COMPANY</h1>
              <ul>
                <li>About Us</li>
                <li>Contacts</li>
                <li>Affiliates</li>
              </ul>
            </div>
            <div className="col">
              <h1>SUPPORT</h1>
              <ul>
                <li>FAQ's</li>
                <li>Cookie Policy</li>
                <li>Terms of Use</li>
              </ul>
            </div>
          </div>
          <div className="right">
            <h1>PAYMENT METHODS</h1>
            <img src="/img/paymentsmall.png" alt="" />
          </div>
        </div>
        <div className="bottom">
          <div className="line"></div>
          <p>Copyright @2023 Clothes. All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
