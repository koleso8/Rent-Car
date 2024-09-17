import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { fetchCarsThunk, loadMoreCarsThunk } from './operation';

const initialState = { items: [], loading: false, error: null };

const slice = createSlice({
  name: 'cars',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchCarsThunk.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(loadMoreCarsThunk.fulfilled, (state, action) => {
        state.items.push(action.payload);
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

// export const {  } = slice.actions;
