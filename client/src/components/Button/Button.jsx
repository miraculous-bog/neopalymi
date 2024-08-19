import React from 'react';

import styles from './button.module.scss';

const Button = ({ link='www.google.com', text='Заповнити форму' }) => {
  return (
    <a to={link} target="_blank">
      <button className={styles.button}>
        {text}
      </button>
    </a>
  );
};

export default Button;