import React from 'react';

import AboutUs from '../blocks/AboutUs';
import SliderBlocks from '../blocks/SliderBlocks';
import SliderNews from '../blocks/SliderNews';
import MultiSlider from '../blocks/MultiSlider';
import Quote from '../blocks/Quote';
import styles from './main.module.scss';
import Acheivment from '../blocks/Acheivment';
import Partners from '../blocks/Partners/Partners';
import Supporters from '../blocks/Supporters/Supporters';
import Map from '../blocks/Map/Map';

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
      <Map />
      <Partners />
      <Supporters />
      
    </div>
  );
};

export default Main;