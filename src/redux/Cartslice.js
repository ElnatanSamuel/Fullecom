import { createSlice } from "@reduxjs/toolkit";

const itemCart =
  localStorage.getItem("cartItems") != null
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];
const amountSubtotal =
  localStorage.getItem("subtotalAmount") != null
    ? JSON.parse(localStorage.getItem("subtotalAmount"))
    : 0;

const initialState = {
  cartItems: itemCart,
  subTotalAmount: amountSubtotal,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const ItemExists = state.cartItems.find(
        (Existingproduct) => Existingproduct.id === action.payload.id
      );

      if (ItemExists) {
        state.subTotalAmount +=
          ItemExists.originalPrice *
          (ItemExists.quantity - (ItemExists.quantity - 1));
        ItemExists.quantity += 1;
      } else {
        state.cartItems.push(action.payload);
        state.subTotalAmount = state.cartItems.reduce(
          (total, item) => total + item.originalPrice * item.quantity,
          0
        );
      }

      localStorage.setItem(
        "cartItems",
        JSON.stringify(state.cartItems.map((item) => item))
      );
      localStorage.setItem(
        "subtotalAmount",
        JSON.stringify(state.subTotalAmount)
      );
    },

    deleteFromCart(state, action) {
      const id = action.payload;
      const deletedItem = state.cartItems.find((prod) => prod.id === id);
      if (deletedItem) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      }
      state.subTotalAmount = state.cartItems.reduce(
        (total, item) => total + item.originalPrice * item.quantity,
        0
      );

      localStorage.setItem(
        "cartItems",
        JSON.stringify(state.cartItems.map((item) => item))
      );
      localStorage.setItem(
        "subtotalAmount",
        JSON.stringify(state.subTotalAmount)
      );
    },

    removeAllFromCart(state) {
      state.cartItems = [];
      state.subTotalAmount = 0;
      localStorage.setItem(
        "cartItems",
        JSON.stringify(state.cartItems.map((item) => item))
      );
      localStorage.setItem(
        "subtotalAmount",
        JSON.stringify(state.subTotalAmount)
      );
    },

    decreaseItemQuantity(state, action) {
      const itemExist = state.cartItems.find(
        (prod) => prod.id === action.payload
      );

      if (itemExist) {
        if (itemExist.quantity >= 2) {
          state.subTotalAmount -= itemExist.originalPrice * itemExist.quantity;
          itemExist.quantity -= 1;

          state.subTotalAmount += itemExist.originalPrice * itemExist.quantity;
        } else {
          return;
        }
      }

      localStorage.setItem(
        "subtotalAmount",
        JSON.stringify(state.subTotalAmount)
      );
    },
    increaseItemQuantity(state, action) {
      const itemExist = state.cartItems.find(
        (prod) => prod.id === action.payload
      );

      if (itemExist) {
        state.subTotalAmount -= itemExist.originalPrice * itemExist.quantity;
        itemExist.quantity += 1;
        state.subTotalAmount += itemExist.originalPrice * itemExist.quantity;
      }

      localStorage.setItem(
        "subtotalAmount",
        JSON.stringify(state.subTotalAmount)
      );
    },
  },
});

export const {
  addToCart,
  deleteFromCart,
  removeAllFromCart,
  decreaseItemQuantity,
  increaseItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
