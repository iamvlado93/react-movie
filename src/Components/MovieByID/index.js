import React from 'react';

import { Link } from 'react-router-dom';

import ProfileHeader from '../ProfileHeader';

import './index.css';

function MovieByID(props) {
  return (
    <div className="page__movie-id">
      <ProfileHeader />
      <Link to={'/profile'}>
        <button type="submit" className="btn btn-primary btn-ls btn-block">
          Go back
        </button>
      </Link>
      <div className="movie-id">
        <h1>1</h1>
      </div>
    </div>
  );
}

export default MovieByID;
