const Movie = require("../models/movieSchema.js");

const createMovie = async (req, res) => {
  try {
    await Movie.findOne({ movieName: req.body.movieName }, (err, doc) => {
      if (err) throw err;
      if (doc)
        return res
          .status(300)
          .json({ message: `Movie ${req.body.movieName} already exists` });
      if (!doc) {
        const newMovie = new Movie({
          movieName: req.body.movieName,
          movieImage: req.body.movieImage,
          movieDescription: req.body.movieDescription,
          movieCountry: req.body.movieCountry,
          movieYear: req.body.movieYear,
          movieGenre: req.body.movieGenre,
          movieDuration: req.body.movieDuration,
          movieRating: req.body.movieRating,
        });
        newMovie.save();
        res.status(201).json(res.receivedMovie);
      }
    });
    console.log(req.body);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const fetchMovies = (req, res) => {
  try {
    Movie.find().then((receivedMovie) => res.status(200).json(receivedMovie));
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const deleteMovie = (req, res) => {
  const id = req.params.id;
  try {
    Movie.findByIdAndDelete({ _id: id }, (req, res, err) => {});
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const updateMovie = (req, res) => {
  const updatedMovie = {
    movieName: req.body.movieName,
    movieImage: req.body.movieImage,
    movieDescription: req.body.movieDescription,
    movieCountry: req.body.movieCountry,
    movieYear: req.body.movieYear,
    movieGenre: req.body.movieGenre,
    movieDuration: req.body.movieDuration,
    movieRating: req.body.movieRating,
  };
  Movie.findByIdAndUpdate(
    { _id: req.params.id },
    { $set: updatedMovie },
    (req, res, err) => {
      if (!err) {
        console.log("Item updated");
        console.log(updateMovie);
      } else {
        console.log(err);
      }
    }
  );
};

module.exports = { createMovie, fetchMovies, deleteMovie, updateMovie };
