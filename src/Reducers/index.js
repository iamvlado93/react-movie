import { combineReducers } from 'redux';

import { createMovieReducer, fetchMovieReducer, deleteMovieReducer } from './movieReducer';
import {userAuthReducer} from './userReducer'

export default combineReducers({
  createMovieReducer,
  fetchMovieReducer,
  deleteMovieReducer,
  userAuthReducer,
});
