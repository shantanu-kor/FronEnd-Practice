import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { showCart: false, cartProducts: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
    addToCart(state, action) {
      const index = state.cartProducts.findIndex(
        (item) => item.key === action.payload.key
      );
      if (index === -1) {
        state.cartProducts = [
          { ...action.payload, quantity: 1, total: action.payload.price },
          ...state.cartProducts,
        ];
      } else {
        state.cartProducts[index] = {
          ...state.cartProducts[index],
          quantity: state.cartProducts[index].quantity + 1,
          total:
            state.cartProducts[index].total + state.cartProducts[index].price,
        };
      }
    },
    removeFromCart(state, action) {
      const index = state.cartProducts.findIndex(
        (item) => item.key === action.payload.key
      );
      if (state.cartProducts[index].quantity === 1) {
        state.cartProducts.splice(index, 1);
      } else {
        state.cartProducts[index].quantity =
          state.cartProducts[index].quantity - 1;
        state.cartProducts[index].total -= state.cartProducts[index].price
      }
    },
    setCart(state, action) {
        state.cartProducts = action.payload;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
