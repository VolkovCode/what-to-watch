export const ActionType = {
  CHANGE_GENRE: `genre/changeGenre`,
  FILTER_MOVIE: `movie/filterMovie`,
  RESET_FILTERS: `movie/resetFilters`,
  GET_GENRES: `genre/getGenres`,
  SHOW_MORE: `movies/showMore`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  LOAD_MOVIES: `data/loadMovies`,
  LOAD_MOVIE_BY_ID: `data/loadMovieByID`,
  LOAD_PROMO_MOVIE: `data/loadPromoMovie`,
  MAKE_FAVOURITE: `data/makeFavourite`,
  LOAD_COMMENTS: `data/loadComments`,
  POST_COMMENT: `data/postComment`,
  LOAD_FAVOURITE_MOVIES: `data/loadFavouriteMovies`,
  LOAD_USER_INFORMARTION: `data/loadUserInformation`,
  SET_AUTHORIZATION_ERROR_FLAG: `data/setAuthorizathionErrorFlag`,

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
  }),
  loadFilmById: (movie) => ({
    type: ActionType.LOAD_MOVIE_BY_ID,
    payload: movie
  }),
  loadPromoFilm: (movie) => ({
    type: ActionType.LOAD_PROMO_MOVIE,
    payload: movie
  }),
  // makeFavourite: ()
  loadComments: (comments) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: comments
  }),
  postComment: (comment) => ({
    type: ActionType.POST_COMMENT,
    payload: comment
  }),
  loadFavouriteFilms: (movies) => ({
    type: ActionType.LOAD_FAVOURITE_MOVIES,
    payload: movies,
  }),
  makeFavoriteFilm: (movie) => ({
    type: ActionType.MAKE_FAVOURITE,
    payload: movie,
  }),
  loadUserInformation: (user) => ({
    type: ActionType.LOAD_USER_INFORMARTION,
    payload: user,
  }),
  setAuthorizationErrorFlag: (flag) => ({
    type: ActionType.SET_AUTHORIZATION_ERROR_FLAG,
    payload: flag,
  })
};
