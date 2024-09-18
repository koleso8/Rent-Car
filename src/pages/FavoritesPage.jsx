import { useDispatch, useSelector } from 'react-redux';
import FavoriteList from '../components/catalog/FavoriteList';
import { selectCurrentCar } from '../redux/modal/selectors';
import CustomModal from '../components/CustomModal';
import { closeModal } from '../redux/modal/slice';

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const currentCar = useSelector(selectCurrentCar);
  const isOpen = !!currentCar;
  return (
    <div className="max-w-[1184px] mx-auto">
      <FavoriteList />
      {currentCar && (
        <CustomModal
          isOpen={isOpen}
          onClose={() => dispatch(closeModal())}
          car={currentCar}
        />
      )}
    </div>
  );
};
export default FavoritesPage;
