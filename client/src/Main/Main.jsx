import React from 'react';

import AboutUs from '../blocks/AboutUs';
import SliderBlocks from '../blocks/SliderBlocks';
import SliderNews from '../blocks/SliderNews';
import MultiSlider from '../blocks/MultiSlider';
import Quote from '../blocks/Quote';
import styles from './main.module.scss';

const Main = () => {
  return (
    <div className={styles.main}>
      <AboutUs />
      <Quote />
      <SliderBlocks />
      <SliderNews />
      <MultiSlider />
    
    </div>
  );
};

export default Main;