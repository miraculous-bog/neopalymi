import React from 'react';

import { Link } from 'react-router-dom';

import logoImg from '../../../../icons/logo.svg';
// import logoText from '../../../../icons/logoText.svg';

import styles from './logo.module.scss';

const Logo = () => {
  return (
    <div className={styles.wrapper}>
      <Link to='/'>
      <img className={styles.img} src={logoImg} alt="logo-img" />
      </Link>
      {/* <img className={styles.text} src={logoText} alt="logo-text" /> */}
    </div>
  );
};

export default Logo;