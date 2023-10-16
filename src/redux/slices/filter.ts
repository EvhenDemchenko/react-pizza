import { createSlice , PayloadAction } from '@reduxjs/toolkit';
import { FilterState } from '../../types';

const initialState:FilterState = {
  sortItems: [
    { id: 0, title: 'популярности asc', requestValue: 'rating', order: 'asc' },
    { id: 1, title: 'популярности desc', requestValue: 'rating', order: 'desc' },
    { id: 3, title: 'цене asc', requestValue: 'price', order: 'asc' },
    { id: 4, title: 'цене desc', requestValue: 'price', order: 'desc' },
    { id: 5, title: 'алфавиту asc', requestValue: 'title', order: 'asc' },
    { id: 6, title: 'алфавиту desc', requestValue: 'title', order: 'desc' },
  ],
  sortListIndex: 0,
  categoryItems: ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'],
  categoryIndex: 0,
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setActiveSortType: (state, action:PayloadAction<number>) => {
      state.sortListIndex = action.payload;
    }, 
    setActiveCategory: (state, action:PayloadAction<number>) => {
      state.categoryIndex = action.payload;
    },
  },
});

export const { setActiveSortType, setActiveCategory } = filterSlice.actions;
export default filterSlice.reducer;
