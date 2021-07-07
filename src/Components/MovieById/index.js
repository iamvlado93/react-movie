import React from 'react';
import { useSelector } from 'react-redux';

import { Link, useParams } from 'react-router-dom';

import ProfileHeader from '../ProfileHeader';

import './index.css';

function MovieById() {
  const fetchMovieReducer = useSelector((state) => state.fetchMovieReducer.movies);

  const { id } = useParams();

  const movie = fetchMovieReducer.find((item) => item._id === id);
  console.log(movie);
  return (
    <div className="movieId-page">
      <ProfileHeader />
      <div className="movieId">
        <Link className="previous-page" to={'/profile'}>
          <button type="submit" className="btn btn-secondary btn-ls btn-block">
            Go Back
          </button>
        </Link>
        <div className="description">
          <div className="description-container__left">
            <img className="movieId__image" src={movie.movieImage} alt="poster"></img>
          </div>
          <div className="description-container__right">
            <h2 className="movieId__title">{movie.movieName}</h2>
            <h4 className="movieId__description">{movie.movieDescription}</h4>
            <h4 className="movieId__country">
              <span>Country:</span> {movie.movieCountry}
            </h4>
            <h4 className="movieId__year">
              <span>Year:</span> {movie.movieYear}
            </h4>
            <h4 className="movieId__genre">
              <span>Genre:</span> {movie.movieGenre}
            </h4>
            <h4 className="movieId__duration">
              <span>Duration:</span> {movie.movieDuration}
            </h4>
            <h4 className="movieId__rating">
              <span>Rating:</span> &#11088;{movie.movieRating}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieById;
