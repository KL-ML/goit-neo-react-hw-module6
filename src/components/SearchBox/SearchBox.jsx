import PropTypes from 'prop-types';

import Container from '../Container/Container';
import Heading from '../Heading/Heading';
import css from './SearchBox.module.css';

export default function SearchBox({ onInput, inputValue }) {
  const handleChange = ({ target: { value } }) => {
    onInput(value.trim());
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
          value={inputValue}
          onChange={handleChange}
        />
      </Container>
    </>
  );
}

SearchBox.PropTypes = {
  inputValue: PropTypes.string,
  onInput: PropTypes.func,
};
