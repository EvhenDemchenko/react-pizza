import { setCartItems } from '../slices/cart.js';

export const addPizzaToCart = (obj) => (dispatch, getState) => {
  const cartItems = getState().cartSlice.cartItems;
  const inCart = cartItems.some((item) => item.id === obj.id);
  if (inCart) {
    return dispatch(
      setCartItems(
        cartItems.map((item, index) => {
          if (item.id === obj.id) {
            const count = item.count;
            return { ...obj, count: count + 1 };
          }
          return item;
        }),
      ),
    );
  }
  return dispatch(setCartItems([...cartItems, obj]));
};

export const removeOnePizza = (id) => (dispatch, getState) => {
  const cartItems = getState().cartSlice.cartItems;
  const res =
    cartItems &&
    cartItems.map((item, index, arr) => {
      let currentItem = item.id === id && item.count;
      if (currentItem > 1) {
        return { ...item, count: currentItem - 1 };
      }
      return item;
    });
  dispatch(setCartItems(res));
};
