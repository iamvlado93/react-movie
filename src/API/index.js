import axios from 'axios';

const url = '/profile';

export const fetchMovies = () => axios.get(url);
