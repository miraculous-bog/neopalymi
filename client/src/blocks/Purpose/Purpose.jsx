import React from 'react';

import Oranges from '../../content_images/Oranges.png'

import styles from './purpose.module.scss';

const Values = () => {
	return (
		<div className={styles.purpose} id="community">
			<h1 className={styles.title}>чим корисна спільнота:</h1>
			<div className={styles.wrapper}>
				<img className={styles.image} src={Oranges} alt="Oranges" />
				<div className={styles.info}>
					<h5 className={styles.titletext}><span className={styles.highlight}>Наша мета</span> - забезпечити платформу для розвитку як особистісного, так і професійного для молодих людей, задля їх реалізації в Україні та сприяння позитивним змінам в державі.</h5>
					<ul className={styles.list}>
						<li className={styles.item}>Проводимо безкоштовні практико-орієнтовані воркшопи для покращення мʼяких навичок</li>
						<li className={styles.item}>Реалізуємо менторські програми за власною методологією</li>
						<li className={styles.item}>Навчаємо менторству та фасилітації</li>
						<li className={styles.item}>Підтримуємо одне одного у спільному телеграм-чаті</li>
						<li className={styles.item}>Ділимось кориснощами, пропонуємо одне одному цікаві можливості та, навіть, роботу</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Values;