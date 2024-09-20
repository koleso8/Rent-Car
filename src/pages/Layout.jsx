import { Suspense } from 'react';
import { useDispatch } from 'react-redux';

import { fetchCarsThunk } from '../redux/cars/operation';

import Navigation from '../components/Navigation';
import Loader from '../components/Loader/Loader';

const Layout = ({ children }) => {
  const dispatch = useDispatch();

  dispatch(fetchCarsThunk());

  return (
    <>
      <header className="shadow-md shadow-gray-950 py-5 fixed z-30 w-screen bg-gray-950">
        <Navigation />
      </header>
      <main className="pt-[76px]">
        <Suspense fallback={<Loader />}>{children}</Suspense>
      </main>
    </>
  );
};

export default Layout;
