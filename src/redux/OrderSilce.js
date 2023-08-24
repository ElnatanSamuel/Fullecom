import { createSlice } from "@reduxjs/toolkit";

const orderdetail =
  localStorage.getItem("orderdetail") != null
    ? JSON.parse(localStorage.getItem("orderdetail"))
    : {};

const initialState = {
  orderDetails: orderdetail,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrderDetail(state, action) {
      state.orderDetails = action.payload;

      localStorage.setItem("orderdetail", JSON.stringify(state.orderDetails));
    },
  },
});

export const { addOrderDetail } = orderSlice.actions;

export default orderSlice.reducer;
