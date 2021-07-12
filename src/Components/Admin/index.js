import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import FileBase from 'react-file-base64';
import swal from 'sweetalert';
import axios from 'axios';

import ProfileHeader from '../ProfileHeader';
import { createNewMovie } from '../../Actions/movies';
import { getMovies } from '../../Actions/movies';
import ROUTES from '../../Const/Routes';

import './index.css';

function Admin() {
  const [isPut, setIsPut] = useState(false);
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

  const [updateMovieInfo, setUpdateMovieInfo] = useState({
    movieName: '',
    movieImage: '',
    movieDescription: '',
    movieCountry: '',
    movieYear: '',
    movieGenre: '',
    movieDuration: '',
    movieRating: '',
  });

  const createMovieReducer = useSelector((state) => state.createMovieReducer);
  const { createLoading, createError } = createMovieReducer;

  const fetchMovieReducer = useSelector((state) => state.fetchMovieReducer);
  const { movies, error, loading } = fetchMovieReducer;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  const AddMovie = () => {
    try {
      dispatch(createNewMovie(postMovie)).then((res) => {
        setPostMovie({
          movieName: '',
          movieImage: '',
          movieDescription: '',
          movieCountry: '',
          movieYear: '',
          movieGenre: '',
          movieDuration: '',
          movieRating: '',
          id: '',
        });
        swal({
          text: 'You have successfully added the movie!',
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteMovie = (id) => {
    try {
      axios.delete('/delete/' + id);
      window.location.reload(ROUTES.ADMIN);
      swal({
        text: 'You have successfully deleted the movie!',
      });
    } catch (error) {
      console.log(error);
    }
  };

  const openUpdate = (id) => {
    setIsPut(true);
    setUpdateMovieInfo((prevInput) => {
      return {
        ...prevInput,
        id: id,
      };
    });
  };

  const updateMovie = (id) => {
    try {
      axios.put('/update/' + id, updateMovieInfo);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = (event) => {
    const { name, value } = event.target;
    setUpdateMovieInfo((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  };

  return (
    <div className="admin-page">
      <ProfileHeader/>
      <div className="admin-profile">
        <div className="admin-profile__left">
          {loading ? (
            <div class="loader">
              <div class="inner one"></div>
              <div class="inner two"></div>
              <div class="inner three"></div>
            </div>
          ) : error ? (
            <div className="error">{error}</div>
          ) : (
            movies.map((movie) => (
              <div key={movie._id} className="movie__container-admin">
                <Link className="movie__details-admin" to={`/admin/${movie._id}`}>
                  <div className="movie__title-admin">{movie.movieName}</div>
                  <img className="movie__image-admin" src={movie.movieImage} alt="poster" />
                  <h3 className="movie__year-admin">{movie.movieYear}</h3>
                  <h3 className="movie__rating-admin">&#11088;{movie.movieRating}</h3>
                </Link>
                <div className="container-buttons-admin">
                  <button onClick={() => openUpdate(movie._id)} className="button__edit-admin">
                    Edit
                  </button>
                  <button onClick={() => deleteMovie(movie._id)} className="button__delete-admin">
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="admin-profile__right">
          {createLoading ? (
            <div className="loading">
              <div></div>
              <div></div>
            </div>
          ) : error ? (
            <div className="error">{createError}</div>
          ) : !isPut ? (
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
                  name="movieRating"
                  placeholder="Rating"
                  className="form-control"
                  value={postMovie.movieRating}
                  onChange={(e) => setPostMovie({ ...postMovie, movieRating: e.target.value })}
                />
              </div>
              <button type="submit" className="btn btn-secondary btn-lg btn-block">
                Add Movie
              </button>
            </form>
          ) : (
            <form className="movie-form">
              <div className="form-group">
                <input
                  name="movieName"
                  placeholder="Title"
                  className="form-control"
                  id="MovieName"
                  value={updateMovieInfo.movieName}
                  onChange={handleUpdate}
                />
              </div>
              <div className="image-uploader">
                <FileBase
                  type="file"
                  multiple={false}
                  name="movieImage"
                  onDone={({ base64 }) =>
                    setUpdateMovieInfo({ ...updateMovieInfo, movieImage: base64 })
                  }
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  name="movieDescription"
                  placeholder="Description"
                  className="form-control"
                  value={updateMovieInfo.movieDescription}
                  onChange={handleUpdate}
                />
              </div>
              <div className="form-group">
                <input
                  name="movieCountry"
                  placeholder="Country"
                  className="form-control"
                  value={updateMovieInfo.movieCountry}
                  onChange={handleUpdate}
                />
              </div>
              <div className="form-group">
                <input
                  name="movieYear"
                  placeholder="Year"
                  className="form-control"
                  value={updateMovieInfo.movieYear}
                  onChange={handleUpdate}
                />
              </div>
              <div className="form-group">
                <input
                  name="movieGenre"
                  placeholder="Genre"
                  className="form-control"
                  value={updateMovieInfo.movieGenre}
                  onChange={handleUpdate}
                />
              </div>
              <div className="form-group">
                <input
                  name="movieDuration"
                  placeholder="Duration"
                  className="form-control"
                  value={updateMovieInfo.movieDuration}
                  onChange={handleUpdate}
                />
              </div>
              <div className="form-group">
                <input
                  name="movieRating"
                  placeholder="Rating"
                  className="form-control"
                  value={updateMovieInfo.movieRating}
                  onChange={handleUpdate}
                />
              </div>
              <button
                onClick={() => updateMovie(updateMovieInfo.id)}
                type="submit"
                className="btn btn-primary btn-lg btn-block"
              >
                Update Movie
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Admin;
