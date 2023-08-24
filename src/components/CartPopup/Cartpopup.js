import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Cartpopup.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useDispatch, useSelector } from "react-redux";
import { CartContext } from "../../context/CartContext";
import { deleteFromCart, removeAllFromCart } from "../../redux/Cartslice";

const Cartpopup = () => {
  const ProductsList = useSelector((state) => state.cart.cartItems);
  const subtotalAmount = useSelector((state) => state.cart.subTotalAmount);
  const { setPriceSubTotal, priceSubTotal } = useContext(CartContext);

  const dispatch = useDispatch();

  const handleResetCart = () => {
    dispatch(removeAllFromCart());
  };

  const handleDeleteItem = (data) => {
    console.log(data);
    dispatch(deleteFromCart(data));
  };

  return (
    <div className="cart">
      <h1>Products in cart</h1>
      <div className="cartitems">
        {ProductsList?.map((data) => (
          <div className="item">
            <div className="left">
              <img src={data.image[0]} alt="" />
              <div className="details">
                <h1>{data.title}</h1>

                <div className="price">
                  {data.quantity} x ${data.originalPrice}
                </div>
              </div>
            </div>
            <DeleteOutlinedIcon
              className="delete"
              onClick={() => handleDeleteItem(data.id)}
            />
          </div>
        ))}
      </div>

      <div className="total">
        <span>SUBTOTAL</span>
        <span>${subtotalAmount}</span>
      </div>
      <div className="btns">
        <Link to="/checkout">
          <button className="proceedtocheckout">PROCEED TO CHECKOUT</button>
        </Link>
        <Link to="/cart" className="">
          <button className="gotocart">Go to cart</button>
        </Link>
      </div>
      <span className="reset" onClick={() => handleResetCart()}>
        Reset cart
      </span>
    </div>
  );
};

export default Cartpopup;
