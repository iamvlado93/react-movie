import React from 'react';

import ProfileHeader from '../ProfileHeader';
import data from '../Movies/data';

import './index.css';

function Profile() {
  return (
    <div className="profile-page">
      <ProfileHeader />
      <div className="profile">
        {data.movies.map((movie) => (
          <div className="movie" key={movie.id}>
            <h3 className="movie__title">{movie.name}</h3>
            <img className="movie__image" src={movie.image} alt="poster"></img>
            <h4 className="movie__year">{movie.year}</h4>
            <h4 className="movie__rating">&#11088; {movie.rating}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profile;
