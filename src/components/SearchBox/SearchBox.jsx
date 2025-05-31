import Container from '../Container/Container';
import Heading from '../Heading/Heading';
import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';

export default function SearchBox() {
  const filter = useSelector(state => state.filters.name);
  const dispatch = useDispatch();

  const handleChange = ({ target: { value } }) => {
    dispatch(changeFilter(value.trim()));
  };

  return (
    <>
      <Container variant="innerContainer">
        <Heading variant="cardTitle">
          Find <span>| Search by name</span>
        </Heading>
        <input
          className={css.searchInput}
          type="text"
          value={filter}
          onChange={handleChange}
        />
      </Container>
    </>
  );
}
