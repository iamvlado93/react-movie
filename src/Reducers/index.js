import { combineReducers } from 'redux';

import { createMovieReducer, fetchMovieReducer } from './movieReducer';

export default combineReducers({
  createMovieReducer,
  fetchMovieReducer,
});
