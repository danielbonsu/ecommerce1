import { ADD_PRODUCT_TO_CART } from '../types';
import axios from 'axios';

export const addCartItem = (productID, qty) => async (
  dispatch
) => {
  try {
    const { data } = await axios.get(
      `/products/product/${productID}`
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
