import React from "react";
import "./ProductList.scss";
import { Link } from "react-router-dom";

const ProductList = ({ items }) => {
  return (
    <div>
      <div className="listwrapper">
        <div className="toplist">
          <Link to={"/product/" + items.id}>
            <img src={items.image[0]} alt="" />
          </Link>
          {items.onSale === true ? (
            <span className="listsale">SALE</span>
          ) : null}
        </div>
        <div className="bottomlist">
          <div className="leftlist">
            <Link to={"/product/" + items.id}>
              <p className="listtitle">{items.title}</p>
            </Link>
            <span className="pt-16 text-sm opacity-6">{items.color}</span>
          </div>
          <div className="rightlist">
            <p className="originalpricelist">${items.originalPrice}</p>
            {items.currentPrice > 0 ? (
              <p className="currentpricelist">${items.currentPrice}</p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
