import React from 'react';
import Slider from "react-slick";

import SliderCard from './SliderCard';

import data_heroes from '../../helper/data_heroes';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import styles from './sliderBlocks.module.scss';

const SliderBlocks = () => {

	const settings = {
		dots: true,
		infinite: true,
		speed: 2500,
		slidesToShow: 3,
		slidesToScroll: 1
	  };

	return (
		<div className={styles.slider}>
			<h1 className={styles.title}>Герої</h1>
			<h2 className={styles.subtitle}>Кожна історія наших пацієнтів — про надзвичайно складний і водночас героїчний життєвий досвід. Воєнні дії, полон, окупація, евакуація, обстріли — усі ці жахливі події залишили слід на тілах наших «неопалимих».</h2>
			<div className={styles.wrapper}>
				<Slider {...settings}>
				{data_heroes.map((cardHeroesData) =>
					(<SliderCard name={cardHeroesData.name}
						imageSrc={`https://github.com/miraculous-bog/dozrili/blob/main/client/src/content_images/photos/${cardHeroesData.imageSrc}?raw=true`}
						key={cardHeroesData.name} />)
					)}
				</Slider>
			</div>
		</div>
	);
};

export default SliderBlocks;