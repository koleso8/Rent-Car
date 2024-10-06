import { Link } from 'react-router-dom';
import Parallaxs from '../components/Parallaxs';
import { annotate } from 'rough-notation';
import { useEffect } from 'react';

const HomePage = () => {
  useEffect(() => {
    const e = document.querySelector('#myElement');
    const annotation = annotate(e, {
      type: 'box',
      color: 'white',
    });
    setTimeout(() => {
      annotation.show();
    }, 2000);
  }, []);

  return (
    <div className="flex items-center justify-center w-screen h-screen fixed">
      <Parallaxs />

      <h1
        id="myElement"
        className="absolute top-1/3 text-9xl text-white drop-shadow-4xl font-extrabold animate-pulse font-hero "
      >
        Rent Your First Car
      </h1>
      <Link
        to="/catalog"
        className="absolute top-[50%] text-xl cursor-pointer group flex gap-1.5 px-8 py-4 bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md "
      >
        RENT
      </Link>
    </div>
  );
};

export default HomePage;
