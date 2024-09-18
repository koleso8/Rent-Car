import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filteredCars: [],
  brand: null,
  price: null,
  mileage: { mileageFrom: 0, mileageTo: 0 },
};

const slice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    addFiltererdCars: (state, action) => {
      state.filteredCars = [...action.payload];
    },
    filterBrand: (state, action) => {
      state.brand = action.payload;
    },
    filterPrice: (state, action) => {
      state.price = action.payload;
    },
    filterMileage: (state, action) => {
      state.mileage = action.payload;
    },
    filterMileageFrom: (state, action) => {
      state.mileage.mileageFrom = action.payload;
    },
    filterMileageTo: (state, action) => {
      state.mileage.mileageTo = action.payload;
    },
  },
  clearFilter: state => {
    state.brand = null;
    state.price = null;
    state.mileage = {
      mileageFrom: null,
      mileageTo: null,
    };
  },
});

export const filterReducer = slice.reducer;
export const {
  addFiltererdCars,
  filterBrand,
  filterPrice,
  filterMileage,
  clearFilter,
  filterMileageFrom,
  filterMileageTo,
} = slice.actions;
