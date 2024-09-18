import Select from 'react-select';
import { optionsBrand } from '../helpers/optionSelect';
import s from './InputSelectBrand.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterBrand } from '../redux/filter/slice';
import { selectBrand } from '../redux/filter/selectors';

const InputSelectBrand = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectBrand);
  console.log(value);

  const handleBrandChange = data => dispatch(filterBrand(data.value));

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
        value={value}
        // defaultValue={optionsBrand[0].value}
        // defaultInputValue={optionsBrand[0].value}
      />
    </label>
  );
};
// TODO add reset value for inputs - type select
export default InputSelectBrand;
