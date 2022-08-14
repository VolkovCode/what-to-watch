import { ALL_GENRES } from "../data/constants";


export const getGenres = (state) => {
  const genres = new Set(state.movies.map(((movie) => movie.genre)));
  return [ALL_GENRES, ...genres];
};

export const getMovies = (state) => {
  const movies = state.movies;
  if (state.activeGenre === ALL_GENRES) {
    return movies;
  }
  return movies.filter((movie) => movie.genre === state.activeGenre)
};

export const getVisibleCardsCount = (state) => {
  const count = state.visibleCards;
  return count;
};
