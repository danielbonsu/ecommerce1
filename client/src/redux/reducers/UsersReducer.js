import {
  USER_AUTH_REQUEST,
  USER_AUTH_SUCCESS,
  USER_AUTH_FAIL,
  USER_SIGN_OUT,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
} from '../types';

export const getCurrentUser = (
  state = {
    userInfo: null,
    loading: false,
    userAuthenticated: false,
    errors: [],
  },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case USER_AUTH_REQUEST:
    case REGISTER_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case USER_AUTH_SUCCESS:
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        userInfo: payload,
        loading: false,
        userAuthenticated: true,
      };

    case USER_AUTH_FAIL:
    case REGISTER_USER_FAIL:
      return {
        ...state,
        loading: false,
        userInfo: null,
        userAuthenticated: false,
        errors: payload,
      };

    case USER_SIGN_OUT:
      return {
        ...state,
        loading: false,
        userInfo: null,
        userAuthenticated: false,
      };

    default:
      return state;
  }
};
