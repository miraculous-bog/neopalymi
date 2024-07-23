import React from 'react';
import Slider from "react-slick";

import MultiSliderCard from './MultiSliderCard';

import LeftArrow from '../../content_images/left_arrow.svg';
import RightArrow from '../../content_images/right_arrow.svg';

import data_ambassador from '../../helper/data_ambassador';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './multySlider.module.scss';

const SampleNextArrow = (props) => {
	const { onClick } = props;
	return (
		<div
			className={styles.next}
			style={{
				display: "block",
				background: `url(${RightArrow}) no-repeat center center`,
				backgroundSize: 'contain',
				width: '19px',
				height: '51px'
			}}
			onClick={onClick}
		/>
	);
}

const SamplePrevArrow = (props) => {
	const { onClick } = props;
	return (
		<div
			className={styles.prev}
			style={{
				display: "block",
				background: `url(${LeftArrow}) no-repeat center center`,
				backgroundSize: 'contain',
				width: '19px',
				height: '51px'
			}}
			onClick={onClick}
		/>
	);
}

const MultiSlider = () => {

	const settings = {
		className: "center",
		centerMode: true,
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		initialSlide: 0,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: false
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	};

	return (
		<div className={styles.slider}>
			<h1 className={styles.title}>Амбасадори</h1>
			<h2 className={styles.subtitle}>Підтримка потрібна кожному у всі часи. Україні зараз — особливо. Команда «Неопалимих» вдячна нашим амбасадорам. Вони готові допомагати українцям, незважаючи на відстань і будь-які обставини. Пишаємося співпрацею
			з неймовірними людьми!</h2>
			<div className={`${styles.wrapper}`}>
				<div className={`.slider-container`} style={{padding: '0 0px'}}>
					<Slider {...settings}>
						{data_ambassador.map((cardHeroesData) =>
						(<MultiSliderCard name={cardHeroesData.name}
							imageSrc={`https://github.com/miraculous-bog/neopalymi/blob/main/client/src/content_images/photos/${cardHeroesData.imageSrc}?raw=true`}
							key={cardHeroesData.name} />)
						)}
					</Slider>
				</div>
			</div>
		</div>
	);
};

export default MultiSlider;
