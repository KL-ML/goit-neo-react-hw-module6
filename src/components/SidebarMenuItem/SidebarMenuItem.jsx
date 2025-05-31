import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from './SidebarMenuItem.module.css';

// eslint-disable-next-line no-unused-vars
export default function SidebarMenuItem({ hwTitle, status, link, icon: Icon }) {
  return (
    <li className={clsx(css.menuItem, status ? css.active : css.inactive)}>
      <a href={link}>
        <p>Homework</p>
        <p className={css.hwTitle}>{hwTitle}</p>
      </a>
      <Icon size="20" />
    </li>
  );
}

SidebarMenuItem.PropTypes = {
  children: PropTypes.any,
  hwTitle: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
  link: PropTypes.string.isRequired,
  icon: PropTypes.string,
};
