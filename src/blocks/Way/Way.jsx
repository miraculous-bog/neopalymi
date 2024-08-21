import React from 'react';

import Leaf from '../../content_images/leaf.png';
import Tree from '../../content_images/tree.png';

import JoinBtn from '../../components/JoinBtn';

import OrangeSmille from '../../content_images/OrangeSmile.png'

import styles from './way.module.scss';

const Banner = () => {
	return (
		<div className={styles.way}>
			<div className={styles.wrapper}>
				<h1 className={styles.title}>Як дозріли ДОЗРІЛІ:</h1>
				{/* <div className={styles.arrow}>
					<div className={styles.line}></div>
					<div className={styles.right}></div>
				</div>
				<img className={styles.leaf} src={Leaf} alt="leaf" />
				<img className={styles.tree} src={Tree} alt="tree" /> */}
			</div>
		</div>
	);
};

export default Banner;