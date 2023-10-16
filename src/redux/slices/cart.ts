import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CartItemState, CartItemType } from '../../types';

const initialState: CartItemState = {
  cartItems: [],
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    removeItemsFromCart: (state, action: PayloadAction<[]>) => {
      state.cartItems = action.payload;
    },
    addItemToCart: (state, action: PayloadAction<CartItemType>) => {
      const obj = action.payload;
      const cartItems = state.cartItems;
      const inCart = state.cartItems.some((item) => item.id === obj.id);

      if (inCart) {
        const res = cartItems.map((item) => {
          console.log({ obj, item });
          if (item.id === obj.id) {
            const count = item.count;
            return { ...obj, count: count + 1 };
          }
          return item;
        });
        state.cartItems = res;
      } else state.cartItems = [obj, ...state.cartItems];
    },
    removeOnePizza: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const cartItems = state.cartItems;
      const res = cartItems.map((item) => {
        let currentItem = item.id === id && item.count;
        if (currentItem && currentItem > 1) {
          return { ...item, count: currentItem - 1 };
        }
        return item;
      });
      state.cartItems = res;
    },

    removeItemFromCart: (state, action: PayloadAction<string>) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
    },
  },
});
export const { addItemToCart, removeItemFromCart, removeOnePizza, removeItemsFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
