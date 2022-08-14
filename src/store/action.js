export const ActionType = {
  CHANGE_GENRE: `genre/changeGenre`,
  FILTER_MOVIE: `movie/filterMovie`,
  RESET_FILTERS: `movie/resetFilters`,
  GET_GENRES: `genre/getGenres`,
  SHOW_MORE: `movies/showMore`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  LOAD_MOVIES: `data/loadMovies`,
};

export const ActionCreator = {
  resetFilters: () => ({
    type: ActionType.RESET_FILTERS,
  }),
  filterMovies: (genre) => ({
    type: ActionType.FILTER_MOVIE,
    payload: genre,
  }),
  showMore: () => ({
    type: ActionType.SHOW_MORE,
    payload: 8
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  loadMovies: (movies) => ({
    type: ActionType.LOAD_MOVIES,
    payload: movies
  })
};
