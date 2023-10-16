import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { PizzaItemType, RootState } from '../../types';

export const getAllPizzasFromDb = createAsyncThunk<
  PizzaItemType[],
  string,
  { state: RootState; rejectValue: any }
>('pizzas/getAllPizzasFromDb', async (currentPage, thunkApi) => {
  const { getState } = thunkApi;
  const { categoryIndex, sortListIndex, sortItems } = getState().filterSlice;

  const params = new URLSearchParams([
    ['category', categoryIndex !== 0 ? categoryIndex.toString() : ''],
    ['sortBy', sortItems[sortListIndex].requestValue],
    ['order', sortItems[sortListIndex].order],
  ]);
  const url = `https://62f600ee612c13062b4441c2.mockapi.io/sneakers/pizzas?page=${currentPage}&limit=8`;

  try {
    const { data } = await axios.get<PizzaItemType[]>(url, { params });
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
});

// const url = `https://62f600ee612c13062b4441c2.mockapi.io/sneakers/pizzas?page=${currentPage}&limit=8&${category}&${sortBy}`;
