import React from 'react';
import { ReactComponent as PhoneIcon } from '../../icons/phone.svg'; // Змініть шлях до вашого SVG файлу
import { ReactComponent as EmailIcon } from '../../icons/mail.svg'; // Змініть шлях до вашого SVG файлу
import { ReactComponent as InstagramIcon } from '../../icons/instagram.svg';
import { ReactComponent as LinkedinIcon } from '../../icons/linkedin.svg';
import { ReactComponent as FacebookIcon } from '../../icons/facebook.svg';
import Logo from '../Header/components/Logo/Logo';
import SocialMedia from '../../components/SocialMedia';
import styles from './footer.module.scss';

const Footer = () => {

	return (
		<div className={styles.footer}>
			<div className={styles.wrapper}>
				<ul className={styles.list}>
					<a className={`${styles.item} ${styles.hidden}`} href="#">
						<li>
							Герої
						</li>
					</a>
					<a className={`${styles.item} ${styles.hidden}`} href="#">
						<li>
							Новини
						</li>
					</a>
					<a className={`${styles.item} ${styles.hidden}`} href="#">
						<li>
							Donate
						</li>
					</a>
				</ul>
				<ul className={styles.list}>

					<a className={styles.item} href="#">
						<li>
							Амбасадори
						</li>
					</a>
					<a className={styles.item} href="#">
						<li>
							Клініки

						</li>
					</a>
					<a className={styles.item} href="#">
						<li>
							Команда
						</li>
					</a>
				</ul>
				<SocialMedia />
			</div>
		</div>
	);
};

export default Footer;