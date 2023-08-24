import React, { useState } from "react";
import "./Navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import { Link } from "react-router-dom";
import Cartpopup from "../CartPopup/Cartpopup";
import { useDispatch, useSelector } from "react-redux";
import { mostWantedFilter } from "../../redux/CategorySlice";

const Navbar = () => {
  const [cartPopup, setCartPopup] = useState(false);
  const dispatch = useDispatch();
  const isUserLogged = useSelector((state) => state.user.userIsLogged);
  const userDontExist = useSelector((state) => state.user.userDontExist);
  return (
    <div className="h-24 max-w-7xl m-auto">
      <div className="wrapper p-8">
        <div className="left">
          <Link to="/">
            <p className="sm:text-2xl lg:text-3xl text-black font-bold cursor-pointer">
              CLOTHES
            </p>
          </Link>
        </div>
        <div className="center">
          <ul>
            <Link to="/products">
              <li className="text-md font-medium cursor-pointer opacity-80">
                Shop
              </li>
            </Link>
            <Link to="/products">
              <li
                className="text-md font-medium cursor-pointer opacity-80"
                onClick={() => dispatch(mostWantedFilter("Most wanted"))}
              >
                Most wanted
              </li>
            </Link>
            <Link to="/cart">
              <li className="text-md font-medium cursor-pointer opacity-80">
                Cart
              </li>
            </Link>
            <Link to="#">
              <li className="text-md font-medium cursor-pointer opacity-80">
                Contact
              </li>
            </Link>
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
              {isUserLogged === false && userDontExist === true ? (
                <Link to="/account">
                  <PermIdentityOutlinedIcon className="righticons cursor-pointer" />
                </Link>
              ) : isUserLogged === true || userDontExist === false ? (
                <Link to="/account/user">
                  <PermIdentityOutlinedIcon className="righticons cursor-pointer" />
                </Link>
              ) : (
                <Link to="/account">
                  <PermIdentityOutlinedIcon className="righticons cursor-pointer" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="navcartpopup">{cartPopup ? <Cartpopup /> : null}</div>
    </div>
  );
};

export default Navbar;
