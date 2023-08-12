import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Slider from "@mui/material/Slider";

const LeftCategory = () => {
  const allCategory = [
    {
      item: "Category",
      subcat: ["Woman", "Men", "Kids", "Sporty", "Casual"],
    },
    {
      item: "Brands",
      subcat: [
        "Gucci",
        "Chanel",
        "D&G",
        "Adidas",
        "Calvin Klein",
        "Guess",
        "Levis",
        "Versace",
      ],
    },
    {
      item: "Size",
      subcat: ["Small", "Medium", "Large", "XL", "XXL"],
    },
  ];

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
              {cat.subcat ? (
                cat.subcat.map((subcategory) => (
                  <Typography>
                    <p className="catsub">{subcategory}</p>
                  </Typography>
                ))
              ) : (
                <span className="slider">$0{cat.slider}$1000</span>
              )}
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
                $0
                <input type="range" />
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
