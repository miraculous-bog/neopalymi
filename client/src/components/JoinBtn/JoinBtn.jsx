import React from 'react';
import styles from './joinBtn.module.scss';

const JoinBtn = ({ isWideMode }) => {
  return (
    <a href="https://t.me/dozrili_bot?start=w19479776" target="_blank">
      <div className={styles.button}>
        <p>приєднатися{isWideMode ? null : (<br />)} до спільноти</p>
      </div >
    </a>
  );
};

export default JoinBtn;