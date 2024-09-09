import React from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import PartnerTabletki from '../../content_images/partner_tabletki.svg';
import PartnerLoreal from '../../content_images/partner_loreal.svg';
import PartnerVeteranHub from '../../content_images/partner_veteranHub.svg';
import PartnerStatus from '../../content_images/partner_status.svg';
import PartnerTotis from '../../content_images/partner_totis.svg';
import PartnerDigitalBeauty from '../../content_images/partner_digitalBeauty.svg';

import styles from './partners.module.scss';

const Partners = () => {
	return (
		<div className={styles.partners}>
			<h1 className={styles.title}>Партнери</h1>
			<h2 className={styles.subtitle}>До співпраці з «Неопалимими» доєднуються великі провідні компанії з найрізноманітніших галузей. Разом — можемо більше!</h2>
			<div className={styles.conteiner}>
				<img className={styles.partner} src={PartnerTabletki} alt="PartnerTabletki" />
				<img className={styles.partner} src={PartnerLoreal} alt="PartnerLoreal" />
				<img className={styles.partner} src={PartnerVeteranHub} alt="PartnerVeteranHub" />
				<img className={styles.partner} src={PartnerStatus} alt="PartnerStatus" />
				<img className={styles.partner} src={PartnerTotis} alt="PartnerTotis" />
				<img className={styles.partner} src={PartnerDigitalBeauty} alt="PartnerDigitalBeauty" />
			</div>
		</div>
	);
};

export default Partners;