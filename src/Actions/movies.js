import * as API from '../API';

const getMovies = () => async (dispatch) => {
  try {
    const { data } = await API.fetchMovies();
    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (err) {
    console.log(err.message);
  }
};

export default getMovies;
