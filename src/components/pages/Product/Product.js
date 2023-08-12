import React, { useState } from "react";
import "./Product.scss";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import FeaturedProducts from "../../FeaturedProd/FeaturedProd";

const Product = () => {
  const [selectedImage, setSelectedImage] = useState(0);
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
    <div className="max-w-7xl m-auto my-6 px-8">
      <div className="menu">
        <p>Browse Products</p> <span>&#62;</span>
        <p>{data.category}</p> <span>&#62;</span>
        <span className="menunegative">{data.subCategory}</span>
      </div>
      <div className="productwrapper mt-8">
        <div className="productleft">
          <div className="productimg">
            <img
              className="imgproduct"
              src={data.image[0]}
              alt=""
              onClick={(e) => setSelectedImage(0)}
            />
            <img
              className="imgproduct"
              src={data.image[1]}
              alt=""
              onClick={(e) => setSelectedImage(1)}
            />
          </div>
          <div className="productmainimg">
            <img
              className="mainimgproduct"
              src={data.image[selectedImage]}
              alt=""
            />
          </div>
        </div>
        <div className="productright">
          <h1>{data.title}</h1>
          <div className="productprices">
            <span className="productorignalprice">${data.originalPrice}</span>
            {data.currentPrice > 0 ? (
              <span className="productcurrentprice">${data.currentPrice}</span>
            ) : null}
          </div>
          <div className="productdesc">
            <p>Desciption</p>
            <span>{data.desc}</span>
          </div>
          <div className="aboutproduct">
            <p className="abouttitleprod">About Item</p>
            <div className="aboutitem">
              <span>Brand:</span>
              <p>{data.brand}</p>
            </div>
            <div className="aboutitem">
              <span>Category:</span>
              <p>{data.category}</p>
            </div>
            <div className="aboutitem">
              <span>Color:</span>
              <p>{data.color}</p>
            </div>
          </div>
          <div className="quantitybtn">
            <div className="qualityadjust">
              <RemoveIcon className="quantityicon" />
              <span>1</span>
              <AddIcon className="quantityicon" />
            </div>
            <button>Add to cart</button>
          </div>
        </div>
      </div>
      <div className="relatedproducts">
        <FeaturedProducts />
      </div>
    </div>
  );
};

export default Product;
