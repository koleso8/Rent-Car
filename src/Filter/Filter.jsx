import { Field, Form, Formik } from 'formik';

import SelectBrand from './SelectBrand';
import SelectPrice from './SelectPrice';

import { useDispatch, useSelector } from 'react-redux';
import {
  addFiltererdCars,
  filterMileageFrom,
  filterMileageTo,
} from '../redux/filter/slice';
import { filterCars } from '../helpers/filterCars';
import { selectCars } from '../redux/cars/selectors';
import {
  selectFilter,
  selectFilteredCars,
  selectMileageFrom,
  selectMileageTo,
} from '../redux/filter/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const filter = useSelector(selectFilter);
  const mileageFrom = useSelector(selectMileageFrom);
  const mileageTo = useSelector(selectMileageTo);

  const handleMileageChange = () => {
    dispatch(addFiltererdCars(filterCars(cars, filter)));
  };

  const formatNumber = num => {
    if (num > 90000) return 90000;
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  console.log(formatNumber(4682));

  const initialValues = {
    mileageFrom: 0,
    mileageTo: 0,
  };

  return (
    <div className="mb-[50px]">
      <Formik initialValues={initialValues} onSubmit={handleMileageChange}>
        <Form className="flex gap-[18px] justify-between w-full">
          <span className="w-[224px]">
            <SelectBrand />
          </span>
          <span className="w-[124px]">
            <SelectPrice />
          </span>
          <span className="flex items-center justify-center w-80">
            <label className="text-[#8a8a89] text-xs relative mb-2">
              Сar mileage / km
              <Field
                name="mileageFrom"
                className="bg-[#f7f7fb] border-none text-xs pr-36 pl-3 text-transparent w-40 h-12 rounded-l-[14px] outline-none "
                type="number"
                min="0"
                max="90000"
                step="200"
                value={mileageFrom}
                onChange={e => {
                  const value = e.target.value;
                  dispatch(filterMileageFrom(+value));
                }}
              />
              <span className="absolute top-6 left-10 z-10 text-black text-lg bg-[#f7f7fb] h-9 w-[120px] pointer-events-none overflow-hidden border-r border-gray-300">{`From ${formatNumber(
                mileageFrom
              )}`}</span>
            </label>
            <label className=" text-xs text-transparent relative mb-2">
              Сar mileage / km
              <Field
                name="mileageTo"
                className=" bg-[#f7f7fb] border-none text-xs pl-12 pr-3 text-transparent w-40 h-12 rounded-r-[14px] outline-none"
                type="number"
                min="0"
                max="90000"
                step="200"
                value={mileageTo}
                onChange={e => {
                  const value = e.target.value;
                  dispatch(filterMileageTo(+value));
                }}
              />
              <span className="absolute top-6 left-8 z-10 text-black text-lg bg-[#f7f7fb] h-9 w-20 pointer-events-none overflow-hidden">{`To ${formatNumber(
                mileageTo
              )}`}</span>
            </label>
          </span>
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Filter;
