import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadMoreCarsThunk } from '../redux/cars/operation';

const LoadMoreButton = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(2);

  const handleClick = () => {
    dispatch(loadMoreCarsThunk(page));
    setPage(prev => prev + 1);
  };

  return (
    <button
      className="block mx-auto mb-[150px] text-[#3470ff] underline underline-offset-1 hover:text-[#0b44cd]"
      onClick={handleClick}
    >
      Load More
    </button>
  );
};

export default LoadMoreButton;
