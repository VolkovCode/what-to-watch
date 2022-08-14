import {ALL_GENRES, AuthorizationStatus, INITIAL_CARDS} from "../data/constants";
import {ActionType} from "./action";

const initialState = {
  movies: [],
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  visibleCards: INITIAL_CARDS,
  activeGenre: ALL_GENRES,
  isDataLoaded: false,
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
  }
  return state;
};

export {reducer};
