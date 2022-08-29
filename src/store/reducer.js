import {ADD_CARDS_COUNT, ALL_GENRES, AuthorizationStatus, START_VISIBLE_CARDS_COUNT} from "../data/constants";
import {ActionType} from "./action";

const initialState = {
  movies: [],
  favouriteMovies: [],
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  visibleCards: START_VISIBLE_CARDS_COUNT,
  activeGenre: ALL_GENRES,
  activeFilm: {},
  promoFilm: {},
  isDataLoaded: false,
  comments: [],
  userInfo: {},
  isAuthorizationErrorFlag: false,
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
        visibleCards: START_VISIBLE_CARDS_COUNT,
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
        visibleCards: ADD_CARDS_COUNT,
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
    case ActionType.LOAD_USER_INFORMARTION:
      return {
        ...state,
        userInfo: action.payload
      };
    case ActionType.SET_AUTHORIZATION_ERROR_FLAG:
      return {
        ...state,
        isAuthorizationError: action.payload
      };
  }
  return state;
};

export {reducer};
