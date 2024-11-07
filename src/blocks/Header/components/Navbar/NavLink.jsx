import React from 'react';
import styles from './navbar.module.scss';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NavLinks = () => {
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };

  return (
    <ul className={styles.list}>
      <motion.li initial={animateFrom} animate={animateTo} className={styles.item}>
        <Link to="/neopalymi/heroes">
          <div className={styles.element}>
            <p className={styles.text}>Герої</p>
          </div>
        </Link>
      </motion.li>
      <motion.li initial={animateFrom} animate={animateTo} className={styles.item}>
        <Link to="/neopalymi/news">
          <div className={styles.element}>
            <p className={styles.text}>Новини</p>
          </div>
        </Link>
      </motion.li>
      <motion.li initial={animateFrom} animate={animateTo} className={styles.item}>
        <Link to="/neopalymi/donate">
          <div className={styles.element}>
            <p className={styles.text}>Donate</p>
          </div>
        </Link>
      </motion.li>
    </ul>
  );
};

export default NavLinks;
