import { GoHeart, GoHeartFill } from 'react-icons/go';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/favorite/selectors';
import { addToFavorite, deleteFavorite } from '../../redux/favorite/slice';
import { setCurrentCar } from '../../redux/modal/slice';

const CatalogItem = ({ car }) => {
  const dispath = useDispatch();

  const isFavorite = useSelector(selectFavorites).find(
    item => item.id === car.id
  );

  return (
    <li className="w-[274px] h-[426px] relative">
      <span className="absolute top-4 right-4">
        {!isFavorite ? (
          <GoHeart
            className="cursor-pointer"
            color="white"
            size="24px"
            onClick={() => dispath(addToFavorite(car))}
          />
        ) : (
          <GoHeartFill
            className="cursor-pointer"
            color="white"
            size="24px"
            onClick={() => dispath(deleteFavorite(car))}
          />
        )}
      </span>
      <img
        className="mb-[14px] w-full h-[268px] object-cover rounded-[14px] select-none"
        src={car.img}
        alt={car.model}
      />
      <span className="flex justify-between mb-2">
        <span className="flex gap-1 font-medium">
          <h3>{car.make} </h3>
          <h3 className="text-[#3470FF]">{car.model}, </h3> <h3> {car.year}</h3>
        </span>
        <h3 className="font-medium">{car.rentalPrice}</h3>
      </span>
      <div className="">
        <p className="font-normal text-xs text-[#182023] opacity-50">
          {car.address.split(', ')[1]} | {car.address.split(', ')[2]} |{' '}
          {car.rentalCompany} | {car.type} | {car.model} | {car.mileage} |{' '}
          {car.functionalities[0]}
        </p>
      </div>
      <button
        className="w-full bg-[#3470ff] p-3 rounded-xl text-white text-sm absolute bottom-0"
        type="button"
        onClick={() => dispath(setCurrentCar(car))}
      >
        Learn more
      </button>
    </li>
  );
};

export default CatalogItem;
