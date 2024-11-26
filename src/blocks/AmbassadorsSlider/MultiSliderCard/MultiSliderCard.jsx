import React from 'react';
import styles from './multiSliderCard.module.scss';
import URL from '../../../helper/data';
const MultiSliderCard = ({id, name, imageSrc ,handleDetailData}) => {
	return (
		<div className={styles.sliderCard}  onClick={() => handleDetailData(id)}>
			<img className={styles.img} src={URL +'/'+imageSrc} alt={name} />
			<p className={styles.name}>{name}</p>
		</div>
	);
};

export default MultiSliderCard;
