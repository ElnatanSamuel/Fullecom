import React, { useContext, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Slider from "@mui/material/Slider";
import { CartContext } from "../../context/CartContext";
import { useDispatch } from "react-redux";
import {
  BrandFilter,
  CategoryFilter,
  PriceFilter,
  ResetFilter,
} from "../../redux/CategorySlice";

const LeftCategory = () => {
  const [priceRange, setPriceRange] = useState(0);
  const dispatch = useDispatch();

  const {
    categoryItems,
    setCategoryItems,
    brandCategoryItems,
    setBrandCategoryItems,
    setMaxPrice,
    maxPrice,
  } = useContext(CartContext);
  const allCategory = [
    {
      item: "Category",
      catsubcat: ["Woman", "Men", "Kids", "Sporty", "Casual"],
    },
    {
      item: "Brands",
      brandsubcat: [
        "Gucci",
        "Chanel",
        "D&G",
        "Adidas",
        "Calvin Klein",
        "Guess",
        "Levi's",
        "Versace",
        "Balenciaga",
      ],
    },
  ];

  const handleCategorySelect = (category) => {
    dispatch(CategoryFilter(category));
  };

  const handleCategoryReset = () => {
    dispatch(ResetFilter());
  };

  const handleBrandSelect = (category) => {
    dispatch(BrandFilter(category));
  };

  const handlePriceChange = (e) => {
    dispatch(PriceFilter(e.target.value));
    setPriceRange(e.target.value);
  };

  return (
    <div className="left">
      {allCategory.map((cat) => (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              <p className="cattitle">{cat.item}</p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="subcategory">
              <p className="catsub" onClick={() => handleCategoryReset()}>
                All
              </p>
              {cat.catsubcat
                ? cat.catsubcat.map((subcategory) => (
                    <Typography>
                      <p
                        className="catsub"
                        onClick={() => handleCategorySelect(subcategory)}
                      >
                        {subcategory}
                      </p>
                    </Typography>
                  ))
                : null}
              {cat.brandsubcat
                ? cat.brandsubcat.map((subcategory) => (
                    <Typography>
                      <p
                        className="catsub"
                        onClick={() => handleBrandSelect(subcategory)}
                      >
                        {subcategory}
                      </p>
                    </Typography>
                  ))
                : null}
            </div>
          </AccordionDetails>
        </Accordion>
      ))}

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <p className="catprice">Price</p>
          </Typography>
        </AccordionSummary>
        <div className="subcategory">
          <AccordionDetails>
            <Typography>
              <div className="pricerange">
                ${priceRange}
                <input
                  type="range"
                  min={0}
                  max={1000}
                  onChange={(e) => handlePriceChange(e)}
                />
                $1000
              </div>
            </Typography>
          </AccordionDetails>
        </div>
      </Accordion>
    </div>
  );
};

export default LeftCategory;
