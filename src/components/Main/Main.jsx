import PropTypes from 'prop-types';
import Sidebar from '../Sidebar/Sidebar';
import css from './Main.module.css';
import sidebarMenu from '../../data/sidebarMenu.json';

export default function Main({ children }) {
  return (
    <div className={css.container}>
      <div className={css.main}>{children}</div>
      <Sidebar menuItems={sidebarMenu} />
    </div>
  );
}

Main.PropTypes = {
  children: PropTypes.any,
};
