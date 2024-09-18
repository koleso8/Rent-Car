import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { fetchCarsThunk, loadMoreCarsThunk } from './operation';

const initialState = {
  items: [],
  loading: false,
  error: null,
  showLoadMore: true,
};

const slice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    setShowLoadMore: (state, action) => {
      state.showLoadMore = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCarsThunk.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(loadMoreCarsThunk.fulfilled, (state, action) => {
        if (action.payload.length < 12) state.showLoadMore = false;
        state.items = [...state.items, ...action.payload];
      })
      .addMatcher(
        isAnyOf(
          fetchCarsThunk.fulfilled,
          loadMoreCarsThunk.fulfilled,
          fetchCarsThunk.rejected,
          loadMoreCarsThunk.rejected
        ),
        state => {
          state.loading = false;
        }
      )
      .addMatcher(
        isAnyOf(fetchCarsThunk.rejected, loadMoreCarsThunk.rejected),
        (state, action) => {
          state.error = action.payload;
        }
      )
      .addMatcher(
        isAnyOf(fetchCarsThunk.pending, loadMoreCarsThunk.pending),
        state => {
          state.error = null;
          state.loading = true;
        }
      );
  },
});

export const carsReducer = slice.reducer;

export const { setShowLoadMore } = slice.actions;
