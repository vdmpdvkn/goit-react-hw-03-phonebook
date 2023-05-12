import propTypes from 'prop-types';
import { Input } from 'commonStyles/commonStyles.styled';
const Filter = ({ text, changeFilter }) => {
  return (
    <label>
      Find contacts by name
      <Input onChange={changeFilter} value={text} type="text" name="filter" />
    </label>
  );
};
Filter.propTypes = {
  text: propTypes.string.isRequired,
  changeFilter: propTypes.func.isRequired,
};
export default Filter;
