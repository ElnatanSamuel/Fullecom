import React from "react";
import Hero from "../../Hero/Hero";
import CuratedPicks from "../../Curated/CuratedPicks";
import Advert from "../../Advert/Advert";
import FeaturedProd from "../../FeaturedProd/FeaturedProd";
import Brands from "../../Brands/Brands";
import Newsletter from "../../Newsletter/Newsletter";
import FeaturedProdMob from "../../FeaturedProdMob/FeaturedProdMob";
import "./HomePage.scss";
import FeaturedProdTab from "../../FeaturedProdTab/FeaturedProdTab";

const Homepage = () => {
  return (
    <div className="homepage max-w-7xl m-auto pt-10">
      <Hero />
      <Brands />
      <CuratedPicks />
      <div className="featbig">
        <FeaturedProd />
      </div>
      <div className="feattab">
        <FeaturedProdTab />
      </div>
      <div className="featmob">
        <FeaturedProdMob />
      </div>
      <Advert />
      <Newsletter />
    </div>
  );
};

export default Homepage;
