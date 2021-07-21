import { AUTH_USER_ERROR, AUTH_USER_REQUEST, AUTH_USER_SUCCESS } from "../Const/Reducers";

export const userAuthReducer = (state = { users: [] }, action) => {
    switch (action.type) {
      case AUTH_USER_REQUEST:
        return { ...state, loading: true };
      case AUTH_USER_SUCCESS:
        return { ...state, loading: false, users: action.payload };
      case AUTH_USER_ERROR:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };