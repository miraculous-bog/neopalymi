import React from 'react';

import Banner from '../blocks/Banner';
import Mission from '../blocks/Mission';
import Team from '../blocks/Team/Team';
import Values from '../blocks/Values';
import Purpose from '../blocks/Purpose';
import Map from '../blocks/Map';
import Partners from '../blocks/Partners/Partners';
import Timeline from '../blocks/Timeline';
import Way from '../blocks/Way';
import SliderBlocks from '../blocks/SliderBlocks';
import SliderNews from '../blocks/SliderNews';
import styles from './main.module.scss';

const Main = () => {
  return (
    <div className={styles.main}>
      <SliderBlocks />
      <SliderNews />

      <Banner />
      <Mission />
      <Way />
      <Timeline />
      <Team />
      <Values />
      <Purpose />
      <Map />
      <Partners />

    </div>
  );
};

export default Main;