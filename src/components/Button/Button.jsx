import PropTypes from 'prop-types';

import clsx from 'clsx';
import css from './Button.module.css';

export default function Button({
  text,
  variant,
  positionVariant,
  btnType,
  handleLoadMoreClick,
}) {
  return (
    <>
      <button
        type={btnType}
        onClick={handleLoadMoreClick}
        className={clsx(css.button, css[variant], css[positionVariant])}
      >
        {text}
      </button>
    </>
  );
}

Button.PropTypes = {
  text: PropTypes.string.isRequired,
  btnType: PropTypes.string,
  handleLoadMoreClick: PropTypes.func.isRequired,
  variant: PropTypes.string,
  positionVariant: PropTypes.string,
};
