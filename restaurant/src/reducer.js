import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  cartCount: 0,
};
const cartreducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      //   console.log(action.payload);
      state.cart = [...state.cart, action.payload];
      state.cartCount = state.cart.length;
    },
    removeItem: (state, action) => {
      let indexTodelete = action.payload;
      state.cart = state.cart.filter((val, index) => index !== indexTodelete);
    },
    orderItem: (state, action) => {
      state.cart = [];
    },
  },
});
export const { addToCart, removeItem, orderItem } = cartreducer.actions;
export const cartReducer = cartreducer.reducer;
