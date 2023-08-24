import { createSlice } from "@reduxjs/toolkit";

const itemCategory =
  localStorage.getItem("categoryItem") != null
    ? JSON.parse(localStorage.getItem("categoryItem"))
    : "";
const brandCat =
  localStorage.getItem("brandCategory") != null
    ? JSON.parse(localStorage.getItem("brandCategory"))
    : "";
const priceMax =
  localStorage.getItem("maxPrice") != null
    ? JSON.parse(localStorage.getItem("maxPrice"))
    : "";
const wantedMost =
  localStorage.getItem("mostWanted") != null
    ? JSON.parse(localStorage.getItem("mostWanted"))
    : "";
const sellerBest =
  localStorage.getItem("bestseller") != null
    ? JSON.parse(localStorage.getItem("bestseller"))
    : "";

const initialState = {
  maxPrice: priceMax,
  categoryItem: itemCategory,
  brandCategoryItem: brandCat,
  mostWantedItem: wantedMost,
  bestSellerItem: sellerBest,
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    CategoryFilter(state, action) {
      state.categoryItem = action.payload;
      state.brandCategoryItem = "";
      state.mostWantedItem = "";
      state.bestSellerItem = "";

      localStorage.setItem("categoryItem", JSON.stringify(state.categoryItem));
      localStorage.setItem("mostWanted", JSON.stringify(state.mostWantedItem));
      localStorage.setItem(
        "brandCategory",
        JSON.stringify(state.brandCategoryItem)
      );
      localStorage.setItem("bestseller", JSON.stringify(state.bestSellerItem));
    },
    BrandFilter(state, action) {
      state.brandCategoryItem = action.payload;
      state.categoryItem = "";
      state.mostWantedItem = "";
      state.bestSellerItem = "";
      localStorage.setItem("mostWanted", JSON.stringify(state.mostWantedItem));
      localStorage.setItem("categoryItem", JSON.stringify(state.categoryItem));
      localStorage.setItem(
        "brandCategory",
        JSON.stringify(state.brandCategoryItem)
      );
      localStorage.setItem("bestseller", JSON.stringify(state.bestSellerItem));
    },
    PriceFilter(state, action) {
      state.maxPrice = action.payload;

      localStorage.setItem("maxPrice", JSON.stringify(state.maxPrice));
    },

    mostWantedFilter(state, action) {
      state.mostWantedItem = action.payload;
      state.categoryItem = "";
      state.brandCategoryItem = "";
      state.bestSellerItem = "";

      localStorage.setItem("mostWanted", JSON.stringify(state.mostWantedItem));
      localStorage.setItem("bestseller", JSON.stringify(state.bestSellerItem));
      localStorage.setItem("categoryItem", JSON.stringify(state.categoryItem));
      localStorage.setItem(
        "brandCategory",
        JSON.stringify(state.brandCategoryItem)
      );
    },
    BestSellerFilter(state, action) {
      state.mostWantedItem = "";
      state.categoryItem = "";
      state.brandCategoryItem = "";
      state.bestSellerItem = action.payload;

      localStorage.setItem("categoryItem", JSON.stringify(state.categoryItem));
      localStorage.setItem(
        "brandCategory",
        JSON.stringify(state.brandCategoryItem)
      );
      localStorage.setItem("mostWanted", JSON.stringify(state.mostWantedItem));
      localStorage.setItem("bestseller", JSON.stringify(state.bestSellerItem));
    },

    ResetFilter(state) {
      state.categoryItem = "";
      state.brandCategoryItem = "";
      state.mostWantedItem = "";
      state.bestSellerItem = "";
      localStorage.setItem("categoryItem", JSON.stringify(state.categoryItem));
      localStorage.setItem(
        "brandCategory",
        JSON.stringify(state.brandCategoryItem)
      );
      localStorage.setItem("mostWanted", JSON.stringify(state.mostWantedItem));
      localStorage.setItem("bestseller", JSON.stringify(state.bestSellerItem));
    },
  },
});

export const {
  CategoryFilter,
  BrandFilter,
  PriceFilter,
  ResetFilter,
  mostWantedFilter,
  BestSellerFilter,
} = categorySlice.actions;

export default categorySlice.reducer;
