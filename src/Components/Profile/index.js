import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Card } from 'react-bootstrap';

import ProfileHeader from '../ProfileHeader';

import { getMovies } from '../../Actions/movies';

import './index.css';

function Profile({ movieInfo }) {
  const [searchTerm, setSearhTerm] = useState('');

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
        <input
          className="profile__search"
          type="text"
          placeholder="Search..."
          onChange={(event) => {
            setSearhTerm(event.target.value);
          }}
        ></input>
        <div className="profile__container">
          {loading ? (
            <div className="loading">
              <div></div>
              <div></div>
            </div>
          ) : error ? (
            <div className="error">{error}</div>
          ) : (
            movies
              .filter((movie) => {
                if (searchTerm === '') {
                  return movie;
                } else if (movie.movieName.toLowerCase().includes(searchTerm.toLowerCase())) {
                  return movie;
                }
              })
              .map((movie, key) => (
                <Link key={key} to={`/profile/${movie.movieDescription}`}>
                  <Card
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-around',
                      width: '16rem',
                      height: '26rem',
                      padding: '0.1rem',
                      margin: '0.5rem',
                      background: 'rgba(0, 0, 0, 0.905)',
                      borderRadius: '20px',
                      textAlign: 'center',
                    }}
                  >
                    <Card.Img
                      style={{
                        width: '100%',
                        height: '75%',
                        borderRadius: '20px',
                      }}
                      src={movie.movieImage}
                    />
                    <Card.Title
                      style={{
                        textAlign: 'center',
                        fontSize: '1.8rem',
                        color: 'rgb(183, 50, 216)',
                        fontFamily: 'Ma Shan Zheng',
                      }}
                    >
                      {movie.movieName}
                    </Card.Title>
                    <Card.Subtitle
                      style={{
                        fontSize: '1.6rem',
                        color: 'rgb(183, 50, 216)',
                        fontFamily: 'Ma Shan Zheng',
                      }}
                    >
                      &#11088;{movie.movieRating}
                    </Card.Subtitle>
                    <button type="submit" className="btn btn-secondary btn-ls btn-block">
                      Add to Favourites
                    </button>
                  </Card>
                </Link>
              ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
