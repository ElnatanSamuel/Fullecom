import React, { useState } from "react";
import "./Navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import { Link } from "react-router-dom";
import Cartpopup from "../CartPopup/Cartpopup";

const Navbar = () => {
  const [cartPopup, setCartPopup] = useState(false);
  return (
    <div className="h-24 max-w-7xl m-auto">
      <div className="wrapper p-8">
        <div className="left">
          <Link to="/">
            <p className="text-3xl text-black font-bold cursor-pointer">
              CLOTHES
            </p>
          </Link>
        </div>
        <div className="center">
          <ul>
            <li className="text-md font-medium cursor-pointer opacity-80">
              Shop
            </li>
            <li className="text-md font-medium cursor-pointer opacity-80">
              Most wanted
            </li>
            <li className="text-md font-medium cursor-pointer opacity-80">
              New arraival
            </li>
            <li className="text-md font-medium cursor-pointer opacity-80">
              Brands
            </li>
          </ul>
        </div>
        <div className="right">
          <div className="search">
            <input type="text" placeholder="Search" />
            <SearchIcon className="searchicon" />
          </div>
          <div className="icons">
            <div className="icon">
              <ShoppingCartOutlinedIcon
                className="righticons cursor-pointer"
                onClick={(e) => setCartPopup(!cartPopup)}
              />
            </div>
            <div className="icon">
              <Link to="/account">
                {" "}
                <PermIdentityOutlinedIcon className="righticons cursor-pointer" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="navcartpopup">{cartPopup ? <Cartpopup /> : null}</div>
    </div>
  );
};

export default Navbar;
