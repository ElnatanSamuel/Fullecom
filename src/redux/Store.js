import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Cartslice";
import categorySlice from "./CategorySlice";
import UserSlice from "./UserSlice";
import PaymentSlice from "./PaymentSlice";
import orderSlice from "./OrderSilce";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    category: categorySlice,
    user: UserSlice,
    payment: PaymentSlice,
    order: orderSlice,
  },
});

export default store;
