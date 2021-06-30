import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import FileBase from 'react-file-base64';

import Header from '../Header';
import { createMovie } from '../../Actions/movies';

import './index.css';

function Admin() {
  const [postMovie, setPostMovie] = useState({
    movieName: '',
    movieImage: '',
    movieDescription: '',
    movieCountry: '',
    movieYear: '',
    movieGenre: '',
    movieDuration: '',
    movieRating: '',
  });

  const dispatch = useDispatch();

  const AddMovie = (e) => {
    e.preventDefault();
    dispatch(createMovie(postMovie));
  };

  return (
    <div className="admin-page">
      <Header />
      <div className="admin-profile">
        <form onSubmit={AddMovie} className="movie-form">
          <div className="form-group">
            <input
              name="movieName"
              placeholder="Title"
              className="form-control"
              id="MovieName"
              value={postMovie.movieName}
              onChange={(e) => setPostMovie({ ...postMovie, movieName: e.target.value })}
            />
          </div>
          <div className="image-uploader">
            <FileBase
              type="file"
              multiple={false}
              name="movieImage"
              onDone={({ base64 }) => setPostMovie({ ...postMovie, movieImage: base64 })}
            />
          </div>
          <br />
          <div className="form-group">
            <input
              name="movieDescription"
              placeholder="Description"
              className="form-control"
              value={postMovie.movieDescription}
              onChange={(e) => setPostMovie({ ...postMovie, movieDescription: e.target.value })}
            />
          </div>
          <div className="form-group">
            <input
              name="movieCountry"
              placeholder="Country"
              className="form-control"
              value={postMovie.movieCountry}
              onChange={(e) => setPostMovie({ ...postMovie, movieCountry: e.target.value })}
            />
          </div>
          <div className="form-group">
            <input
              name="movieYear"
              placeholder="Year"
              className="form-control"
              value={postMovie.movieYear}
              onChange={(e) => setPostMovie({ ...postMovie, movieYear: e.target.value })}
            />
          </div>
          <div className="form-group">
            <input
              name="movieGenre"
              placeholder="Genre"
              className="form-control"
              value={postMovie.movieGenre}
              onChange={(e) => setPostMovie({ ...postMovie, movieGenre: e.target.value })}
            />
          </div>
          <div className="form-group">
            <input
              name="movieDuration"
              placeholder="Duration"
              className="form-control"
              value={postMovie.movieDuration}
              onChange={(e) => setPostMovie({ ...postMovie, movieDuration: e.target.value })}
            />
          </div>
          <div className="form-group">
            <input
              placeholder="Rating"
              className="form-control"
              value={postMovie.movieRating}
              onChange={(e) => setPostMovie({ ...postMovie, movieRating: e.target.value })}
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
