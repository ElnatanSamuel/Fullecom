import React from "react";
import "./Products.scss";
import LeftCategory from "../../ProductCategory/LeftCategory";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import Advert from "../../Advert/Advert";
import Newsletter from "../../Newsletter/Newsletter";
import ProductList from "../../ProductList/ProductList";

const Products = () => {
  const productsitems = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/6311445/pexels-photo-6311445.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Yellow sweater",
      onSale: true,
      originalPrice: 50,
      currentPrice: 100,
    },
    {
      id: 6,
      img: "https://www.insidehook.com/wp-content/uploads/2022/01/Public-Rec-Shirt-Jacket.jpg?w=1500&resize=1500%2C1000",
      title: "Black Shirt",
      onSale: false,
      originalPrice: 75,
      currentPrice: 0,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/6311274/pexels-photo-6311274.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Sweatpants and hoodie",
      onSale: false,
      originalPrice: 200,
      currentPrice: 0,
    },
    {
      id: 5,
      img: "https://www.mensjournal.com/.image/t_share/MTk2MTM3MjMxODU2NzcyNjEz/14-frame-heritage-jacket-in-supermoon.jpg",
      title: "Black jacket",
      onSale: true,
      originalPrice: 125,
      currentPrice: 250,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/6311443/pexels-photo-6311443.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "T-Shirt",
      onSale: false,
      originalPrice: 23,
      currentPrice: 0,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/6311604/pexels-photo-6311604.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Hoodie",
      onSale: true,
      originalPrice: 40,
      currentPrice: 80,
    },
  ];
  return (
    <div className="max-w-7xl m-auto px-8 mt-10">
      <div className="menu">
        <p>Home</p> <span>&#62;</span>
        <span className="menunegative">Browse products</span>
      </div>

      <div className="products mb-36">
        <LeftCategory />
        <div className="right mt-2">
          <div className="results mb-10">
            <p>Showing 0 result from total 0 for "woman"</p>
            <div className="sortby">
              <p>Sort by</p>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <p className="sorttitle">Popularity</p>
                  </Typography>
                </AccordionSummary>
              </Accordion>
            </div>
          </div>
          <div className="list">
            {productsitems.map((items) => (
              <ProductList items={items} />
            ))}
          </div>
        </div>
      </div>
      <Advert />
      <Newsletter />
    </div>
  );
};

export default Products;
