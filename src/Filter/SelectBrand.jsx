import Select from 'react-select';
import { optionsBrand } from '../helpers/optionSelect';
import s from './SelectBrand.module.css';
import { useDispatch } from 'react-redux';
import { filterBrand } from '../redux/filter/slice';

const SelectBrand = () => {
  const dispatch = useDispatch();

  const handleBrandChange = data => dispatch(filterBrand(data.value));

  return (
    <label>
      Car brand
      <Select
        name="brand"
        options={optionsBrand}
        unstyled
        className={s.customSelect}
        classNamePrefix="react-select"
        onChange={handleBrandChange}
        placeholder="Brand "
        // defaultInputValue={optionsBrand[0].value}
      />
    </label>
  );
};

export default SelectBrand;
