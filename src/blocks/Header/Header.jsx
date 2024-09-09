import React, { useState, useEffect } from 'react';
import Logo from './components/Logo/Logo';
import NavLinks from './components/Navbar/NavLink';
// import Profile from './components/Profile/Profile';
import Burger from './components/Burger/Burger';
import Button from '../../components/Button';
import LanguageToggle from './components/LanguageToggle';
import SocialMedia from '../../components/SocialMedia';
import SupportBtn from '../../components/MainButton';
import styles from './header.module.scss';
import '../../App.scss';

const Header = () => {
  const [burger, setBurger] = useState(true);
  const handleBurger = () => {
    setBurger((prevState) => !prevState);
  };


  return (
    <header
      className={`${styles.header}`}
    >
      <div className={styles.wrapper}>
        <Logo />

        <div className={styles.show}>
          <NavLinks />
        </div>
        <div className={styles.show}>
          <LanguageToggle />
        </div>

        <Burger isOpen={burger} onClick={handleBurger} />
      </div>
      <div className={styles.content}>
        <div className={styles.text}>
          <h1 className={styles.motto}>вогонь запеклих не пече</h1>
          <h2 className={styles.title}>неопалимі</h2>
          <p className={styles.about}>Національна програма зовнішньої реабілітації</p>
          <Button />
        </div>
        {burger ? (<div className={styles.menu}>
          <div className={`${styles.item} ${styles.hidden}`}>
            <LanguageToggle />
          </div>
          <nav className={styles.navbar}>
            <a className={`${styles.item} ${styles.hidden}`} href="#">
              <li>
                Герої
              </li>
            </a>
            <a className={`${styles.item} ${styles.hidden}`} href="#">
              <li>
                Новини
              </li>
            </a>
            <a className={`${styles.item} ${styles.hidden}`} href="#">
              <li>
                Donate
              </li>
            </a>
            <a className={styles.item} href="#">

              <li>
                Амбасадори
              </li>
            </a>
            <a className={styles.item} href="#">
              <li>
                Клініки

              </li>
            </a>
            <a className={styles.item} href="#">
              <li>
                Команда
              </li>
            </a>
          </nav>
          <SocialMedia />
        </div>) : null}
      </div>
    </header >
  );
};

export default Header;
