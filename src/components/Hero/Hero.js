import React from "react";
import "./Hero.scss";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";

const Hero = () => {
  const sliderParts = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/15024988/pexels-photo-15024988/free-photo-of-woman-in-black-clothes-beside-a-man-in-a-black-suit.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "Level up your styles with our summer collection",
      btn: "Shop now",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/9463575/pexels-photo-9463575.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "Check out our new collection updated everyday",
      btn: "Check out",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/5325586/pexels-photo-5325586.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "Sales reaching upto 50% off happening every month",
      btn: "Shop now",
    },
  ];
  return (
    <div className="p-6">
      <Swiper
        modules={[Pagination, Navigation, Autoplay, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay
        pagination={{ clickable: true }}
      >
        {sliderParts.map((items) => (
          <SwiperSlide key={items.id}>
            <div className="slider">
              <img src={items.img} alt="" />
              <div className="imagecover"></div>
              <div className="desc">
                <p className="text-white font-medium text-center">
                  {items.desc}
                </p>
                <button>
                  {items.btn} <ArrowForwardOutlinedIcon />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
