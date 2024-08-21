import React from 'react';


import styles from './sliderCard.module.scss';

const SliderCard = ({ name, imageSrc, }) => {
	return (
		<div className={styles.sliderCard}
			style={{
				backgroundImage: `url(${imageSrc})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
			}}>
			{/* <img className={styles.img} src={imageSrc} alt={name} /> */}
			<div className={styles.text}>
				<p className={styles.name}>{name}</p>
				<a className={styles.link} href="#">читати історію</a>
			</div>
		</div>
	);
};

export default SliderCard;