import PropTypes from 'prop-types';
import css from './HeaderTitle.module.css';
import { IoReorderFourOutline, IoCloseOutline } from 'react-icons/io5';
import clsx from 'clsx';

export default function HeaderTitle({
  moduleNumber,
  moduleTitle,
  mobileMenu,
  variant,
  onUpdate,
}) {
  function handleClick() {
    onUpdate(mobileMenu);
  }

  return (
    <div className={clsx(css.headerTitleWrap, css[variant])}>
      {mobileMenu && (
        <button
          className={clsx(css.burgerMenuBtn, css.closeBtn)}
          type="button"
          onClick={handleClick}
        >
          <IoCloseOutline size={24} className={css.iconClose} />
        </button>
      )}
      <div className={css.headerTitle}>
        <p
          className={css.headerTitleGradient}
        >{`React. HW-${moduleNumber}.`}</p>
        <p className={css.headerText}>{moduleTitle}</p>
      </div>
      {!mobileMenu && (
        <button
          className={css.burgerMenuBtn}
          type="button"
          onClick={handleClick}
        >
          <IoReorderFourOutline size={22} className={css.iconBurger} />
        </button>
      )}
    </div>
  );
}

HeaderTitle.PropTypes = {
  moduleNumber: PropTypes.string.isRequired,
  moduleTitle: PropTypes.string.isRequired,
  mobileMenu: PropTypes.bool.isRequired,
  variant: PropTypes.string,
  onUpdate: PropTypes.func,
};
