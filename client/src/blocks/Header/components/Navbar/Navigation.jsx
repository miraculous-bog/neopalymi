import React from 'react';
import styles from './navbar.module.scss';
import NavLinks from './NavLink';

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <NavLinks />
    </nav>
  );
};

export default Navigation;