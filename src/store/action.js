export const ActionType = {
  CHANGE_GENRE: `genre/changeGenre`,
  FILTER_MOVIE: `movie/filterMovie`,
  RESET_FILTERS: `movie/resetFilters`,
  GET_GENRES: `genre/getGenres`
};

export const ActionCreator = {
  resetFilters: () => ({
    type: ActionType.RESET_FILTERS,
  }),
  filterMovies: (genre) => ({
    type: ActionType.FILTER_MOVIE,
    payload: genre,
  }),
};

