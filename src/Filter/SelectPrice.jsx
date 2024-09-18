import Select from 'react-select';
import { optionsPrice } from '../helpers/optionSelect';
import s from './SelectBrand.module.css';
import { filterPrice } from '../redux/filter/slice';
import { useDispatch } from 'react-redux';

const SelectPrice = () => {
  const dispatch = useDispatch();

  const handlePriceChange = data => dispatch(filterPrice(data.value));

  return (
    <label>
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

export default SelectPrice;
