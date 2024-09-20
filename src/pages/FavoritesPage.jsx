import { useDispatch, useSelector } from 'react-redux';
import FavoriteList from '../components/catalog/FavoriteList';
import { selectCurrentCar } from '../redux/modal/selectors';
import CustomModal from '../components/CustomModal';
import { closeModal } from '../redux/modal/slice';
import { selectFavorites } from '../redux/favorite/selectors';
import { FaHeartCircleXmark } from 'react-icons/fa6';

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const currentCar = useSelector(selectCurrentCar);
  const favorites = useSelector(selectFavorites);
  const isOpen = !!currentCar;

  return (
    <div className="max-w-[1184px] mx-auto pt-8">
      {favorites.length ? (
        <FavoriteList />
      ) : (
        <div>
          <FaHeartCircleXmark size="50vh" color="#3470ff" className="mx-auto" />
          <h3 className="text-[100px]  text-center font-bold">{'Ooopss :('}</h3>
          <p className="text-[50px]  text-center">
            You don`t have any favorites, you can add them by clicking on the
            heart !
          </p>
        </div>
      )}

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
