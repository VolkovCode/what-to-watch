import {INITIAL_CARDS} from "../data/constants";
import {movies as mvs} from "../data/mock-data";
import {ActionType} from "./action";


const initialState = {
  movies: mvs,
  genres: new Set(mvs.map(((mv) => mv.genre))),
  visibleCards: INITIAL_CARDS,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genres: action.payload
      };
    case ActionType.FILTER_MOVIE:
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.genre === action.payload)
      };
    case ActionType.RESET_FILTERS:
      return {
        ...initialState,
        visibleCards: state.visibleCards
      };
    case ActionType.SHOW_MORE:
      return {
        ...state,
        visibleCards: state.visibleCards + action.payload,
      };
  }
  return state;
};

export {reducer};
