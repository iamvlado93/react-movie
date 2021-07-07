import axios from 'axios';

const urlAdmin = 'http://localhost:5000/admin';
const urlAllMovies = 'http://localhost:5000/profile';
const urlDeleteMovie = 'http://localhost:5000/delete/:id';

export const createMovie = (newMovie) => axios.post(urlAdmin, newMovie);
export const fetchMovies = () => axios.get(urlAllMovies);
export const deleteMovie = (id) => axios.delete(urlDeleteMovie, id);
