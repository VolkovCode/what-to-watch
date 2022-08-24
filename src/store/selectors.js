import {ALL_GENRES, MAX_GENRES_COUNT} from "../data/constants";


export const getGenres = (state) => {
  const genres = new Set(state.movies.map(((movie) => movie.genre)));
  return [ALL_GENRES, ...genres].slice(0, MAX_GENRES_COUNT + 1);
};

export const getMovies = (state) => {
  const movies = state.movies;
  if (state.activeGenre === ALL_GENRES) {
    return movies;
  }
  return movies.filter((movie) => movie.genre === state.activeGenre);
};

export const getVisibleCardsCount = (state) => {
  const count = state.visibleCards;
  return count;
};
