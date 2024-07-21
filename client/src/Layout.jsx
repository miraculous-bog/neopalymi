import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './blocks/Header';
// import Footer from './pages/Footer';

import './App.scss';
import Footer from './blocks/Footer/Footer';
const Layout = () => {
  return (
    <>
      {/* <Header /> */}
      <div>
        <Outlet />
        {/* <Footer /> */}
      </div>
      {/* <Header /> */}
      {/* <Footer /> */}
    </>
  );
};

export default Layout;