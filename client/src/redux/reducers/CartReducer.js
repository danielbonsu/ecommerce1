import {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  INCREASE_CART_QTY,
  DECREASE_CART_QTY,
} from '../types';

export const cartReducer = (
  state = { cart: [] },
  action
) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      const itemExists = state.cart.find(
        (item) => item._id === action.payload._id
      );

      if (itemExists) {
        return {
          ...state,
          cart: state.cart.map((product) =>
            product._id === itemExists._id
              ? action.payload
              : product
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      }

    case REMOVE_PRODUCT_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(
          (item) => item._id !== action.payload._id
        ),
      };

    case INCREASE_CART_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item._id === action.payload._id
            ? { ...item, qty: Number(item.qty) + 1 }
            : item
        ),
      };

    case DECREASE_CART_QTY:
      console.log(action.payload.qty);
      if (action.payload.qty < 1) {
        console.log('yes quantiy is smaller');
        return {
          ...state,
          cart: state.cart.filter(
            (item) => item._id !== action.payload._id
          ),
        };
      } else {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item._id === action.payload._id
              ? { ...item, qty: item.qty - 1 }
              : item
          ),
        };
      }

    default:
      return state;
  }
};
