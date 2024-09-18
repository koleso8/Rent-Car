import Select from 'react-select';
import { optionsPrice } from '../helpers/optionSelect';
import s from './InputSelectBrand.module.css';
import { filterPrice } from '../redux/filter/slice';
import { useDispatch } from 'react-redux';

const InputSelectPrice = () => {
  const dispatch = useDispatch();

  const handlePriceChange = data => dispatch(filterPrice(data.value));

  return (
    <label className="text-[#8a8a89] text-xs relative ">
      Price/ 1 hour
      <Select
        name="price"
        options={optionsPrice}
        unstyled
        className={s.customSelect}
        classNamePrefix="react-select"
        onChange={handlePriceChange}
        placeholder="Price"
        // defaultInputValue={optionsPrice[0].value}
      />
    </label>
  );
};

export default InputSelectPrice;
