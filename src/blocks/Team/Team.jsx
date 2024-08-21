import React from 'react';


import CardMember from './CardMember';

import OrangeSmille from '../../content_images/OrangeSmile.png';

import data_team from '../../helper/data_team';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from './team.module.scss';
const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 901 },
		items: 4
	},
	tablet: {
		breakpoint: { max: 900, min: 606 },
		items: 3
	},
	minitablet: {
		breakpoint: { max: 605, min: 465 },
		items: 2
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1
	}
};
const Team = () => {
	const path = 'https://github.com/miraculous-bog/dozrili/blob/main/src/content_images/photos/';
	console.log(data_team);
	return (
		<div className={styles.team} id="team">
			<div className={styles.titleContainer}>
				<div className={styles.images}>
					<img className={`${styles.image} ${styles.topImg}`} src={OrangeSmille} alt="orangeSmille" />
					<img className={`${styles.image} ${styles.bottomImg}`} src={OrangeSmille} alt="orangeSmille" />
				</div>
				<h2 className={styles.title}>команда:</h2>
			</div>
			<div className={styles.wrapper}>
				<Carousel responsive={responsive}
					swipeable={true}
					draggable={true}
					showDots={true}
					autoplay={true}
					autoPlaySpeed={2000}
					containerClass={styles.carouselstyles}
					itemClass={styles.carouselitemstyles}>
					{data_team.map((cardMemberData) =>
					(<CardMember name={cardMemberData.name}
						role={cardMemberData.role}
						link={cardMemberData.link}
						imageSrc={`https://github.com/miraculous-bog/dozrili/blob/main/client/src/content_images/photos/${cardMemberData.imageSrc}?raw=true`}
						key={cardMemberData.name} />)
					)}
				</Carousel>
			</div>
		</div>
	);
};

export default Team;