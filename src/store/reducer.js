import {movies as mvs} from "../data/mock-data";
import {ActionType} from "./action";


const initialState = {
  movies: mvs,

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
        ...initialState
      };
    case ActionType.GET_GENRES:
      return {
        ...initialState,
      };
  }
  return state;
};

export {reducer};
