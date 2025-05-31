import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from './Container.module.css';

export default function Container({ children, variant }) {
  return <div className={clsx(css.container, css[variant])}>{children}</div>;
}

Container.PropTypes = {
  children: PropTypes.any,
  variant: PropTypes.string.isRequired,
};
