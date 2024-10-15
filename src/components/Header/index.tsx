import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { ROUTES } from '../../constants';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link to={ROUTES.HOME_URL} className={styles.navLink}>Home</Link>
          </li>
          <li>
            <Link to={ROUTES.SELECTED_URL} className={styles.navLink}>Selected Products</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

