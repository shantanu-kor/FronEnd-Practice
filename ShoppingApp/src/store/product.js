import { createSlice } from "@reduxjs/toolkit";

const initialProductState = {
  products: [
    {
      key: Math.random().toString(),
      title: "Test",
      price: 6,
      description: "This is a first product - amazing!",
    },
    {
        key: Math.random().toString(),
        title: "Book",
        price: 5,
        description: "This is the first book."
    },
  ],
};

const productSlice = createSlice({
  name: "products",
  initialState: initialProductState,
  reducers: {
    addProduct(state, action) {
      state.products = [action.payload, ...state.products];
    },
  },
});

export const productActions = productSlice.actions;

export default productSlice.reducer;
