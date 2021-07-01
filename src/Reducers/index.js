import { combineReducers } from 'redux';

import { createMovieReducer, fetchMovieReducer, movieDetailsReducer } from './movieReducer';

export default combineReducers({
  createMovieReducer,
  fetchMovieReducer,
  movieDetailsReducer,
});
