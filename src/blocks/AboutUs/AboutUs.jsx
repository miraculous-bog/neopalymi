import React from 'react';
import { Link } from 'react-router-dom';
import URL_FORM from '../../helper/data_url_form';
import Button from '../../components/Button/Button';

import styles from './aboutUs.module.scss';

const AboutUs = () => {

	return (
		<div className={styles.footer}>
			<div className={styles.wrapper}>
				<h1 className={styles.title}>про нас</h1>
				<h2 className={styles.subtitle}>«Неопалимі» — національна програма безоплатної зовнішньої реабілітації й лікування деформаційних, поствійськових травм, опіків і рубців для людей, які постраждали внаслідок війни.</h2>

				<div className={styles.info}>
					<div>
						<h3>Ми забезпечуємо:</h3>
						<ul>
							<li>відновлення зовнішності та роботу з естетичними ураженнями</li>
							<li>повернення функціональності кінцівок (працюємо з деформаціями в суглобних і ліктьових долях, на ногах, шиї та спині)</li>
							<li>лікування військових і цивільних після катувань</li>
						</ul>
					</div>
					<div>
						<h3>Щоб стати пацієнтом проекту “Неопалими” потрібно:</h3>
						<ul>
							<li>мати підтвердження від лікаря/військово-медичної комісії про отримання НЕпобутової травми</li>
							<li>заповнити реєстраційну форму</li>
							<li>або звернутися до команди «Неопалимих» в Instagram</li>
						</ul>
					</div>
				</div>
				<div style={{ display: 'flex', justifyContent: 'center', marginTop: '55px'}}>
				<Link to={URL_FORM}>
					<Button text='Заповнити форму' />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;