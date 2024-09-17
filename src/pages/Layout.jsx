import { Suspense } from 'react';
import Navigation from '../components/Navigation';
import Loader from '../components/Loader/Loader';

const Layout = ({ children }) => {
  return (
    <header>
      <Navigation />
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </header>
  );
};

export default Layout;
