import PropTypes from 'prop-types';

import clsx from 'clsx';
import SidebarMenuItem from '../SidebarMenuItem/SidebarMenuItem';
import css from './Sidebar.module.css';
import {
  PiNumberSquareOneLight,
  PiNumberSquareTwoLight,
  PiNumberSquareThreeLight,
  PiNumberSquareFourLight,
  PiNumberSquareFiveLight,
  PiNumberSquareSixLight,
  PiNumberSquareSevenLight,
} from 'react-icons/pi';
import HeaderTitle from '../HeaderTitle/HeaderTitle';

const icons = [
  PiNumberSquareOneLight,
  PiNumberSquareTwoLight,
  PiNumberSquareThreeLight,
  PiNumberSquareFourLight,
  PiNumberSquareFiveLight,
  PiNumberSquareSixLight,
  PiNumberSquareSevenLight,
];

export default function Sidebar({
  menuItems,
  variant,
  mobileMenu,
  moduleNumber,
  moduleTitle,
  onUpdate,
}) {
  return (
    <div className={clsx(css.sidebar, css[variant])}>
      {mobileMenu && (
        <>
          <div className={css.underline}></div>
          <HeaderTitle
            moduleNumber={moduleNumber}
            moduleTitle={moduleTitle}
            mobileMenu={mobileMenu}
            variant="mobileMenu"
            onUpdate={onUpdate}
          />
        </>
      )}
      <ul className={css.menuList}>
        {menuItems.map((item, index) => (
          <SidebarMenuItem
            key={item.id}
            hwTitle={item.title}
            status={item.status}
            link={item.link}
            icon={icons[index]}
          />
        ))}
      </ul>
    </div>
  );
}

Sidebar.PropTypes = {
  children: PropTypes.any,
  menuItems: PropTypes.object,
  variant: PropTypes.string,
  mobileMenu: PropTypes.bool,
  moduleNumber: PropTypes.string,
  moduleTitle: PropTypes.string,
  onUpdate: PropTypes.func,
};
