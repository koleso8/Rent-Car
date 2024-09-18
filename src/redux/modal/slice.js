import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentCar: null,
};

const slice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setCurrentCar: (state, action) => {
      state.currentCar = action.payload;
      document.body.style.overflow = 'hidden';
    },
    closeModal: state => {
      state.currentCar = null;
      document.body.style.overflow = 'unset';
    },
  },
});

export const modalReducer = slice.reducer;
export const { setCurrentCar, closeModal } = slice.actions;
