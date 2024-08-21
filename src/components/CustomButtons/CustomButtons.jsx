import React from 'react';
import styles from './customButtons.module.scss';
import JoinBtn from '../JoinBtn';
const CustomButtonGroup = ({ next, previous }) => {
    return (
        <div className={styles.buttons}>
            <button className={styles.left} onClick={previous}>⟵</button>
            <button className={styles.right} onClick={next}>⟶</button>
        </div>
    );
};

export default CustomButtonGroup;