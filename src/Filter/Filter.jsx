import { Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import SelectBrand from './SelectBrand';
import SelectPrice from './SelectPrice';
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

import { formatNumber } from '../helpers/formatNumber';
import { unformatNumber } from '../helpers/unformatNumber';

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
    mileageFrom: mileageFrom,
    mileageTo: mileageTo,
  };

  return (
    <div className="mb-[50px] mx-auto w-[860px] h-[74px] flex justify-center">
      <Formik
        initialValues={initialValues}
        onSubmit={handleMileageChange}
        enableReinitialize
      >
        {({ values, setFieldValue }) => (
          <Form className="flex gap-[18px] justify-between w-full items-end">
            <span className="w-[224px]">
              <SelectBrand />
            </span>
            <span className="w-[124px]">
              <SelectPrice />
            </span>
            <span className="flex ">
              <label className="text-[#8a8a89] text-xs relative leading-[22px] flex flex-col">
                Сar mileage / km
                <Field
                  name="mileageFrom"
                  className="pl-20 bg-[#f7f7fb] border-r-2 border-t-0 border-l-0 border-b-0 text-lg rounded-l-[14px] outline-none w-40 h-12  text-black border-[2px] border-gray-200"
                  type="text"
                  value={formatNumber(values.mileageFrom)}
                  onChange={e => {
                    const value = unformatNumber(e.target.value);
                    if (!isNaN(value)) {
                      setFieldValue('mileageFrom', Number(value));
                      dispatch(filterMileageFrom(Number(value)));
                    }
                  }}
                />
                <p className="absolute text-xl text-black top-8 left-5">From</p>
              </label>
              <label className="text-transparent text-xs relative leading-[22px] flex flex-col">
                Сar mileage / km
                <Field
                  name="mileageTo"
                  className="pl-14 bg-[#f7f7fb] text-lg text-black border-none  w-40 h-12 rounded-r-[14px] outline-none"
                  type="text"
                  value={formatNumber(values.mileageTo)}
                  onChange={e => {
                    const value = unformatNumber(e.target.value);
                    if (!isNaN(value)) {
                      setFieldValue('mileageTo', Number(value));
                      dispatch(filterMileageTo(Number(value)));
                    }
                  }}
                />
                <p className="absolute text-xl text-black top-8 left-7">To</p>
              </label>
            </span>
            <button
              className="bg-[#3470ff] rounded-xl p-[14px] w-[136px] h-12 text-center text-white font-semibold text-sm hover:bg-[#0b44cd] ease-linear duration-200 outline-none"
              type="submit"
            >
              Search
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Filter;
