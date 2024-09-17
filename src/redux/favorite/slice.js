import { createSlice } from '@reduxjs/toolkit';

// import { errorMessage } from '../../components/errorMessage';

const initialState = {
  favorites: [],
  isFavorite: false,
};

const slice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addToFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
    deleteFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        item => item.id !== action.payload.id
      );
    },
  },
});

export const favoriteReducer = slice.reducer;
export const { addToFavorite, deleteFavorite } = slice.actions;
