import React from 'react';
import Button from '../../components/Button/Button';
import getPath from '../../helper/github_img_path';
import styles from './quote.module.scss';

const Quote = ({data}) => {
	const { quote, name, about, img, type } = data;
	console.log({ quote, name, about, img, type });
	return (
		<div className={styles.quote}>
			<div className={styles.wrapper}>
				<div
					className={`${styles.info} ${type === 'left' ? styles.right : styles.left
						}`}
				>
					<div className={styles.text}>
						<h3>
							{quote}
						</h3>
						<p>
							{name}
							<br />
							{about}
						</p>
					</div>
					<img
						className={styles.img}
						src={getPath(img)}
						alt="artem_melnyk"
					/>
				</div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						marginTop: '55px',
					}}
				>
					<Button text="Заповнити форму" />
				</div>
			</div>
		</div>
	);
};

export default Quote;
