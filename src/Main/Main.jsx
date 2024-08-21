import React from 'react';

import AboutUs from '../blocks/AboutUs';
import SliderBlocks from '../blocks/SliderBlocks';
import SliderNews from '../blocks/SliderNews';
import MultiSlider from '../blocks/MultiSlider';
import Quote from '../blocks/Quote';
import styles from './main.module.scss';
import Acheivment from '../blocks/Acheivment';

import DataQuotes from '../helper/data_quotes'
console.log(DataQuotes);
const Main = () => {
  return (
    <div className={styles.main}>
      <AboutUs />
      <Quote data={DataQuotes.serhiy} />
      <Acheivment />
      <Quote data={DataQuotes.ihor} />
      <SliderBlocks />
      <SliderNews />
      <MultiSlider />
    
    </div>
  );
};

export default Main;