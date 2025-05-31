import PropTypes from 'prop-types';

import clsx from 'clsx';
import css from './Backdrop.module.css';

export default function Backdrop({ children, mobileMenu }) {
  return (
    <>
      {mobileMenu && (
        <div className={clsx(css.backdrop, css.isOpen)}>{children}</div>
      )}
    </>
  );
}

Backdrop.PropTypes = {
  children: PropTypes.any,
  mobileMenu: PropTypes.bool.isRequired,
};
