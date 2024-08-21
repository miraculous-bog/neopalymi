import React from 'react';


import styles from './multiSliderCard.module.scss';

const MultiSliderCard = ({ name, imageSrc, }) => {
	return (
		<div className={styles.sliderCard}>
			<img className={styles.img} src={imageSrc} alt={name} />
			<p className={styles.name}>{name}</p>
		</div>
	);
};

export default MultiSliderCard;