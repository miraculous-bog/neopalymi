/* eslint-disable */
import React from 'react';
import styles from './burger.module.scss';

import MenuImg from '../../../../icons/menu.png';
import CloseImg from '../../../../icons/close.png';

const Burger = ({ isOpen, onClick }) => {
  return (
    <div onClick={onClick} className={styles.burger}>
      {isOpen ? (<img src={CloseImg} alt="menu" />): (<img src={MenuImg} alt="close" />)}
    </div>
  );
};

export default Burger;