import React from "react";
import "./ProductList.scss";

const ProductList = ({ items }) => {
  return (
    <div>
      <div className="listwrapper">
        <div className="toplist">
          <img src={items.img} alt="" />
          {items.onSale === true ? (
            <span className="listsale">SALE</span>
          ) : null}
        </div>
        <div className="bottomlist">
          <div className="leftlist">
            <p className="listtitle">{items.title}</p>
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
