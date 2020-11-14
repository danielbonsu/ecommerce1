import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCT_DETAILS_REQUEST,
  GET_PRODUCT_DETAILS_SUCCESS,
  FILTER_PRODUCTS,
} from '../types';
import axios from 'axios';

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_PRODUCTS_REQUEST,
    });
    const { data } = await axios.get('/api/products');
    dispatch({
      type: GET_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_PRODUCTS_FAIL,
      payload: error.message
        ? error.message.response
        : error,
    });
    console.log(error);
  }
};

export const getProductDetails = (id) => async (
  dispatch
) => {
  try {
    dispatch({
      type: GET_PRODUCT_DETAILS_REQUEST,
    });

    const { data } = await axios.get(
      `/api/products/product/${id}`
    );

    dispatch({
      type: GET_PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_PRODUCTS_FAIL,
      payload: error.message
        ? error.message.response
        : error,
    });
    console.log(error);
  }
};

export const filterProducts = (filteredText) => (
  dispatch
) => {
  dispatch({
    type: FILTER_PRODUCTS,
    payload: filteredText,
  });
};
