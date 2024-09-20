import Select from 'react-select';
import { optionsBrand } from '../helpers/optionSelect';
import s from './InputSelectBrand.module.css';
import { useDispatch } from 'react-redux';
import { filterBrand } from '../redux/filter/slice';

const InputSelectBrand = () => {
  const dispatch = useDispatch();
  const handleBrandChange = data => {
    dispatch(filterBrand(data.value));
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
      />
    </label>
  );
};
// TODO add reset value for inputs - type select scroll
export default InputSelectBrand;
