import { Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import {
  addFiltererdCars,
  filterMileageFrom,
  filterMileageTo,
} from '../redux/filter/slice';
import {
  selectFilter,
  selectMileageFrom,
  selectMileageTo,
} from '../redux/filter/selectors';
import { selectCars } from '../redux/cars/selectors';

import SelectBrand from './SelectBrand';
import SelectPrice from './SelectPrice';

import { filterCars } from '../helpers/filterCars';
import { formatNumber } from '../helpers/formatNumber';

const Filter = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const filter = useSelector(selectFilter);
  const mileageFrom = useSelector(selectMileageFrom);
  const mileageTo = useSelector(selectMileageTo);

  const handleMileageChange = () => {
    dispatch(addFiltererdCars(filterCars(cars, filter)));
  };

  const initialValues = {
    mileageFrom: 0,
    mileageTo: 0,
  };

  return (
    <div className="mb-[50px] h-[74px]">
      <Formik initialValues={initialValues} onSubmit={handleMileageChange}>
        <Form className="flex gap-[18px] justify-between w-full items-end">
          <span className="w-[224px]">
            <SelectBrand />
          </span>
          <span className="w-[124px]">
            <SelectPrice />
          </span>
          <span className="flex items-center justify-center w-80">
            <label className="text-[#8a8a89] text-xs relative leading-[22px] ">
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
              <span className="absolute top-8 left-10 z-10 text-black text-lg bg-[#f7f7fb] h-9 w-[120px] pointer-events-none overflow-hidden border-r border-gray-300">
                {formatNumber(mileageFrom)}
              </span>
            </label>
            <label className=" text-xs text-transparent relative leading-[22px]">
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
              <span className="absolute top-8 left-8 z-10 text-black text-lg bg-[#f7f7fb] h-9 w-20 pointer-events-none overflow-hidden">
                {formatNumber(mileageTo)}
              </span>
            </label>
          </span>
          <button
            className="bg-[#3470ff] rounded-xl p-[14px] w-[136px] h-12 text-center text-white font-semibold text-sm hover:bg-[#0b44cd] ease-linear duration-200"
            type="submit"
          >
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Filter;
