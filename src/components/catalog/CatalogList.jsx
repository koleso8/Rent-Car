import { useSelector } from 'react-redux';
import { selectCars } from '../../redux/cars/selectors';
import CatalogItem from './CatalogItem';

const CatalogList = () => {
  const allCars = useSelector(selectCars);

  return (
    <ul className="flex flex-wrap gap-7 gap-y-[50px] justify-center">
      {allCars.map(car => (
        <CatalogItem key={car.id} car={car} />
      ))}
    </ul>
  );
};

export default CatalogList;
