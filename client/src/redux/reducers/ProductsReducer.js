import {
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_FAIL,
  GET_PRODUCT_DETAILS_REQUEST,
  GET_PRODUCT_DETAILS_SUCCESS,
  GET_PRODUCTS_DETAILS_FAIL,
} from '../types';

export const getProducts = (
  state = {
    products: [],
    product: [],
    loading: false,
    errors: [],
  },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case GET_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: payload,
      };

    case GET_PRODUCTS_FAIL:
      return {
        ...state,
        errors: payload,
      };

    case GET_PRODUCT_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        product: payload,
      };

    case GET_PRODUCTS_DETAILS_FAIL:
      return {
        ...state,
        errors: payload,
      };

    default:
      return state;
  }
};
