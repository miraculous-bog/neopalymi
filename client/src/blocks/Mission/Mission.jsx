import React from 'react';

import JoinBtn from '../../components/JoinBtn';

import OrangeDefault from '../../content_images/OrangeDefault.png'

import styles from './mission.module.scss';

const Banner = () => {
	return (
		<div className={styles.mission} id="mission">
			<div className={styles.wrapper}>
				<div className={styles.info}>
					<p className={styles.text}>місія ГО “ДОЗРІЛІ”:</p>
					<h1 className={styles.title}>реалізуємо менторські програми для активної молоді та громадських ініціатив задля їх сталого розвитку без надриву</h1>
				</div>
				<div className={styles.imageContainer}>
					<img className={styles.image} src={OrangeDefault} alt="orangeDefault" />
				</div>
				{/* <img className={styles.img} src={logoImg} alt="logo-img" /> */}
			</div>
		</div>
	);
};

export default Banner;