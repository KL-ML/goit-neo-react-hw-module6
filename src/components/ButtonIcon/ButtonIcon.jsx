import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from './ButtonIcon.module.css';

export default function ButtonIcon({
  variant,
  type,
  // eslint-disable-next-line no-unused-vars
  icon: Icon,
  iconVariant,
  iconSize,
  mobileDisplay,
  green,
  red,
  onDelete,
  id,
  isDisabled,
}) {
  function handleClick(id) {
    onDelete && onDelete(id);
  }
  return (
    <>
      <button
        className={clsx(
          css.iconBtn,
          css[variant],
          mobileDisplay && css.mobileDisplay,
          green && css.green,
          red && css.red
        )}
        disabled={isDisabled}
        type={type}
        onClick={() => handleClick(id)}
      >
        <Icon size={iconSize} className={css[iconVariant]} />
      </button>
    </>
  );
}

ButtonIcon.PropTypes = {
  variant: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.string,
  iconVariant: PropTypes.string,
  iconSize: PropTypes.number,
  mobileDisplay: PropTypes.string,
  green: PropTypes.string,
  red: PropTypes.string,
  onDelete: PropTypes.func,
  id: PropTypes.string,
};
