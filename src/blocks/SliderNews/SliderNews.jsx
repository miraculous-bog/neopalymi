import React from 'react';
import Slider from "react-slick";

import SliderCard from '../SliderBlocks/SliderCard';

import LeftArrow from '../../content_images/left_arrow.svg';
import RightArrow from '../../content_images/right_arrow.svg';

import getPath from '../../helper/github_img_path';
import data_news from '../../helper/data_news';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './sliderNews.module.scss';

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

const SliderNews = () => {

	const settings = {
		// className: "center",
		// centerMode: true,
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
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
			<h1 className={styles.title}>Про «Неопалимих» у ЗМІ</h1>

			<div className={`${styles.wrapper}`}>
				<div className={`.slider-container`} style={{ padding: '0 0px' }}>
					<Slider {...settings}>
						{data_news.map((cardNewsData) =>
						(<SliderCard name={cardNewsData.name}
							imageSrc={getPath(cardNewsData.imageSrc)}
							key={cardNewsData.name} />)
						)}
					</Slider>
				</div>
			</div>
		</div>
	);
};

export default SliderNews;
