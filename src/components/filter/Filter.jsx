import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from '../../redux/actions';
import { getFiltered } from '../../redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFiltered);

  const handleFilterChange = ({ target }) => {
    dispatch(filterContact(target.value));
  };

  return (
    <div>
      <label className="form-label" htmlFor="filter">
        Find contacts by name:{' '}
      </label>
      <input
        style={{ width: '300px' }}
        className="form-control"
        type="text"
        name="filter"
        id="filter"
        value={filterValue}
        onChange={handleFilterChange}
      />
    </div>
  );
};

export default Filter;
