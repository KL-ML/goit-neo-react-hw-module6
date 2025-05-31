import PropTypes from 'prop-types';

import clsx from 'clsx';
import css from './Button.module.css';

export default function Button({
  text,
  variant,
  tabletDisplay,
  green,
  red,
  addContact,
  // eslint-disable-next-line no-unused-vars
  icon: Icon,
  iconSize,
  btnType,
}) {
  return (
    <>
      <button
        type={btnType}
        className={clsx(
          css.button,
          css[variant],
          tabletDisplay && css.tabletDisplay,
          green && css.green,
          red && css.red,
          addContact && css.addContact
        )}
      >
        <Icon size={iconSize} />
        {text}
      </button>
    </>
  );
}

Button.PropTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  variant: PropTypes.string,
};
