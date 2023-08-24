import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "./CartList.scss";
import { useDispatch } from "react-redux";
import {
  decreaseItemQuantity,
  deleteFromCart,
  increaseItemQuantity,
  removeAllFromCart,
} from "../../redux/Cartslice";

const CartList = ({ proditem }) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = (item) => {
    dispatch(deleteFromCart(item.id));
  };

  const handleRemoveAll = () => {
    dispatch(removeAllFromCart());
  };

  const handleDecreaseQuantity = (item) => {
    dispatch(decreaseItemQuantity(item.id));
  };

  const handleQuantityIncrease = (item) => {
    dispatch(increaseItemQuantity(item.id));
  };

  return (
    <div>
      <div className="carttitle">
        <h1>Cart</h1>
        <span className="cartdelete" onClick={() => handleRemoveAll()}>
          <DeleteOutlinedIcon className="deleteicon" /> Remove
        </span>
      </div>
      <div className="cartcontent">
        <div className="cartdesc">
          <div className="cartleft">
            <p>Products</p>
          </div>

          <div className="cartright">
            <p>Quality</p>
            <p>Price</p>
          </div>
        </div>
        <div className="line"></div>
        {proditem.length === 0 ? (
          <p className="text-center opacity-50 text-lg">No items in cart</p>
        ) : (
          proditem?.map((item) => (
            <div key={item.id}>
              <div className="cartitems">
                <div className="cartproduct">
                  <div className="col">
                    <img src={item.image[0]} alt="" />
                  </div>
                  <div className="col">
                    <p className="producttitle">{item.title}</p>
                    <div className="productdesc">
                      <span>{item.color}</span>
                      <span>{item.size}</span>
                    </div>
                  </div>
                </div>
                <div className="cartproductright">
                  <div className="cartquantity">
                    <div className="qualityadjust">
                      <RemoveIcon
                        className="quantityicon"
                        onClick={() => handleDecreaseQuantity(item)}
                      />
                      <span>{item.quantity}</span>
                      <AddIcon
                        className="quantityicon"
                        onClick={() => handleQuantityIncrease(item)}
                      />
                    </div>

                    <span
                      className="cartdelete"
                      onClick={() => handleRemoveFromCart(item)}
                    >
                      <DeleteOutlinedIcon className="deleteicon" /> Remove
                    </span>
                  </div>
                  <div className="cartprice">
                    <p>${item.originalPrice * item.quantity}</p>
                  </div>
                </div>
              </div>
              <div className="line"></div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CartList;
