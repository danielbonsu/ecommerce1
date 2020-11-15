import {
  ADD_PRODUCT_TO_CART,
  INCREASE_CART_QTY,
  DECREASE_CART_QTY,
  REMOVE_PRODUCT_FROM_CART,
} from '../types';
import axios from 'axios';

export const addCartItem = (productID, qty) => async (
  dispatch
) => {
  try {
    const { data } = await axios.get(
      `/api/products/product/${productID}`
    );

    const product = { ...data, qty };

    dispatch({
      type: ADD_PRODUCT_TO_CART,
      payload: product,
    });
  } catch (error) {
    console.log(error);
  }
};

export const removeCartItem = (cartItem) => (dispatch) => {
  dispatch({
    type: REMOVE_PRODUCT_FROM_CART,
    payload: cartItem,
  });
};

export const increaseCartQTY = (cartItem) => (dispatch) => {
  dispatch({
    type: INCREASE_CART_QTY,
    payload: cartItem,
  });
};

export const decreaseCartQTY = (cartItem) => (dispatch) => {
  if (cartItem.qty === 1) {
    dispatch({
      type: REMOVE_PRODUCT_FROM_CART,
      payload: cartItem,
    });
  } else {
    dispatch({
      type: DECREASE_CART_QTY,
      payload: cartItem,
    });
  }
};
