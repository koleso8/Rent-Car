export const filterCars = (cars, filters) => {
  return cars.filter(car => {
    const brand = filters.brand
      ? car.make.toLowerCase() === filters.brand.toLowerCase()
      : true;
    const price = filters.price
      ? +car.rentalPrice.replace('$', '') <= filters.price
      : true;
    const mileage =
      (filters.mileage.mileageFrom
        ? filters.mileage.mileageFrom <= car.mileage
        : true) &&
      (filters.mileage.mileageTo
        ? filters.mileage.mileageTo >= car.mileage
        : true);

    return brand && price && mileage;
  });
};
