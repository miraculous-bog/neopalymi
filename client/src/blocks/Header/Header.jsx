import React, { useState, useEffect } from 'react';
import Logo from './components/Logo/Logo';
import MobileNavigation from './components/Navbar/MobileNavigation';
import Navigation from './components/Navbar/Navigation';
// import Profile from './components/Profile/Profile';
import Burger from './components/Burger/Burger';
import SupportBtn from '../../components/SupportBtn';
import styles from './header.module.scss';
import '../../App.scss';

const Header = () => {
  const [burger, setBurger] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleBurger = () => {
    setBurger((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
    >
      <div className={styles.wrapper}>
        <Logo />
        {burger ? <MobileNavigation /> : null}
        <Navigation />
        <SupportBtn isWideMode={false}/>
        {/* <div className={styles.empty}></div> */}
        {/* <Profile /> */}
        <Burger isOpen={burger} onClick={handleBurger} />
      </div>
    </header>
  );
};

export default Header;
