import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {ALL_GENRES, MAX_GENRES_COUNT, MAX_RECOMENDED_FILMS} from '../../data/constants';

const BASE_URL = `https://6.react.pages.academy/wtw`;

const initialState = {
  movies: [],
  favouriteMovies: [],
  activeGenre: ALL_GENRES,
  activeMovie: {},
  promoMovie: {},
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

export const fetchPromoMovie = createAsyncThunk(`movies/fetchPromoMovie`, async () => {
  const response = await axios.get(`${BASE_URL}/films/promo`);
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
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = `failed`;
        state.error = action.error.message;
      })
      .addCase(fetchOneMovie.fulfilled, (state, action) => {
        state.status = `succeeded`;
        state.activeMovie = action.payload;
      })
      .addCase(fetchPromoMovie.fulfilled, (state, action) => {
        state.status = `succeeded`;
        state.promoMovie = action.payload;
      });
  }
}
);

export const selectAllMovies = (state) => state.movies.movies;
export const getMoviesStatus = (state) => state.movies.status;
export const getMoviesError = (state) => state.movies.error;
export const getActiveMovie = (state) => state.movies.activeMovie;
export const getPromoMovie = (state) => state.movies.promoMovie;

export const getRecommendedMovies = (state)=> {
  const recomendedFilms = state.movies.movies.filter((movie) => movie.genre === state.movies.activeMovie.genre)
    .filter((movie) => movie.name !== state.movies.activeMovie.name)
    .slice(0, MAX_RECOMENDED_FILMS);
  return recomendedFilms;
};

export const selectAllGenres = (state) => {
  const genres = new Set(state.movies.movies.map(((movie) => movie.genre)));
  return [ALL_GENRES, ...genres].slice(0, MAX_GENRES_COUNT + 1);
};

export const getActiveGenre = (state) => state.movies.activeGenre;

export const {resetState} = moviesSlice.actions;
export default moviesSlice.reducer;
