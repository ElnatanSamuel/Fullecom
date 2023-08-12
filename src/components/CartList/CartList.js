import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "./CartList.scss";

const CartList = ({ proditem }) => {
  return (
    <div>
      <div className="carttitle">
        <h1>Cart</h1>
        <span className="cartdelete">
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
                    <img src={item.img} alt="" />
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
                      <RemoveIcon className="quantityicon" />
                      <span>1</span>
                      <AddIcon className="quantityicon" />
                    </div>
                    <span className="cartdelete">
                      <DeleteOutlinedIcon className="deleteicon" /> Remove
                    </span>
                  </div>
                  <div className="cartprice">
                    <p>${item.originalPrice}</p>
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
