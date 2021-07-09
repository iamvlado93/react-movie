import { combineReducers } from 'redux';

import { createMovieReducer, fetchMovieReducer, deleteMovieReducer } from './movieReducer';

export default combineReducers({
  createMovieReducer,
  fetchMovieReducer,
  deleteMovieReducer,
});
