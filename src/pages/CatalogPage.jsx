import CatalogList from '../components/catalog/CatalogList';
import Filter from '../Filter/Filter';
import LoadMoreButton from '../components/LoadMoreButton';
import CustomModal from '../components/CustomModal';
import { selectCurrentCar } from '../redux/modal/selectors';
import { closeModal } from '../redux/modal/slice';
import { useDispatch, useSelector } from 'react-redux';
import { selectShowMore } from '../redux/cars/selectors';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const currentCar = useSelector(selectCurrentCar);
  const showLoadMore = useSelector(selectShowMore);
  const isOpen = !!currentCar;

  return (
    <div className="max-w-[1184px] mx-auto pt-6">
      <Filter />
      <CatalogList />
      {showLoadMore && <LoadMoreButton />}
      {currentCar && (
        <CustomModal
          isOpen={isOpen}
          onClose={() => {
            dispatch(closeModal());
          }}
          car={currentCar}
        />
      )}
    </div>
  );
};

export default CatalogPage;
