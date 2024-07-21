import React from 'react';


import styles from './sliderCard.module.scss';

const SliderCard = ({ name, imageSrc,  }) => {
	return (
		<div className={styles.sliderCard}>
			<img src={imageSrc} alt={name} />
		</div>
	);
};

export default SliderCard;