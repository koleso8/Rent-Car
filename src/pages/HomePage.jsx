import Parallaxs from '../components/Parallaxs';

const HomePage = () => {
  return (
    <div className="flex items-center justify-center w-screen fixed">
      <Parallaxs />

      <h1 className="absolute top-1/3 text-9xl text-white drop-shadow-4xl font-extrabold animate-pulse">
        Rent Your First Car
      </h1>
    </div>
  );
};

export default HomePage;
