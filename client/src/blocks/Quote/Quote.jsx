import React from 'react';

import Button from '../../components/Button/Button';

import getPath from '../../helper/github_img_path';
import styles from './quote.module.scss';

const Quote = () => {
	const leftSideStyles = {
		flexDirection: 'row',
	}

	const rightSideStyles = {
		flexDirection: 'row-reverse',
	}

	const types = 'right';
	return (
		<div className={styles.quote}>
			<div className={styles.wrapper}>
				<div className={styles.info} style={types==='left'? leftSideStyles : rightSideStyles}>
					<div className={styles.text}>
						<h3>«Лікарі з кожним пацієнтом працюють по-особливому, справді хочуть допомогти. Тоді з’являється відчуття, що ми комусь ще потрібні, що ми — не самотні»</h3>
						<p>Ігор Бистрий<br />пацієнт “Неопалимих”, воїн 54 окремої механізованої бригади ЗСУ</p>
					</div>
					<img className={styles.img} src={getPath(`hero_artem_melnyk.png`)} alt="artem_melnyk" />
				</div>
				<div style={{ display: 'flex', justifyContent: 'center', marginTop: '55px' }}>
					<Button text='Заповнити форму' />
				</div>
			</div>
		</div>
	);
};

export default Quote;