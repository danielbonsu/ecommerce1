import {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
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
      console.log(itemExists);
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
          (item) => item._id !== action.payload
        ),
      };

    default:
      return state;
  }
};
