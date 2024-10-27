import React from 'react';
import styles from './navbar.module.scss';
import HomeIcon from '../../../../icons/burger_active.svg';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

const NavLinks = () => {
  const navigate = useNavigate();

  const handleNavClick = (path, anchor) => {
    if (window.location.pathname !== '/') {
      navigate('/'); // Перенаправлення на головну сторінку
    }
    setTimeout(() => {
      if (anchor) {
        window.location.hash = anchor; // Встановлення якоря в URL
      }
    }, 0);
  };
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };
  return (

    <ul className={styles.list}>
      <motion.li initial={animateFrom} animate={animateTo} className={styles.item}>
        <Link to="/neopalymi/heroes" onClick={() => handleNavClick('/', 'neopalymi/heroes')}>
          <div className={styles.element}>
            {/* <HomeIcon/> */}
            <p className={styles.text}>Герої</p>
          </div>
        </Link>
      </motion.li>
      <motion.li initial={animateFrom} animate={animateTo} className={styles.item}>
        <Link to="/neopalymi/news" onClick={() => handleNavClick('/', 'neopalymi/news')}>
          <div className={styles.element}>
            {/* <HomeIcon/> */}
            <p className={styles.text}>Новини</p>
          </div>
        </Link>
      </motion.li>
      <motion.li initial={animateFrom} animate={animateTo} className={styles.item}>
        <Link to="/neopalymi/donate" onClick={() => handleNavClick('/', 'neopalymi/donate')}>
          <div className={styles.element}>
            {/* <HomeIcon/> */}
            <p className={styles.text}>Donate</p>
          </div>
        </Link>
      </motion.li>
    </ul>

  );
};

export default NavLinks;