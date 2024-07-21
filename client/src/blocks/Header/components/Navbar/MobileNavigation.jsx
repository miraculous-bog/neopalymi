import React from 'react';
import styles from './navbar.module.scss';
import NavLinks from './NavLink';

const MobileNavigation = () => {
  return (
    <nav className={styles.mobnavigation}>
      <NavLinks />
    </nav>
  );
};

export default MobileNavigation;