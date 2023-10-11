import { createSlice } from '@reduxjs/toolkit';
import { getAllPizzasFromDb } from '../thunk/thunkPizzas.js';

const initialState = {
  items: [],
  isLoading: false,
  isError: false,
  searchValue: '',
};

const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
  extraReducers: (bulder) => {
    bulder.addCase(getAllPizzasFromDb.pending, (state, action) => {
      state.isLoading = true;
    });
    bulder.addCase(getAllPizzasFromDb.fulfilled, (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    });
    bulder.addCase(getAllPizzasFromDb.rejected, (state, action) => {
      state.isError = true;
    });
  },
});

export const { setSearchValue } = pizzasSlice.actions;
export default pizzasSlice.reducer;
