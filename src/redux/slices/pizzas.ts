import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getAllPizzasFromDb } from '../thunk/thunkPizzas.ts';
import { PizzasState } from '../../types.ts';

const initialState: PizzasState = {
  items: [],
  isLoading: false,
  isError: false,
  searchValue: '',
};

const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
  extraReducers: (bulder) => {
    bulder.addCase(getAllPizzasFromDb.pending, (state) => {
      state.isLoading = true;
    });
    bulder.addCase(getAllPizzasFromDb.fulfilled, (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    });
    bulder.addCase(getAllPizzasFromDb.rejected, (state) => {
      state.isError = true;
    });
  },
});

export const { setSearchValue } = pizzasSlice.actions;
export default pizzasSlice.reducer;
