import { Suspense } from 'react';
import Navigation from '../components/Navigation';
import Loader from '../components/Loader/Loader';
import CustomModal from '../components/CustomModal';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentCar } from '../redux/modal/selectors';
import { closeModal } from '../redux/modal/slice';

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const currentCar = useSelector(selectCurrentCar);
  const isOpen = !!currentCar;

  return (
    <header>
      <Navigation />
      <Suspense fallback={<Loader />}>{children}</Suspense>
      {currentCar && (
        <CustomModal
          isOpen={isOpen}
          onClose={() => dispatch(closeModal())}
          car={currentCar}
        />
      )}
    </header>
  );
};

export default Layout;
