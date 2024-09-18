import { useSelector } from 'react-redux';
import { selectCars } from '../../redux/cars/selectors';
import CatalogItem from './CatalogItem';
import { selectFilteredCars } from '../../redux/filter/selectors';

const CatalogList = () => {
  const filteredCars = useSelector(selectFilteredCars);
  const allCars = useSelector(selectCars);
  console.log(allCars);

  const forRender = (filtered, all) => {
    return filteredCars.length ? filtered : all;
  };

  return (
    <ul className="flex flex-wrap gap-7 gap-y-[50px] justify-center">
      {forRender(filteredCars, allCars).map(car => (
        <CatalogItem key={car.id} car={car} />
      ))}
    </ul>
  );
};

export default CatalogList;
