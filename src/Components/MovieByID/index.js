import React from 'react';
import { useSelector } from 'react-redux';

import ProfileHeader from '../ProfileHeader';

import './index.css';

function MovieById(props) {
  const movies = useSelector((state) => state.movies);
  // const card = movies.find((item) => item._id === props.match.params.id);
  console.log('props', props);
  console.log(movies);
  // console.log('card', card);

  return (
    <div className="movieId-page">
      <ProfileHeader />
      <div className="movieId">
        <h1>1</h1>
      </div>
    </div>
  );
}

export default MovieById;
