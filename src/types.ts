import { store } from './redux/store.js';

export type PizzaItemType = {
  imageUrl: string;
  price: number;
  sizes: Array<number>;
  title: string;
  types: Array<number>;
  id: string;
  category: number;
  count: number;
};
export type CartItemType = {
  id: string;
  title: string;
  type: string;
  size: number;
  imageUrl: string;
  price: number;
  count: number;
  category?: number | string;
};

type SortItems = {
  id: number;
  title: string;
  requestValue: string;
  order: string;
};

export interface CartItemState {
  cartItems: Array<CartItemType>;
}
export interface FilterState {
  sortItems: Array<SortItems>;
  sortListIndex: number;
  categoryItems: Array<string>;
  categoryIndex: number;
}
export interface PizzasState {
  items: Array<PizzaItemType>;
  isLoading: boolean;
  isError: boolean;
  searchValue: string;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
