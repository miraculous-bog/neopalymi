import React from 'react';


import OrangeConfident from '../../content_images/OrangeConfident.png'
import OrangeCute from '../../content_images/OrangeCute.png'
import OrangeDouble from '../../content_images/OrangeDouble.png'

import styles from './values.module.scss';

const Values = () => {
	return (
		<div className={styles.values} id="project">
			<h1 className={styles.title}>наші цінності:</h1>
			<div className={styles.items}>
				<div className={styles.item}>
					<img className={styles.image} src={OrangeConfident} alt="rozvytok" />
					<div className={styles.info}>
						<h3 className={styles.title}>Розвиток</h3>
						<p className={styles.text}>Ми вбачаємо місію свідомої активної людини у служінні через реалізацію власного потенціалу, що завжди грунтується на особистісному зростанні</p>
					</div>
				</div>
				<div className={styles.item}>
					<img className={styles.image} src={OrangeCute} alt="rozvytok" />
					<div className={styles.info}>
						<h3 className={styles.title}>Комфорт</h3>
						<p className={styles.text}>Ми навчаємося за принципом рівний-рівному і застосовуємо засади ненасильницької комунікації та травма-інформаваного підходу</p>
					</div>
				</div>
				<div className={styles.item}>
					<img className={styles.image} src={OrangeDouble} alt="rozvytok" />
					<div className={styles.info}>
						<h3 className={styles.title}>Спільнота</h3>
						<p className={styles.text}>Ми створюємо безпечний простір для взаємодії, де люди довіряють і приймають одне одного такими, якими вони насправді є</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Values;