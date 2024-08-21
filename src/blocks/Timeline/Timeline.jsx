import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CustomButtonGroup from '../../components/CustomButtons/CustomButtons';
import styles from './timeline.module.scss';

const Timeline = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	// Assuming there are 5 steps in the timeline, based on the image provided
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 260 },
			items: 1
		},

	};
	const steps = [
		{ time: '6 липня 2022го', content: 'запустили програму підтримки та розвитку волонтерів за підтримки Європейського Союзу в рамках Стипендіальної програми для лідерів громадянського суспільства країн Східного партнерства' },
		{ time: 'вересень-листопад 2022го', content: '16 дозрілих менторів та менторок провели 109 локальних воркшопів для 200+ волонтерів з різних куточків України (11 міст, 4 онлайн групи). 93% учасників оцінили рівень корисності програми на високому рівні' },
		{ time: 'грудень 2022го ', content: 'випустили <a href="https://drive.google.com/file/d/1MWhq0qcFPtObB-9C1cydTJBb4TPsVv3a/view"  target="_blank">Методичку</a> для менторів та менторок, які працюють над викликом вигорання волонтерів' },
		{ time: 'квітень-червень 2023го', content: 'реалізували серію онлайн воркшопів для 60+ учасників та учасниць та випустили спецепізоди в партнерстві з <a href="https://podcasters.spotify.com/pod/show/gap-year-plaform/episodes/--e1pioq8" target="_blank">подкастом</a> про усвідомленість Gap_Year в рамках Стипендіальної програми “Офіс Дій”' },
		{ time: 'серпень 2023го', content: 'провели дводенний тренінг-відновлення для 19-ти волонтерів з 6-ти громад Волинської області в рамках проєкту Карітас України "Долаючи розломи: розбудова потенціалу постраждалих спільнот щодо чутливості до конфліктів" за підтримки UHF' },
		{ time: '23 жовтня 2023го', content: 'заснували ГО “ДОЗРІЛІ” завдяки підтримці в рамках проєкту “Зміцнення громадянського активізму серед молоді”, що реалізується ГО «Фонд «Професійний розвиток Харкова»» за щирої підтримки Національного фонду демократії (National Endowment for Democracy)' },
		{ time: 'лютий-квітень 2024го', content: 'реалізували менторську програму “Без Надриву” у партнерстві з 6-ма молодіжними центрами та просторами Волинської області. 15 навчених менторок провели тренінги та воркшопи з мʼяких навичок для понад 550 молодих людей' },
		{ time: 'зараз', content: 'ДОЗРІЛІ це потужна команда, що має досвід 40+ років в громадському секторі та спеціалізується на розвитку активної молоді, молодіжних спільнот та посиленні їх впливу на становлення демократичної України' },
	];


	return (
		<div className={styles.wrapper}>
			<div className={styles.center}>
				{/* <div className={styles.container}>
					{steps.map((step, index) => (
						<div key={step.time} className={`${styles.item} ${index === activeIndex ? styles.active : ''}`} onClick={() => setActiveIndex(index)}>
							<div className={styles.itemContent}>
							</div>
							{index < steps.length - 1 && <div className={styles.line}></div>}
						</div>
					))}
				</div> */}
				<Carousel responsive={responsive}
					swipeable={true}
					draggable={true}
					showDots={true}
					infinite={true}
					autoplay={true}
					autoPlaySpeed={2000}
					arrows={false}
					renderButtonGroupOutside={true}
					containerClass={styles.carouselstyles}
					itemClass={styles.carouselitemstyles}
					customButtonGroup={<CustomButtonGroup />}
					>
					{steps.map((step, index) => (
						<div className={styles.info}>
							<h2 className={styles.title}>{step.time}</h2>
							<p className={styles.text} dangerouslySetInnerHTML={{ __html: step.content }}></p>
						</div>
					))}
				</ Carousel>
			</div>
		</div >
	);
};

export default Timeline