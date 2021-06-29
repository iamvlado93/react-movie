import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import ProfileHeader from '../ProfileHeader';
import getMovies from '../../Actions/movies';
import { Card } from 'react-bootstrap';

import './index.css';

function Profile() {
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <div className="profile-page">
      <ProfileHeader />
      <div className="profile">
        {movies.map((movie) => (
          <Link key={movie.movieName} to={'/profile/' + movie._id}>
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
              >
                {movie.movieYear}
              </Card.Subtitle>
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
        ))}
      </div>
    </div>
  );
}

export default Profile;
