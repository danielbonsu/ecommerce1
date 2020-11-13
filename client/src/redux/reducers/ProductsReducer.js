import {
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_FAIL,
  GET_PRODUCT_DETAILS_REQUEST,
  GET_PRODUCT_DETAILS_SUCCESS,
  GET_PRODUCTS_DETAILS_FAIL,
  FILTER_PRODUCTS,
} from '../types';

export const getProducts = (
  state = {
    products: [],
    product: [],
    loading: false,
    filtered: [],
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

    case FILTER_PRODUCTS:
      return {
        ...state,
        filtered: state.products.filter((product) =>
          product.name.toLowerCase().includes(payload)
        ),
      };

    default:
      return state;
  }
};
