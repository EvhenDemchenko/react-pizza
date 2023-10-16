import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './slices/filter.ts';
import pizzasSlice from './slices/pizzas.ts';
import cartSlice from './slices/cart.ts';
import thunk from 'redux-thunk';

export const store = configureStore({
  reducer: { filterSlice, pizzasSlice, cartSlice },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), thunk],
});
