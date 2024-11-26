import React from 'react';


import styles from './sliderCard.module.scss';

const SliderCard = ({ id, name, imageSrc, handleDetailData }) => {
	console.log(name, imageSrc);
	return (
		<div onClick={() => handleDetailData(id)}className={styles.sliderCard}
			style={{
				backgroundImage: `url(${imageSrc})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
			}}>
			{/* <img className={styles.img} src={imageSrc} alt={name} /> */}
			<div className={styles.text}>
				<p className={styles.name}>{name}</p>
				<a className={styles.link}>
					{"Читати більше"}
				</a>
			</div>
		</div>
	);
};

export default SliderCard;