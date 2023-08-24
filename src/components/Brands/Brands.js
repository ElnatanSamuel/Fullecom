import React from "react";
import "./Brands.scss";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import TagFacesOutlinedIcon from "@mui/icons-material/TagFacesOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";

const Brands = () => {
  const brandImg = [
    "/img/channel.png",
    "/img/calvinklein.png",
    "/img/guess.png",
    "/img/gucci.png",
    "/img/d&g.png",
    "/img/adidas.png",
    "/img/levis.png",
    "/img/versace.png",
  ];

  const brandAdvert = [
    {
      id: 1,
      icon: <MonetizationOnOutlinedIcon />,
      title: "Original Products",
      desc: "We provide money back guaranty if the product is not original",
    },
    {
      id: 2,
      icon: <TagFacesOutlinedIcon />,
      title: "Satisfaction Guarantee",
      desc: "Exchange the product you've purchased if it doesn't fit you",
    },
    {
      id: 3,
      icon: <CampaignOutlinedIcon />,
      title: "New Arrival Everyday",
      desc: "We update our collection almost everyday",
    },
    {
      id: 4,
      icon: <LocalShippingOutlinedIcon />,
      title: "Fast and Free Shipping",
      desc: "We offer fast and free shipping for our loyal customers",
    },
  ];
  return (
    <div className="mt-8 pl-6">
      <h1 className="sm:text-2xl lg:text-3xl font-medium">Brands</h1>
      <div className="brands p-2 mt-6">
        {brandImg.map((image) => (
          <img key={image} src={image} alt="" />
        ))}
      </div>

      <div className="branddesc">
        <div className="branddescleft">
          <p>We provide best customer experiences</p>
        </div>
        <div className="branddescright">
          <div className="line"></div>
          <p>We ensure our customers have the best shopping experience</p>
        </div>
      </div>

      <div className="brandadvert">
        {brandAdvert.map((item) => (
          <div className="advertwrapper" key={item.id}>
            <span className="adverticon">{item.icon}</span>
            <div className="description">
              <p>{item.title}</p>
              <span>{item.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
