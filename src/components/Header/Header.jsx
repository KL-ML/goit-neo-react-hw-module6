import PropTypes from 'prop-types';

import HeaderTitle from '../HeaderTitle/HeaderTitle';
import Logo from '../Logo/Logo';
import css from './Header.module.css';
import Navigation from '../Navigation/Navigation';

export default function Header({
  logoImgPath,
  onUpdate,
  moduleNumber,
  moduleTitle,
}) {
  return (
    <header className={css.header}>
      <div className={css.navGroup}>
        <Logo logoImgPath={logoImgPath} />
      </div>
      <HeaderTitle
        moduleNumber={moduleNumber}
        moduleTitle={moduleTitle}
        onUpdate={onUpdate}
      />
    </header>
  );
}

Header.PropTypes = {
  logoImgPath: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onSearch: PropTypes.func,
  isDisabled: PropTypes.bool,
  moduleNumber: PropTypes.string,
  moduleTitle: PropTypes.string,
};
