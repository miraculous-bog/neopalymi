import React from 'react';

import SupporterDSNS from '../../content_images/supporter_dsns.svg';
import SupporterKS from '../../content_images/supporter_ks.svg';
import SupporterMOZ from '../../content_images/supporter_moz.svg';
import SupporterMSV from '../../content_images/supporter_msv.svg';
import SupporterNSDCU from '../../content_images/supporter_nsdcu.svg';
import SupporterOffice from '../../content_images/supporter_office.svg';
import SupporterPryncyp from '../../content_images/supporter_pryncyp.svg';


import styles from './supporters.module.scss';

const Supporters = () => {
	return (
		<div className={styles.partners}>
			<h1 className={styles.title}>За підтримки</h1>
			<div className={styles.conteiner}>
				<img className={styles.partner} src={SupporterDSNS} alt="SupporterDSNS" />
				<img className={styles.partner} src={SupporterKS} alt="SupporterKS" />
				<img className={styles.partner} src={SupporterMOZ} alt="SupporterMOZ" />
				<img className={styles.partner} src={SupporterMSV} alt="SupporterMSV" />
				<img className={styles.partner} src={SupporterNSDCU} alt="SupporterNSDCU" />
				<img className={styles.partner} src={SupporterOffice} alt="SupporterOffice" />
				<img className={styles.partner} src={SupporterPryncyp} alt="SupporterPryncyp" />
			</div>
		</div>
	);
};

export default Supporters;