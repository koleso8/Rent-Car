import { useDispatch } from 'react-redux';
import CatalogList from '../components/catalog/CatalogList';
import { fetchCarsThunk } from '../redux/cars/operation';
import LoadMoreButton from '../components/LoadMoreButton';

const CatalogPage = () => {
  const dispatch = useDispatch();
  dispatch(fetchCarsThunk());
  return (
    <div className="max-w-[1184px] mx-auto">
      <CatalogList />
      <LoadMoreButton />
    </div>
  );
};

export default CatalogPage;
