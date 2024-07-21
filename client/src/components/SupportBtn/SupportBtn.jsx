import React from 'react';

import styles from './supportBtn.module.scss';

const SupportBtn = ({ isWideMode }) => {
  return (
    <a to='https://send.monobank.ua/jar/7C743Le9ff' target="_blank">
    <div className={styles.button}>
      <p>&#8372; підтримати {isWideMode ? 'спільноту' : null}</p>
    </div>
    </a>
  );
};

export default SupportBtn;