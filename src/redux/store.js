import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './slices/filter.js';
import pizzasSlice from './slices/pizzas.js';
import cartSlice from './slices/cart.js';
import thunk from 'redux-thunk';

export const store = configureStore({
  reducer: { filterSlice, pizzasSlice, cartSlice },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), thunk],
});
