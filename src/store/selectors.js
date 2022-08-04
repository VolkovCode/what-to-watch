import {ALL_GENRES} from "../data/constants";


export const getGenres = (state) => {
  const genres = new Set(state.movies.map((movie) => movie.genre));
  return [ALL_GENRES, ...genres];
};
