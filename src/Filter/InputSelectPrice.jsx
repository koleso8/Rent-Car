import Select from 'react-select';
import { optionsPrice } from '../helpers/optionSelect';
import s from './InputSelectBrand.module.css';
import { filterPrice } from '../redux/filter/slice';
import { useDispatch, useSelector } from 'react-redux';
import { selectPrice } from '../redux/filter/selectors';

const InputSelectPrice = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectPrice);

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
        value={value}
        // defaultInputValue={optionsPrice[0].value}
      />
    </label>
  );
};

export default InputSelectPrice;
// TODO fix values
