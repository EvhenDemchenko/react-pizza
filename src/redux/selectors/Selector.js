import { createSelector } from '@reduxjs/toolkit';

const selector = {
  //search
  searchValue: (state) => state.pizzasSlice.searchValue,
  //sort
  sortIndex: (state) => state.filterSlice.sortListIndex,
  sortItems: (state) => state.filterSlice.sortItems,
  categoryItems: (state) => state.filterSlice.categoryItems,
  categoryIndex: (state) => state.filterSlice.categoryIndex,
  //pizzas
  allPizzas: (state) => state.pizzasSlice.items,
  isLoading: (state) => state.pizzasSlice.isLoading,
  isError: (state) => state.pizzasSlice.isError,
  //cart
  cartItems: (state) => state.cartSlice.cartItems,
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
