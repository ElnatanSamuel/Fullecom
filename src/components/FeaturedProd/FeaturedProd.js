import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./FeaturedProd.scss";
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

const FeaturedProd = () => {
  const products = [
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
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/6311274/pexels-photo-6311274.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Sweatpants and hoodie",
      onSale: false,
      originalPrice: 200,
      currentPrice: 0,
    },
    {
      id: 5,
      img: "https://www.mensjournal.com/.image/t_share/MTk2MTM3MjMxODU2NzcyNjEz/14-frame-heritage-jacket-in-supermoon.jpg",
      title: "Black jacket",
      onSale: true,
      originalPrice: 125,
      currentPrice: 250,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/6311443/pexels-photo-6311443.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "T-Shirt",
      onSale: false,
      originalPrice: 23,
      currentPrice: 0,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/6311604/pexels-photo-6311604.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Hoodie",
      onSale: true,
      originalPrice: 40,
      currentPrice: 80,
    },
  ];
  return (
    <div className="mt-16">
      <h1 className="text-3xl font-medium">Featured products</h1>
      <div className="products">
        <Swiper
          className="sliderthing"
          modules={[Pagination, FreeMode, Navigation, Autoplay, A11y]}
          spaceBetween={30}
          slidesPerView={3}
          freeMode
          autoplay
          pagination={{ clickable: true }}
        >
          {products.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="product">
                <div className="top">
                  <img src={item.img} alt="" />
                  {item.onSale === true ? <p>SALE</p> : null}
                </div>
                <div className="bottom">
                  <div className="description">
                    <span className="title">{item.title}</span>
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
                    <button>
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

export default FeaturedProd;
