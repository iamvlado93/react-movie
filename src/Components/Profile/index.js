import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';

import ProfileHeader from '../ProfileHeader';

import './index.css';

function Profile() {
  const [movies, setMovies] = useState([
    {
      movieName: '',
      movieImage: '',
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
  }, []);

  return (
    <div className="profile-page">
      <ProfileHeader />
      <div className="profile">
        {movies.map((movie) => (
          <Card
            key={movie.movieName}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '18rem',
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
        ))}
      </div>
    </div>
  );
}

export default Profile;
