export const selectFilteredCars = state => state.filter.filteredCars;
export const selectFilter = state => state.filter;

export const selectMileage = state => state.filter.mileageFrom;
export const selectMileageFrom = state => state.filter.mileage.mileageFrom;
export const selectMileageTo = state => state.filter.mileage.mileageTo;

export const selectBrand = state => state.filter.brand;
export const selectPrice = state => state.filter.price;
