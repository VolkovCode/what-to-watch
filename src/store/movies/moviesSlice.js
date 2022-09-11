import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {ALL_GENRES} from '../../data/constants';

const BASE_URL = `https://6.react.pages.academy/wtw`;

const initialState = {
  movies: [],
  favouriteMovies: [],
  activeGenre: ALL_GENRES,
  activeMovie: {},
  promoFilm: {},
  status: `idle`,
  error: null
};

export const fetchMovies = createAsyncThunk(`movies/fetchMovies`, async () => {
  const response = await axios.get(`${BASE_URL}/films`);
  return response.data;
});

export const fetchOneMovie = createAsyncThunk(`movies/fetchOneMovie`, async (id) => {
  const response = await axios.get(`${BASE_URL}/films/${id}`);
  return response.data;
});

export const moviesSlice = createSlice({
  name: `movies`,
  initialState,
  reducers: {
    resetState(state) {
      state.status = `idle`;
      state.error = null;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchMovies.pending, (state, _action) => {
        state.status = `loading`;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = `succeeded`;
        state.movies = state.movies.concat(action.payload);
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = `failed`;
        state.error = action.error.message;
      })
      .addCase(fetchOneMovie.fulfilled, (state, action) => {
        state.status = `succeeded`;
        state.activeMovie = action.payload;
      });
  }
}
);

export const selectAllMovies = (state) => state.movies.movies;
export const getMoviesStatus = (state) => state.movies.status;
export const getMoviesError = (state) => state.movies.error;
export const getActiveMovie = (state) => state.movies.activeMovie;

export const {resetState} = moviesSlice.actions;
export default moviesSlice.reducer;
