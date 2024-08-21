import React from 'react';

import JoinBtn from '../../components/JoinBtn';

import Clinic from '../../content_images/clinic.svg';
import Patients from '../../content_images/people.svg';
import Regions from '../../content_images/ukraine_map.svg';
import Healthcare from '../../content_images/people.svg';
import OrangeDefault from '../../content_images/OrangeDefault.png'

import styles from './acheivment.module.scss';

const Acheivment = () => {
	return (
		<div className={styles.acheivment} id="mission">
			<div className={styles.wrapper}>
				<div className={styles.container}>
					<div className={styles.item}>
						<div className={styles.image}>
							<img src={Clinic} alt="" />
						</div>
						<h2 className={styles.title}>
							30+ клінік по всій Україні, а також
							у Польщі й Молдові
						</h2>
					</div>
					<div className={styles.item}>
						<div className={styles.image}>
							<img src={Patients} alt="" />
						</div>
						<h2 className={styles.title}>
							Близько 150 пацієнтів уже отримують допомогу
						</h2>
					</div>
					<div className={styles.item}>
						<div className={styles.image}>
							<img src={Regions} alt="" />
						</div>
						<h2 className={styles.title}>
							13 областей України,
							у яких вже відбувається лікування.
						</h2>
					</div>
					<div className={styles.item}>
						<div className={styles.image}>
							<img src={Healthcare} alt="" />
						</div>
						<h2 className={styles.title}>
							Перший у світі комплексний протокол лікування опіків і рубців, отриманих внаслідок війни
						</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Acheivment;