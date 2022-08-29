import {ALL_GENRES, MAX_GENRES_COUNT, MAX_RECOMENDED_FILMS} from "../data/constants";

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

export const getRecommendedMovies = (state) => {
  const recommendedMovies = state.movies.filter((movie) => movie.genre === state.activeFilm.genre).slice(0, MAX_RECOMENDED_FILMS);
  return recommendedMovies;
};

export const getIsAuthorizationErrorFlag = (state) => {
  return state.isAuthorizationErrorFlag;
};
