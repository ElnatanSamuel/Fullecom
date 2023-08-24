import React, { useContext } from "react";
import "./Products.scss";
import LeftCategory from "../../ProductCategory/LeftCategory";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import Advert from "../../Advert/Advert";
import Newsletter from "../../Newsletter/Newsletter";
import ProductList from "../../ProductList/ProductList";
import ProductsData from "../../../productData.json";
import { CartContext } from "../../../context/CartContext";
import { useDispatch, useSelector } from "react-redux";
import {
  BestSellerFilter,
  ResetFilter,
  mostWantedFilter,
} from "../../../redux/CategorySlice";

const Products = () => {
  const dispatch = useDispatch();
  const categoryItems = useSelector((state) => state.category.categoryItem);
  const brandCategoryItems = useSelector(
    (state) => state.category.brandCategoryItem
  );
  const maxPrice = useSelector((state) => state.category.maxPrice);
  const mostWantedItem = useSelector((state) => state.category.mostWantedItem);
  const bestSellerItem = useSelector((state) => state.category.bestSellerItem);

  const priceFilter = ProductsData.filter(
    (item) => item.originalPrice >= maxPrice
  );

  const bestSellerFilter =
    bestSellerItem !== ""
      ? priceFilter.filter((items) => items.popularity >= 7)
      : priceFilter;
  const mostWantedFilters =
    mostWantedItem !== ""
      ? priceFilter.filter((items) => items.popularity >= 5)
      : priceFilter;

  const categoryFilter =
    categoryItems !== ""
      ? priceFilter.filter(
          (items) =>
            items.category === categoryItems || items.type === categoryItems
        )
      : priceFilter;

  const brandFilter =
    brandCategoryItems !== ""
      ? priceFilter.filter((items) => items.brand === brandCategoryItems)
      : priceFilter;

  return (
    <div className="max-w-7xl m-auto mt-10">
      <div className="menu px-8">
        <p>Home</p> <span>&#62;</span>
        <span className="menunegative">Browse products</span>
      </div>

      <div className="products px-8 mb-36">
        <LeftCategory />
        <div className="right mt-2">
          <div className="results mb-10">
            {categoryItems === "" &&
            brandCategoryItems === "" &&
            mostWantedItem === "" &&
            bestSellerItem === "" ? (
              <p>Showing all results</p>
            ) : (
              <p>
                Showing{" "}
                {categoryItems !== ""
                  ? categoryFilter.length
                  : brandCategoryItems !== ""
                  ? brandFilter.length
                  : mostWantedItem !== ""
                  ? mostWantedFilters.length
                  : bestSellerItem !== ""
                  ? bestSellerFilter.length
                  : null}{" "}
                result from total {ProductsData.length} for{" "}
                {categoryItems !== ""
                  ? categoryItems
                  : brandCategoryItems !== ""
                  ? brandCategoryItems
                  : mostWantedItem !== ""
                  ? mostWantedItem
                  : bestSellerItem !== ""
                  ? bestSellerItem
                  : null}
              </p>
            )}
            <div className="sortby">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <p className="sorttitle font-bold">Sort by</p>
                  </Typography>
                </AccordionSummary>
                <AccordionSummary>
                  <div className="flex flex-col gap-4">
                    <Typography>
                      <p onClick={() => dispatch(ResetFilter())}>None</p>{" "}
                    </Typography>
                    <Typography>
                      <p
                        onClick={() =>
                          dispatch(mostWantedFilter("Most wanted"))
                        }
                      >
                        Most Wanted
                      </p>
                    </Typography>
                    <Typography>
                      <p
                        onClick={() =>
                          dispatch(BestSellerFilter("Best seller"))
                        }
                      >
                        Best Seller
                      </p>
                    </Typography>
                  </div>
                </AccordionSummary>
              </Accordion>
            </div>
          </div>
          <div className="list">
            {categoryItems !== ""
              ? categoryFilter.map((items) => <ProductList items={items} />)
              : brandCategoryItems !== ""
              ? brandFilter.map((items) => <ProductList items={items} />)
              : mostWantedItem !== ""
              ? mostWantedFilters.map((items) => <ProductList items={items} />)
              : bestSellerItem !== ""
              ? bestSellerFilter.map((items) => <ProductList items={items} />)
              : priceFilter.map((items) => <ProductList items={items} />)}
          </div>
        </div>
      </div>
      <Advert />
      <Newsletter />
    </div>
  );
};

export default Products;
