import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../types.ts';

const selector = {
  //search
  searchValue: (state:RootState) => state.pizzasSlice.searchValue,
  //sort
  sortIndex: (state:RootState) => state.filterSlice.sortListIndex,
  sortItems: (state:RootState) => state.filterSlice.sortItems,
  categoryItems: (state:RootState) => state.filterSlice.categoryItems,
  categoryIndex: (state:RootState) => state.filterSlice.categoryIndex,
  //pizzas
  allPizzas: (state:RootState) => state.pizzasSlice.items,
  isLoading: (state:RootState) => state.pizzasSlice.isLoading,
  isError: (state:RootState) => state.pizzasSlice.isError,
  //cart
  cartItems: (state:RootState) => state.cartSlice.cartItems,
};

const activeSortItem = createSelector([selector.sortItems, selector.sortIndex], (items, index) => {
  return items[index].title;
});

const memoPizzaItems = createSelector(
  [selector.allPizzas, selector.searchValue],
  (pizzaItems, searchValue) => {
    return pizzaItems.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase()),
    );
  },
);
const memoCartItemsSum = createSelector([selector.cartItems], (items) => {
  const res = items.reduce((acc, item) => item.price * item.count + acc, 0);
  return res;
});
const memoCartItemsCount = createSelector([selector.cartItems], (items) => {
  return items.reduce((acc, item) => item.count + acc, 0);
});

const _all = { ...selector, activeSortItem, memoPizzaItems, memoCartItemsSum, memoCartItemsCount };
export default _all;
