import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import axios from 'axios';

import MultiSliderCard from './MultiSliderCard';

import LeftArrow from '../../content_images/left_arrow.svg';
import RightArrow from '../../content_images/right_arrow.svg';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import URL from '../../helper/data';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './ambassadorsSlider.module.scss';

const SampleNextArrow = (props) => {
	const { onClick } = props;
	return (
		<div
			className={styles.next}
			style={{
				display: "block",
				background: `url(${RightArrow}) no-repeat center center`,
				backgroundSize: 'contain',
				width: '19px',
				height: '51px'
			}}
			onClick={onClick}
		/>
	);
};

const SamplePrevArrow = (props) => {
	const { onClick } = props;
	return (
		<div
			className={styles.prev}
			style={{
				display: "block",
				background: `url(${LeftArrow}) no-repeat center center`,
				backgroundSize: 'contain',
				width: '19px',
				height: '51px'
			}}
			onClick={onClick}
		/>
	);
};

const Ambassadors = () => {
	const [ambassadors, setAmbassadors] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [postWindowStatus, setPostWindowStatus] = useState(false);
	const [currentWindowData, setCurrentWindowData] = useState({ id: '', name: '', description: '', mainPhoto: '' });
	// Завантаження даних із сервера
	useEffect(() => {
		const fetchAmbassadors = async () => {
			try {
				const response = await axios.get(`${URL}/api/ambassadors`); // Замініть на ваш API URL
				setAmbassadors(response.data.receivedAmbassadors); // Збереження даних у стейт
			} catch (err) {
				setError('Помилка завантаження даних');
				console.error(err);
			} finally {
				setLoading(false);
			}
		};

		fetchAmbassadors();
	}, []);
	const handleOpenWindowSpecificHero = (key) => {
		console.log(key);
		const clickedAmbassador = ambassadors.find(item => item._id === key);
		console.log('clickedAmbassador', clickedAmbassador)
		setCurrentWindowData({ ...clickedAmbassador });
		setPostWindowStatus(true);
	};
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		initialSlide: 0,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: false
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	};

	return (
		<div className={styles.slider}>
			<h1 className={styles.title}>Амбасадори</h1>
			<h2 className={styles.subtitle}>Підтримка потрібна кожному у всі часи. Україні зараз — особливо. Команда «Неопалимих» вдячна нашим амбасадорам. Вони готові допомагати українцям, незважаючи на відстань і будь-які обставини. Пишаємося співпрацею
				з неймовірними людьми!</h2>
			<div className={styles.wrapper}>
				<div className={`slider-container`} style={{ padding: '0 0px' }}>
					{loading ? (
						<p>Завантаження...</p>
					) : error ? (
						<p>{error}</p>
					) : (
						<Slider {...settings}>
							{ambassadors.map((ambassador) => (
								<MultiSliderCard
									id={ambassador._id}
									name={ambassador.name}
									imageSrc={ambassador.mainPhoto}
									key={ambassador._id}
									handleDetailData={handleOpenWindowSpecificHero}
								/>
							))}
						</Slider>
					)}
				</div>
				<Modal open={postWindowStatus} onClose={() => setPostWindowStatus(false)}>
					<Box
						sx={{
							position: 'absolute',
							top: '50%',
							left: '50%',
							width: '50%',
							maxWidth: '600px',
							transform: 'translate(-50%, -50%)',
							bgcolor: 'background.paper',
							boxShadow: 24,
							p: 4,
						}}
					>
						{currentWindowData.description ? (
							<div>
							<img src={URL + '/'+currentWindowData.mainPhoto} alt="" />
							<p>{currentWindowData.name}</p>
							<p>{currentWindowData.description}</p>
							</div>
					) : (
					<Typography>Завантаження даних...</Typography>
						)}
					<Button onClick={() => setPostWindowStatus(false)}>Вийти</Button>
				</Box>
			</Modal>
		</div>
		</div >
	);
};

export default Ambassadors;
