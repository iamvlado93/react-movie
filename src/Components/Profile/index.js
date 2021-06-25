import React, { useState, useEffect } from 'react';

import ProfileHeader from '../ProfileHeader';

import './index.css';

function Profile() {
  const [movies, setMovies] = useState([
    {
      movieName: '',
      movieDescription: '',
      movieCountry: '',
      movieYear: '',
      movieGenre: '',
      movieDuration: '',
      movieRating: '',
    },
  ]);

  useEffect(() => {
    fetch('/profile')
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonResponse) => setMovies(jsonResponse));
  });

  return (
    <div className="profile-page">
      <ProfileHeader />
      <div className="profile">
        {movies.map((movie, id) => (
          <div className="movie-container" key={movie._id}>
            <h4 className="movie__title">{movie.movieName}</h4>
            <p className="movie__description">{movie.movieDescription}</p>
            <h4 className="movie__year">{movie.movieYear}</h4>
            <h4 className="movie__rating">&#11088;{movie.movieRating}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profile;
