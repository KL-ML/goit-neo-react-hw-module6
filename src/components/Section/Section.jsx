import PropTypes from 'prop-types';
import css from './Section.module.css';

export default function Section({ children }) {
  return <div className={css.section}>{children}</div>;
}

Section.PropTypes = {
  children: PropTypes.any,
};
