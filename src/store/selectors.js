import {ALL_GENRES} from "../data/constants";


export const getGenres = (state) => {
  const genres = state.genres;
  return [ALL_GENRES, ...genres];
};

export const getMovies = (state) => {
  const movies = state.movies;
  return movies;
};
