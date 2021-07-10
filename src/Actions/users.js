import { AUTH_USER_ERROR, AUTH_USER_REQUEST, AUTH_USER_SUCCESS } from '../Const/Reducers';

export const getAuthUserInfo = (data) => async (dispatch) => {
    try {
        dispatch({ type: AUTH_USER_REQUEST });
        dispatch({ type: AUTH_USER_SUCCESS, payload: data });
      } catch (error) {
        dispatch({ type: AUTH_USER_ERROR, payload: error.message });
        console.log(error);
      }
    };
      