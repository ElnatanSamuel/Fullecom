import React from "react";
import "./Advert.scss";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Advert = () => {
  return (
    <div className="limited mt-16">
      <div className="advertleft">
        <img
          src="https://images.pexels.com/photos/6945619/pexels-photo-6945619.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
      </div>
      <div className="advertright">
        <span className="limit">LIMITED OFFER</span>
        <h1>35% off only this friday and get a special gift</h1>
        <button>
          Grab it now <ArrowForwardIcon sx={{ fontSize: "22px" }} />
        </button>
      </div>
    </div>
  );
};

export default Advert;
