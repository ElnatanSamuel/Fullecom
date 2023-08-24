import React from "react";
import "./OrderDetail.scss";
import { useSelector } from "react-redux";

const OrderDetail = () => {
  const orderDetails = useSelector((state) => state.order.orderDetails);

  console.log(orderDetails);

  return (
    <div className="max-w-7xl m-auto mt-10 px-8 mb-10">
      <div className="orderdetailwrapper">
        <div className="orderdetailleft">
          <h1>Order details</h1>
          <div className="orderuserdeatil">
            <p>
              Name: <span>{orderDetails.fullName}</span>
            </p>
            <p>
              Email: <span>{orderDetails.email}</span>
            </p>
            <p>
              Phone number: <span>{orderDetails.phoneNumber}</span>
            </p>
          </div>

          <h1>Shipping details</h1>

          <div className="ordershippingdetails">
            <p>
              Country: <span>{orderDetails.country}</span>
            </p>
            <p>
              Region: <span>{orderDetails.region}</span>
            </p>
            <p>
              City: <span>{orderDetails.city}</span>
            </p>
            <p>
              Country: <span>{orderDetails.country}</span>
            </p>
            <p>
              Street address: <span>{orderDetails.streetName}</span>
            </p>
            <p>
              Postal code: <span>{orderDetails.postalCode}</span>
            </p>
            <p>
              Shipping method:{" "}
              {orderDetails.shippingMethod === "0" ? (
                <span>Free shipping</span>
              ) : orderDetails.shippingMethod === " 7.5" ? (
                <span>Regular shipping</span>
              ) : orderDetails.shippingMethod === "22.5" ? (
                <span>Express shipping</span>
              ) : null}
            </p>
          </div>
        </div>
        <div className="orderdetailright">
          <div className="checkoutright">
            <h1>Product details</h1>

            {orderDetails.cartItems?.map((items) => (
              <div className="checkoutitems">
                <div className="checkoutitem">
                  <img src={items.image[0]} alt="" />
                  <div className="checkoutitemdesc">
                    <p className="checkoutitemdesctitle">
                      {items.title.slice(0, 14)}
                      {items.title.length > 14 ? <span>...</span> : null}
                    </p>
                    <p className="checkoutitemdesccolor">{items.color}</p>
                    <span>x{items.quantity}</span>
                  </div>
                </div>
                <div className="checkoutitemprice">
                  <p>${items.originalPrice * items.quantity}</p>
                </div>
              </div>
            ))}

            <div className="line"></div>

            <div className="checkoutrightbottom">
              <div className="cartcheckbottom">
                <div className="checktotal">
                  <p className="cartgrandtotal">Grand total</p>
                  <p className="checkgrandtotal">${orderDetails.grandTotal}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
