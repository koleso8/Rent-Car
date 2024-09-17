import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/favorite/selectors';
import CatalogItem from './CatalogItem';

const FavoriteList = () => {
  const favoritesCars = useSelector(selectFavorites);

  return (
    <ul className="flex flex-wrap gap-7">
      {favoritesCars.map(car => (
        <CatalogItem key={car.id} car={car} />
      ))}
    </ul>
  );
};
export default FavoriteList;
