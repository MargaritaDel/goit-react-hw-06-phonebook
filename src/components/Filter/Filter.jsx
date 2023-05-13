import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import PropTypes from 'prop-types';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <>
      <p>Find contacts by name</p>
      <input onChange={handleFilterChange} type="search" name="filter" id="" />
    </>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Filter;