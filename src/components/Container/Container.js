import styles from './Container.module.css';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';

export default function Container() {
  return <div className={styles.container}><Outlet /></div>;
}

Container.propTypes = {
  children: PropTypes.element.isRequired,
};
