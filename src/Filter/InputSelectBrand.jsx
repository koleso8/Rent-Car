import Select from 'react-select';
import { optionsBrand } from '../helpers/optionSelect';
import s from './InputSelectBrand.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterBrand } from '../redux/filter/slice';
import { selectBrand } from '../redux/filter/selectors';

const InputSelectBrand = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectBrand);
  const handleBrandChange = data => {
    dispatch(filterBrand(data.value ? data.value : null));
  };

  return (
    <label className="text-[#8a8a89] text-xs relative ">
      Car brand
      <Select
        name="brand"
        options={optionsBrand}
        unstyled
        className={s.customSelect}
        classNamePrefix="react-select"
        onChange={handleBrandChange}
        placeholder="Brand "
        value={
          value ? optionsBrand.find(option => option.value === value) : null
        }
        isClearable={true}
      />
    </label>
  );
};
export default InputSelectBrand;
