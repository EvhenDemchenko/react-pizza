import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartItems: (state, action) => {
      state.cartItems = action.payload;
    },
    removeItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
    },
  },
});
export const { setCartItems, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
