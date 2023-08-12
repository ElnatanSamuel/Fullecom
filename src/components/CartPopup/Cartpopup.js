import React from "react";
import { Link } from "react-router-dom";
import "./Cartpopup.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cartpopup = () => {
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
    <div className="cart">
      <h1>Products in cart</h1>
      <div className="cartitems">
        <div className="item">
          <div className="left">
            <img src={data.image[0]} alt="" />
            <div className="details">
              <h1>{data.title}</h1>

              <div className="price">1 x ${data.originalPrice}</div>
            </div>
          </div>
          <DeleteOutlinedIcon className="delete" />
        </div>
      </div>

      <div className="total">
        <span>SUBTOTAL</span>
        <span>${data.originalPrice}</span>
      </div>
      <div className="btns">
        <Link to="/checkout">
          <button className="proceedtocheckout">PROCEED TO CHECKOUT</button>
        </Link>
        <Link to="/cart" className="">
          <button className="gotocart">Go to cart</button>
        </Link>
      </div>
      <span className="reset">Reset cart</span>
    </div>
  );
};

export default Cartpopup;
