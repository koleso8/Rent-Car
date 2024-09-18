import { Suspense } from 'react';
import { useDispatch } from 'react-redux';

import { fetchCarsThunk } from '../redux/cars/operation';

import Navigation from '../components/Navigation';
import Loader from '../components/Loader/Loader';

const Layout = ({ children }) => {
  const dispatch = useDispatch();

  dispatch(fetchCarsThunk());

  return (
    <header>
      <Navigation />
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </header>
  );
};

export default Layout;
