import React from "react";
import CartList from "../../CartList/CartList";
import "./CartPage.scss";

const CartPage = () => {
  const productsitems = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/6311445/pexels-photo-6311445.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Yellow sweater",
      onSale: true,
      originalPrice: 50,
      currentPrice: 100,
    },
    {
      id: 6,
      img: "https://www.insidehook.com/wp-content/uploads/2022/01/Public-Rec-Shirt-Jacket.jpg?w=1500&resize=1500%2C1000",
      title: "Black Shirt",
      onSale: false,
      originalPrice: 75,
      currentPrice: 0,
      size: "Medium",
      color: "Gray",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/6311274/pexels-photo-6311274.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Sweatpants and hoodie",
      onSale: false,
      originalPrice: 200,
      currentPrice: 0,
      size: "Medium",
      color: "Gray",
    },
    {
      id: 5,
      img: "https://www.mensjournal.com/.image/t_share/MTk2MTM3MjMxODU2NzcyNjEz/14-frame-heritage-jacket-in-supermoon.jpg",
      title: "Black jacket",
      onSale: true,
      originalPrice: 125,
      currentPrice: 250,
      size: "Medium",
      color: "Gray",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/6311443/pexels-photo-6311443.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "T-Shirt",
      onSale: false,
      originalPrice: 23,
      currentPrice: 0,
      size: "Medium",
      color: "Gray",
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/6311604/pexels-photo-6311604.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Hoodie",
      onSale: true,
      originalPrice: 40,
      currentPrice: 80,
      size: "Medium",
      color: "Gray",
    },
  ];

  return (
    <div className="max-w-7xl m-auto px-6 mt-10">
      <div className="cartwrapper">
        <div className="cartpageleft">
          <CartList proditem={productsitems} />
        </div>
        <div className="cartpageright">
          <div className="cartchecktop">
            <div className="cartcheckleft">
              <p>Subtotal</p>
              <p>Discount</p>
            </div>
            <div className="cartcheckright">
              <p className="cartsubtotal">$2000</p>
              <p className="cartdiscount">$0</p>
            </div>
          </div>
          <div className="checkline"></div>
          <div className="cartcheckbottom">
            <div className="checktotal">
              <p className="cartgrandtotal">Grand total</p>
              <p className="checkgrandtotal">$0</p>
            </div>
            <button className="checkoutbtn">Checkout now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
