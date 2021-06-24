import React, { useState } from 'react';

import axios from 'axios';
import swal from 'sweetalert';

import Header from '../Header';

import './index.css';

function Admin() {
  const [adminMovieName, setAdminMovieName] = useState('');
  const [adminMovieDescription, setAdminMovieDescription] = useState('');
  const [adminMovieCountry, setAdminMovieCountry] = useState('');
  const [adminMovieYear, setAdminMovieYear] = useState('');
  const [adminMovieGenre, setAdminMovieGenre] = useState('');
  const [adminMovieDuration, setAdminMovieDuration] = useState('');
  const [adminMovieRating, setAdminMovieRating] = useState('');

  const AddMovie = async (e) => {
    try {
      e.preventDefault();
      await axios({
        method: 'POST',
        data: {
          movieName: adminMovieName,
          movieDescription: adminMovieDescription,
          movieCountry: adminMovieCountry,
          movieYear: adminMovieYear,
          movieGenre: adminMovieGenre,
          movieDuration: adminMovieDuration,
          movieRating: adminMovieRating,
        },
        withCredentials: true,
        url: 'http://localhost:5000/admin',
      }).then((res) => {
        console.log(res);
        swal({
          text: 'The movie has been added successfully',
          button: 'Continue',
        });
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="admin-page">
      <Header />
      <div className="admin-profile">
        <form onSubmit={AddMovie} className="movie-form">
          <div className="form-group">
            <input
              placeholder="Movie Name"
              className="form-control"
              id="MovieName"
              onChange={(e) => setAdminMovieName(e.target.value)}
            />
          </div>
          {/* <div className="image-uploader">
            <input type="file" id="MoviePoster" value={values.moviePoster} />
          </div> */}
          <div className="form-group">
            <input
              placeholder="Description"
              className="form-control"
              name="MovieDescription"
              id="MovieDescription"
              onChange={(e) => setAdminMovieDescription(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              placeholder="Country"
              className="form-control"
              id="MovieCountry"
              onChange={(e) => setAdminMovieCountry(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              placeholder="Year"
              className="form-control"
              id="MovieYear"
              onChange={(e) => setAdminMovieYear(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              placeholder="Genre"
              className="form-control"
              id="MovieGenre"
              onChange={(e) => setAdminMovieGenre(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              placeholder="Duration"
              className="form-control"
              id="MovieDuration"
              onChange={(e) => setAdminMovieDuration(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              placeholder="Rating"
              className="form-control"
              id="MovieRating"
              onChange={(e) => setAdminMovieRating(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-secondary btn-lg btn-block">
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default Admin;
