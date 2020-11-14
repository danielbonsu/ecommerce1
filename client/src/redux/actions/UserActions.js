import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_FAIL,
  REGISTER_USER_SUCCESS,
  USER_AUTH_REQUEST,
  USER_AUTH_SUCCESS,
  USER_AUTH_FAIL,
  USER_SIGN_OUT,
} from '../types';

import axios from 'axios';

export const registerUser = (user_Obj) => async (
  dispatch
) => {
  try {
    dispatch({
      type: REGISTER_USER_REQUEST,
    });

    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    };

    const userData = JSON.stringify(user_Obj);

    const { data } = await axios.post(
      '/api/auth/register',
      userData,
      config
    );

    dispatch({
      type: REGISTER_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error,
    });
  }
};

// sign in

export const signIN = (user_obj) => async (dispatch) => {
  try {
    dispatch({
      type: USER_AUTH_REQUEST,
    });

    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    };

    const body = JSON.stringify(user_obj);

    const { data } = await axios.post(
      '/api/auth/signIN',
      body,
      config
    );

    dispatch({
      type: USER_AUTH_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: USER_AUTH_FAIL,
      payload: error,
    });
  }
};

export const signOUT = () => (dispatch) => {
  dispatch({
    type: USER_SIGN_OUT,
  });
};
