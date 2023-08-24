import React, { useContext } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./FeaturedProdTab.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  FreeMode,
  Navigation,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import ProductsData from "../../productData.json";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/Cartslice";
import { CartContext } from "../../context/CartContext";

const FeaturedProdTab = () => {
  const products = ProductsData.slice(0, 6);

  const dispatch = useDispatch();

  const { setPriceSubTotal, priceSubTotal } = useContext(CartContext);
  const handleAddToCart = (item) => {
    // const price = item.originalPrice * item.quantity;
    // setPriceSubTotal(priceSubTotal + price);
    dispatch(addToCart(item));
  };

  return (
    <div className="mt-16">
      <h1 className="sm:text-2xl pl-4 lg:text-3xl font-medium">
        Featured products
      </h1>
      <div className="productstab">
        <Swiper
          className="sliderthing"
          modules={[Pagination, FreeMode, Navigation, Autoplay, A11y]}
          spaceBetween={30}
          slidesPerView={2}
          freeMode
          autoplay
          pagination={{ clickable: true }}
        >
          {products.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="product">
                <div className="top">
                  <Link to={"/product/" + item.id}>
                    <img src={item.image[0]} alt="" />
                  </Link>
                  {item.onSale === true ? <p>SALE</p> : null}
                </div>
                <div className="bottom">
                  <div className="description">
                    <Link to={"/product/" + item.id}>
                      <span className="title">{item.title}</span>
                    </Link>
                    <div className="prices">
                      <span className="orignalprice">
                        ${item.originalPrice}
                      </span>
                      {item.currentPrice > 0 ? (
                        <span className="currentprice">
                          ${item.currentPrice}
                        </span>
                      ) : null}
                    </div>
                  </div>
                  <div className="icon">
                    <button onClick={(e) => handleAddToCart(item)}>
                      <ShoppingCartOutlinedIcon sx={{ fontSize: "20px" }} />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedProdTab;
