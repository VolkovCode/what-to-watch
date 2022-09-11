import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

const REVIEWS_URL = `https://6.react.pages.academy/wtw/comments`;

const initialState = {
  reviews: [],
  status: `idle`,
  error: null
};

export const fetchReviws = createAsyncThunk(`reviews/fetchReviews`, async (id) => {
  const response = await axios.get(`${REVIEWS_URL}/${id}`);
  return response.data;
});

export const reviewsSlice = createSlice({
  name: `reviews`,
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchReviws.pending, (state, _action) => {
        state.status = `loading`;
      })
      .addCase(fetchReviws.fulfilled, (state, action) => {
        state.status = `succeeded`;
        state.reviews = action.payload;
      })
      .addCase(fetchReviws.rejected, (state, action) => {
        state.status = `failed`;
        state.error = action.error.message;
      });
  }
}
);

export const selectAllReviews = (state) => state.reviews.reviews;
export const getReviewsStatus = (state) => state.reviews.status;
export const getReviewsError = (state) => state.reviews.error;

export default reviewsSlice.reducer;
