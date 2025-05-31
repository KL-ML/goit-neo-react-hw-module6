import PropTypes from 'prop-types';
import css from './Loader.module.css';
import { ClipLoader } from 'react-spinners';

export default function Loader({ loading }) {
  return (
    <>
      <div className={css.loader}>
        <ClipLoader
          color="orange"
          loading={loading}
          size={70}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </>
  );
}

Loader.PropTypes = {
  loading: PropTypes.bool,
};
