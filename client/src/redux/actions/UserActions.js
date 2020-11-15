import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_FAIL,
  REGISTER_USER_SUCCESS,
  USER_AUTH_REQUEST,
  USER_AUTH_SUCCESS,
  USER_AUTH_FAIL,
  USER_SIGN_OUT,
  REMOVE_ALERT_MESSAGE,
} from '../types';

import axios from 'axios';
import { v4 as uuid } from 'uuid';

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
    const errors = {
      id: uuid,
      message: error,
    };
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: errors,
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
    const errors = {
      id: uuid(),
      error: error.response.data,
    };
    dispatch({
      type: USER_AUTH_FAIL,
      payload: errors,
    });

    setTimeout(() => {
      dispatch({
        type: REMOVE_ALERT_MESSAGE,
        payload: errors.id,
      });
    }, 5000);
  }
};

export const signOUT = () => (dispatch) => {
  dispatch({
    type: USER_SIGN_OUT,
  });
};
