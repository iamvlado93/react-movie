import axios from 'axios';

import {
  CREATE_MOVIE_ERROR,
  CREATE_MOVIE_REQUEST,
  CREATE_MOVIE_SUCCESS,
  FETCH_MOVIE_ERROR,
  FETCH_MOVIE_REQUEST,
  FETCH_MOVIE_SUCCESS,
  MOVIE_INFO_ERROR,
  MOVIE_INFO_REQUEST,
  MOVIE_INFO_SUCCESS,
} from '../Const/Reducers';

export const getMovies = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_MOVIE_REQUEST });
    const { data } = await axios.get('/profile');
    dispatch({ type: FETCH_MOVIE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_MOVIE_ERROR, payload: error.message });
    console.log(error);
  }
};

export const createMovie = (movie) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_MOVIE_REQUEST });
    const { data } = await axios.post('/admin');
    dispatch({ type: CREATE_MOVIE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CREATE_MOVIE_ERROR, payload: error.message });
  }
};

export const movieInfo = (movieId) => async (dispatch) => {
  try {
    dispatch({ type: MOVIE_INFO_REQUEST, payload: movieId });
    const { data } = await axios.get('/profile/' + movieId);
    dispatch({ type: MOVIE_INFO_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: MOVIE_INFO_ERROR, payload: error.message });
  }
};
