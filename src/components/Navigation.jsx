import { NavLink } from 'react-router-dom';
import Loader from './Loader/Loader';
import { useSelector } from 'react-redux';
import { selectIsLoading } from '../redux/cars/selectors';
import { Toaster } from 'react-hot-toast';
import { GoHeart } from 'react-icons/go';
import { selectFavorites } from '../redux/favorite/selectors';

const Navigation = () => {
  const isLoading = useSelector(selectIsLoading);
  const countFavorites = useSelector(selectFavorites).length;

  return (
    <nav className="flex justify-around items-center font-bold text-white ">
      <NavLink className="p-[15px]" to="/">
        Home
      </NavLink>
      <NavLink className="p-[15px]" to="/catalog">
        Catalog
      </NavLink>
      <NavLink className="p-[15px] flex items-center gap-3" to="/favorites">
        Favorites
        <span className="flex items-center justify-center bg-white text-black w-6 rounded-full font-extrabold ">
          {countFavorites}
        </span>
      </NavLink>
      {isLoading && <Loader />}
      <Toaster />
    </nav>
  );
};

export default Navigation;
