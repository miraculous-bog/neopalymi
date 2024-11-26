import React from 'react';
import { Link } from 'react-router-dom';

import styles from './sliderMediaCard.module.scss';

const SliderCard = ({ name, imageSrc }) => {
	console.log(name, imageSrc);
	return (
		<Link to='www.google.com'>
			<div className={styles.sliderCard}
				style={{
					backgroundImage: `url(${imageSrc})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
				}}>
				<div className={styles.text}>
					<p className={styles.name}>{name}</p>
					<a className={styles.link}>
						{"Читати більше"}
					</a>
				</div>
			</div>
		</Link>
	);
};

export default SliderCard;