import axios from 'axios';

const url = '/profile';
const urlAdmmin = '/admin';
const urlMovieId = '/profile/:id';

export const fetchMovies = () => axios.get(url);
export const createMovie = (newMovie) => axios.post(urlAdmmin, newMovie);
export const getMovieById = () => axios.get(urlMovieId);
