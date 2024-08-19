import React from 'react';

import { ReactComponent as InstagramIcon } from '../../icons/instagram.svg';
import { ReactComponent as PhoneIcon } from '../../icons/phone.svg';
import { ReactComponent as MailIcon } from '../../icons/mail.svg';

import styles from './socialMedia.module.scss';

const SocialMedia = () => {
	return (
		<div className={styles.container}>
			<ul className={styles.mediaList}>
				<li className={styles.item}>
					<a href="#" className={styles.contactItem} target="_blank">
						<PhoneIcon className={styles.icon} />
					</a>
				</li>
				<li className={styles.item}>
					<a href="#" className={styles.contactItem} target="_blank">
						<MailIcon className={styles.icon} />
					</a>
				</li>
				<li className={styles.item}>
					<a href="#" className={styles.contactItem} target="_blank">
						<InstagramIcon className={styles.icon} />
					</a>
				</li>
			</ul>
		</div>
	);
};

export default SocialMedia;