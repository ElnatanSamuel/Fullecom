import React, { useEffect, useState } from "react";
import "./Product.scss";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import FeaturedProducts from "../../FeaturedProd/FeaturedProd";
import FeaturedProdTab from "../../FeaturedProdTab/FeaturedProdTab";
import { useParams } from "react-router-dom";
import ProductsData from "../../../productData.json";
import { useDispatch } from "react-redux";
import { addToCart, addSingleProduct } from "../../../redux/Cartslice";

const Product = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [itemQuantity, setItemQuantity] = useState(1);
  const id = useParams();
  const dispatch = useDispatch();

  const activeId = [parseInt(id.id)];

  const result = ProductsData.filter(({ id }) => activeId.includes(id));

  const handleAddToCart = (data) => {
    dispatch(addToCart(data));
  };

  return (
    <div className="max-w-7xl m-auto my-6 ">
      {result.map((data) => (
        <div className="px-8" key={data.id}>
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
                {data.image.length > 1 ? (
                  <img
                    className="imgproduct"
                    src={data.image[1]}
                    alt=""
                    onClick={(e) => setSelectedImage(1)}
                  />
                ) : null}
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
                <span className="productorignalprice">
                  ${data.originalPrice}
                </span>
                {data.currentPrice > 0 ? (
                  <span className="productcurrentprice">
                    ${data.currentPrice}
                  </span>
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
                <button onClick={() => handleAddToCart(data)}>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="relatedproductsbig">
        <FeaturedProducts />
      </div>
      <div className="relatedproductstab">
        <FeaturedProdTab />
      </div>
    </div>
  );
};

export default Product;
