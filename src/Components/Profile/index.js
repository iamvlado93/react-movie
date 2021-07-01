import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Card } from 'react-bootstrap';

import ProfileHeader from '../ProfileHeader';

import { getMovies } from '../../Actions/movies';

import './index.css';

function Profile(props) {
  const fetchMovieReducer = useSelector((state) => state.fetchMovieReducer);
  const { movies, error, loading } = fetchMovieReducer;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  console.log(movies);

  return (
    <div className="profile-page">
      <ProfileHeader />
      <div className="profile">
        {loading ? (
          <div className="loading">
            <div></div>
            <div></div>
          </div>
        ) : error ? (
          <div className="error">{error}</div>
        ) : (
          movies.map((movie) => (
            <Link key={movie._id} to={'/profile/' + movie._id}>
              <Card
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '16rem',
                  height: '28rem',
                  padding: '0.1rem',
                  margin: '1rem',
                  background: 'rgba(0, 0, 0, 0.905)',
                  borderRadius: '20px',
                  textAlign: 'center',
                }}
              >
                <Card.Img
                  style={{
                    width: '100%',
                    height: '85%',
                    borderRadius: '20px',
                  }}
                  src={movie.movieImage}
                />
                <Card.Subtitle
                  style={{
                    fontSize: '2rem',
                    color: 'rgb(183, 50, 216)',
                    fontFamily: 'Ma Shan Zheng',
                  }}
                ></Card.Subtitle>
                <Card.Subtitle
                  style={{
                    fontSize: '1.5rem',
                    color: 'rgb(183, 50, 216)',
                    fontFamily: 'Ma Shan Zheng',
                  }}
                >
                  &#11088;{movie.movieRating}
                </Card.Subtitle>
              </Card>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

export default Profile;
