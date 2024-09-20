import { useDispatch, useSelector } from 'react-redux';
import { selectCars } from '../../redux/cars/selectors';
import CatalogItem from './CatalogItem';
import { selectFilteredCars } from '../../redux/filter/selectors';
import { setShowLoadMore } from '../../redux/cars/slice';
import { useEffect } from 'react';

const CatalogList = () => {
  const dispatch = useDispatch();

  const filteredCars = useSelector(selectFilteredCars);
  const allCars = useSelector(selectCars);

  useEffect(() => {
    if (filteredCars.length) dispatch(setShowLoadMore(false));
  }, [useSelector]);

  const forRender = (filtered, all) => {
    return filteredCars.length ? filtered : all;
  };

  return (
    <ul className="flex flex-wrap gap-7 gap-y-[50px] justify-center  mb-[100px]">
      {forRender(filteredCars, allCars).map(car => (
        <CatalogItem key={car.id} car={car} />
      ))}
    </ul>
  );
};

export default CatalogList;
