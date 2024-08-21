import React from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import PartnerOrangeGreat from '../../content_images/partner_Orange_Great.svg';
import PartnerUal from '../../content_images/partner_ual.svg';
import PartnerOfficeDii from '../../content_images/partner_office_dii.svg';
import PartnerPramyemoRazom from '../../content_images/partner_pramyemo_razom.svg';
import PartnerGapYear from '../../content_images/partner_gap_year.svg';
import PartnerTeploSerdni from '../../content_images/partner_teplo_serdni.svg';
import PartnerMcv from '../../content_images/partner_mcv.svg';
import PartnerKaritas from '../../content_images/partner_karitas.svg';
import PartnerUnicef from '../../content_images/partner_unicef.png';
import PartnerMinisterstvoMolodi from '../../content_images/partner_MinisterstvoMolodi.png';
import PartnerGermanCooperation from '../../content_images/partner_GermanCooperation.jpg';
import PartnerUsap from '../../content_images/partner_usap.svg';
import PartnerEID from '../../content_images/partner_EID.png';

import styles from './partners.module.scss';
const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 901 },
		items: 4
	},
	tablet: {
		breakpoint: { max: 900, min: 606 },
		items: 3
	},
	minitablet: {
		breakpoint: { max: 605, min: 0 },
		items: 2
	},
};
const Partners = () => {

	return (
		<div className={styles.partners}>
			<h2 className={styles.title}>партнери:</h2>
			<div className={styles.conteiner}>
			<Carousel responsive={responsive}
					swipeable={true}
					draggable={true}
					showDots={true}
					autoplay={true}
					autoPlaySpeed={2000}
					containerClass={styles.carouselstyles}
					itemClass={styles.carouselitemstyles}>
				<img className={styles.partner} src={PartnerOrangeGreat} alt="PartnerOrangeGreat" />
				<img className={styles.partner} src={PartnerUal} alt="PartnerUal" />
				<img className={styles.partner} src={PartnerOfficeDii} alt="PartnerOfficeDii" />
				<img className={styles.partner} src={PartnerPramyemoRazom} alt="PartnerPramyemoRazom" />
				<img className={styles.partner} src={PartnerGapYear} alt="PartnerGapYear" />
				<img className={styles.partner} src={PartnerTeploSerdni} alt="PartnerTeploSerdni" />
				<img className={styles.partner} src={PartnerMcv} alt="PartnerMcv" />
				<img className={styles.partner} src={PartnerKaritas} alt="PartnerKaritas" />
				<img className={styles.partner} src={PartnerUnicef} alt="PartnerUnicef" />
				<img className={styles.partner} src={PartnerMinisterstvoMolodi} alt="PartnerMinisterstvoMolodi" />
				<img className={styles.partner} src={PartnerGermanCooperation} alt="PartnerGermanCooperation" />
				<img className={styles.partner} src={PartnerUsap} alt="PartnerUsap" />
				<img className={styles.partner} src={PartnerEID} alt="PartnerEID" />
				</Carousel>
			</div>
		</div>
	);
};

export default Partners;