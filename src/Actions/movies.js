import * as API from '../API';

import {
  CREATE_MOVIE_ERROR,
  CREATE_MOVIE_REQUEST,
  CREATE_MOVIE_SUCCESS,
  FETCH_MOVIE_ERROR,
  FETCH_MOVIE_REQUEST,
  FETCH_MOVIE_SUCCESS,
} from '../Const/Reducers';

export const getMovies = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_MOVIE_REQUEST });
    const { data } = await API.fetchMovies();
    dispatch({ type: FETCH_MOVIE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_MOVIE_ERROR, payload: error.message });
    console.log(error);
  }
};

export const createNewMovie = (movie) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_MOVIE_REQUEST });
    const { data } = await API.createMovie(movie);
    dispatch({ type: CREATE_MOVIE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CREATE_MOVIE_ERROR, payload: error.message });
  }
};
