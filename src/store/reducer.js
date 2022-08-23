import {ALL_GENRES, AuthorizationStatus, INITIAL_CARDS} from "../data/constants";
import {ActionType} from "./action";

const initialState = {
  movies: [],
  favouriteMovies: [],
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  visibleCards: INITIAL_CARDS,
  activeGenre: ALL_GENRES,
  activeFilm: {},
  promoFilm: {},
  isDataLoaded: false,
  comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genres: action.payload
      };
    case ActionType.RESET_FILTERS:
      return {
        ...state,
        activeGenre: ALL_GENRES,
        visibleCards: INITIAL_CARDS,
      };
    case ActionType.SHOW_MORE:
      return {
        ...state,
        visibleCards: state.visibleCards + action.payload,
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.LOAD_MOVIES:
      return {
        ...state,
        movies: action.payload,
        isDataLoaded: true
      };
    case ActionType.FILTER_MOVIE:
      return {
        ...state,
        activeGenre: action.payload,
        visibleCards: INITIAL_CARDS,
      };
    case ActionType.LOAD_MOVIE_BY_ID:
      return {
        ...state,
        activeFilm: action.payload,
      };
    case ActionType.LOAD_PROMO_MOVIE:
      return {
        ...state,
        promoFilm: action.payload
      };
    case ActionType.LOAD_COMMENTS:
      return {
        ...state,
        comments: action.payload
      };
    case ActionType.LOAD_FAVOURITE_MOVIES:
      return {
        ...state,
        favouriteMovies: action.payload
      };
  }
  return state;
};

export {reducer};
