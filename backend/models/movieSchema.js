const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  movieName: { type: String },
  movieImage: { type: String },
  movieDescription: { type: String },
  movieCountry: { type: String },
  movieYear: { type: String },
  movieGenre: { type: String },
  movieDuration: { type: String },
  movieRating: { type: String },
});

const Movie = mongoose.model("Movie", MovieSchema);

module.exports = Movie;
