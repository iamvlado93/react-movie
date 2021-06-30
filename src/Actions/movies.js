import * as API from '../API';

export const getMovies = () => async (dispatch) => {
  try {
    const { data } = await API.fetchMovies();
    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (err) {
    console.log(err.message);
  }
};

export const createMovie = (movie) => async (dispatch) => {
  try {
    const { data } = await API.createMovie(movie);
    dispatch({ type: 'CREATE', payload: data });
  } catch (err) {
    console.log(err);
  }
};
