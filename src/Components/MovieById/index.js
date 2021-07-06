import React from 'react';

import { Link, useParams } from 'react-router-dom';

import ProfileHeader from '../ProfileHeader';

import './index.css';

function MovieById() {
  const { id } = useParams();

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
          <h3>{id}</h3>
        </div>
      </div>
    </div>
  );
}

export default MovieById;
