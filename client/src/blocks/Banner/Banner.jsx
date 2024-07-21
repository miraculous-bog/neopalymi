import React from 'react';

import JoinBtn from '../../components/JoinBtn';

import OrangeSmille from '../../content_images/OrangeSmile.png'

import styles from './banner.module.scss';

const Banner = () => {
	return (
		<div className={styles.banner}>
			<div className={styles.wrapper}>
				<div className={styles.info}>
					<h1 className={styles.title}>дозрілі<br /> до змін</h1>
					<p className={styles.motto}>спільнота підтримки та розвитку</p>
				</div>
				<div className={styles.images}>
					<JoinBtn isWideMode={false}/>
					<img className={`${styles.image} ${styles.topImg}`} src={OrangeSmille} alt="orangeSmille" />
					<img className={`${styles.image} ${styles.bottomImg}`} src={OrangeSmille} alt="orangeSmille" />
				</div>
				{/* <img className={styles.img} src={logoImg} alt="logo-img" /> */}
			</div>
		</div>
	);
};

export default Banner;