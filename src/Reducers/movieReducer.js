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

export const fetchMovieReducer = (state = { movies: [] }, action) => {
  switch (action.type) {
    case FETCH_MOVIE_REQUEST:
      return { ...state, loading: true };
    case FETCH_MOVIE_SUCCESS:
      return { movies: action.payload };
    case FETCH_MOVIE_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const createMovieReducer = (state = { movies: [] }, action) => {
  switch (action.type) {
    case CREATE_MOVIE_REQUEST:
      return { ...state, loading: true };
    case CREATE_MOVIE_SUCCESS:
      return { loading: false, movies: action.payload };
    case CREATE_MOVIE_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const movieDetailsReducer = (state = { movie: {} }, action) => {
  switch (action.type) {
    case MOVIE_INFO_REQUEST:
      return { ...state, loading: true };
    case MOVIE_INFO_SUCCESS:
      return { loading: false, movie: action.payload };
    case MOVIE_INFO_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
