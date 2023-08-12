import React from "react";
import "./CuratedPicks.scss";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import { Link } from "react-router-dom";

const CuratedPicks = () => {
  const picks = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/7202767/pexels-photo-7202767.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "Best seller",
    },

    {
      id: 2,
      img: "https://images.pexels.com/photos/6311719/pexels-photo-6311719.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "Shop men",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/7890025/pexels-photo-7890025.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "Shop women",
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/8945170/pexels-photo-8945170.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "Shop casual",
    },
  ];

  return (
    <div className="mt-16 px-2 ">
      <h1 className="text-3xl font-medium">Currated picks</h1>
      <div className="curate mt-6">
        {picks.map((item) => (
          <div className="curateitem" key={item.id}>
            <img src={item.img} alt="" />
            <div className="cover"></div>
            <div className="btn">
              <Link to="/products">
                <button>
                  {item.desc} <ArrowForwardOutlinedIcon />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CuratedPicks;
