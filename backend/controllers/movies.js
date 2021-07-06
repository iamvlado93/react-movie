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

module.exports = { createMovie, fetchMovies };
