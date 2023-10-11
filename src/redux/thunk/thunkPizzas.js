import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllPizzasFromDb = createAsyncThunk(
  'pizzas/getAllPizzasFromDb',
  async (currentPage, { getState }) => {
    const { categoryIndex, sortListIndex, sortItems } = getState().filterSlice;

    const params = new URLSearchParams([
      ['category', categoryIndex !== 0 ? categoryIndex : ''],
      ['sortBy', sortItems[sortListIndex].requestValue],
      ['order', sortItems[sortListIndex].order],
    ]);
    // const url = `https://62f600ee612c13062b4441c2.mockapi.io/sneakers/pizzas?page=${currentPage}&limit=8&${category}&${sortBy}`;
    const url = `https://62f600ee612c13062b4441c2.mockapi.io/sneakers/pizzas?page=${currentPage}&limit=8`;

    try {
      const responce = await axios.get(url, { params });
      return responce.data;
    } catch (error) {
      console.log(error);
    }
  },
);
