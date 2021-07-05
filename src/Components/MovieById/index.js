import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ProfileHeader from '../ProfileHeader';
import { movieInfo } from '../../Actions/movies';

import './index.css';

function MovieById(props) {
  const movieDetailsReducer = useSelector((state) => state.movieDetailsReducer);
  const { error, loading, movieId } = movieDetailsReducer;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(movieInfo());
    return () => {};
  }, [dispatch]);

  return (
    <div className="movieId-page">
      <ProfileHeader />
      <div className="movieId">
        {loading ? (
          <div className="loading">
            <div></div>
            <div></div>
          </div>
        ) : error ? (
          <div className="error">{error}</div>
        ) : (
          <h1>{movieId}</h1>
        )}
      </div>
    </div>
  );
}

export default MovieById;
