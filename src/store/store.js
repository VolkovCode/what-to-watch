import {configureStore} from "@reduxjs/toolkit";
import moviesReducer from "./movies/moviesSlice";
import reviewsReducer from "./reviews/reviewsSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    reviews: reviewsReducer,
  }
});
