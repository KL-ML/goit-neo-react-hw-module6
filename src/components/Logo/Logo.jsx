import PropTypes from 'prop-types';
import css from './Logo.module.css';
export default function Logo({ logoImgPath }) {
  return (
    <>
      <a className={css.logo} href="./index.html" aria-label="Site logo">
        <img src={logoImgPath} alt="GoIt logo" width="100" height="30" />
      </a>
    </>
  );
}

Logo.PropTypes = {
  logoImgPath: PropTypes.string.isRequired,
};
