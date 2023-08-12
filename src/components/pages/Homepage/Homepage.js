import React from "react";
import Hero from "../../Hero/Hero";
import CuratedPicks from "../../Curated/CuratedPicks";
import Advert from "../../Advert/Advert";
import FeaturedProd from "../../FeaturedProd/FeaturedProd";
import Brands from "../../Brands/Brands";
import Newsletter from "../../Newsletter/Newsletter";

const Homepage = () => {
  return (
    <div className="homepage max-w-7xl m-auto pt-10">
      <Hero />
      <Brands />
      <CuratedPicks />
      <FeaturedProd />
      <Advert />
      <Newsletter />
    </div>
  );
};

export default Homepage;
