import React, { useState } from 'react';
import Logo from './components/Logo/Logo';
import { Link, useLocation } from 'react-router-dom';

import NavLinks from './components/Navbar/NavLink';
// import Profile from './components/Profile/Profile';
import Burger from './components/Burger/Burger';
import Button from '../../components/Button';
import LanguageToggle from './components/LanguageToggle';
import SocialMedia from '../../components/SocialMedia';
import SupportBtn from '../../components/MainButton';
import styles from './header.module.scss';
import '../../App.scss';

const useHasExtraPath = () => { 
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const hasExtraPath = pathSegments.includes("neopalymi") && pathSegments.indexOf("neopalymi") < pathSegments.length - 1;

  return hasExtraPath;
}

const Header = () => {
  const [burger, setBurger] = useState(false);
  const handleBurger = () => {
    setBurger((prevState) => !prevState);
  };

  const hasExtraPath = useHasExtraPath();

  return (
    <header className={`${styles.header}`}>
      <div className={styles.wrapper}>
        <Logo />

        {/* Навігаційні посилання відображаються тільки на великих екранах */}
        <div className={styles.show}>
          <NavLinks />
        </div>

        {/* Перемикач мови відображається тільки на великих екранах */}
        <div className={styles.show}>
          <LanguageToggle />
        </div>

        {/* Бургер-меню */}
        <Burger isOpen={burger} onClick={handleBurger} />
      </div>

      <div
        className={styles.content}
        style={{
          display: hasExtraPath ? (burger ? 'block' : 'none') : 'block',
        }}
      >
        <div className={styles.text}>
          <h1 className={styles.motto}>вогонь запеклих не пече</h1>
          <h2 className={styles.title}>неопалимі</h2>
          <p className={styles.about}>Національна програма зовнішньої реабілітації</p>
          <Button />
        </div>

        {burger ? (
          <div className={styles.menu}>
            <div className={`${styles.item} ${styles.hidden}`}>
              <LanguageToggle />
            </div>
            <nav className={styles.navbar}>
              <ul>
                <li className={`${styles.item} ${styles.hidden}`}>
                  <Link to='/neopalymi/heroes'>Герої</Link>
                </li>
                <li className={`${styles.item} ${styles.hidden}`}>
                  <Link to='/neopalymi/news'>Новини</Link>
                </li>
                <li className={`${styles.item} ${styles.hidden}`}>
                  <Link to='/neopalymi/donate'>Donate</Link>
                </li>
                <li className={`${styles.item}`}>
                  <Link to='/neopalymi/ambassadors'>Амбасадори</Link>
                </li>
                <li className={`${styles.item}`}>
                  <Link to='/neopalymi/clinics'>Клініки</Link>
                </li>
                <li className={`${styles.item}`}>
                  <Link to='/neopalymi/team'>Команда</Link>
                </li>
              </ul>
            </nav>

            {/* Соціальні мережі */}
            <SocialMedia />
          </div>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
