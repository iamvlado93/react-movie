import axios from 'axios';

const url = '/profile';
const urlAdmmin = '/admin';

export const fetchMovies = () => axios.get(url);
export const createMovie = (newMovie) => axios.post(urlAdmmin, newMovie);
