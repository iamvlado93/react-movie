import axios from 'axios';

const urlAdmin = 'http://localhost:5000/admin';
const urlAllMovies = 'http://localhost:5000/profile';

export const createMovie = (newMovie) => axios.post(urlAdmin, newMovie);
export const fetchMovies = () => axios.get(urlAllMovies);
