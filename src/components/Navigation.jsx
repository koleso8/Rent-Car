import { NavLink } from 'react-router-dom';
import Loader from './Loader/Loader';
import { useSelector } from 'react-redux';
import { selectIsLoading } from '../redux/cars/selectors';
import { Toaster } from 'react-hot-toast';

const Navigation = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <nav className="flex justify-around items-center font-bold ">
      <NavLink className="p-[15px]" to="/">
        Home
      </NavLink>

      <NavLink className="p-[15px]" to="/catalog">
        Catalog
      </NavLink>

      <NavLink className="p-[15px]" to="/favorites">
        Favorites
      </NavLink>

      {isLoading && <Loader />}
      <Toaster />
    </nav>
  );
};

export default Navigation;
