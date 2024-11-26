import React, { useEffect, useState } from 'react';
import Slider from "react-slick";

import SliderCard from './SliderCard';

import LeftArrow from '../../content_images/left_arrow.svg';
import RightArrow from '../../content_images/right_arrow.svg';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

import Box from '@mui/material/Box';
import URL from '../../helper/data';
import Typography from '@mui/material/Typography';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './sliderBlocks.module.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
}

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
}

const SliderBlocks = () => {
	const [heroes, setHeroes] = useState([]);
	const [postWindowStatus, setPostWindowStatus] = useState(false);
	const [currentWindowData, setCurrentWindowData] = useState({ name: '', content: '', mainPhoto: '' });
	useEffect(() => {
		const fetchHeroes = async () => {
			try {
				const response = await axios.get(`${URL}/api/heroes`);
				setHeroes(response.data.receivedHeroes);
				console.log(response.data.receivedHeroes);
			} catch (error) {
				console.error("Error fetching heroes:", error);
			}
		};

		fetchHeroes();
	}, []);
	const handleOpenWindowSpecificHero = (key) => {
		console.log(key);
		const clickedHero = heroes.find(item => item._id === key);
		console.log('clickedHero', clickedHero)
		setCurrentWindowData({ ...clickedHero });
		setPostWindowStatus(true);
	};
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
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
			<h1 className={styles.title}>Герої</h1>
			<h2 className={styles.subtitle}>Кожна історія наших пацієнтів — про надзвичайно складний і водночас героїчний життєвий досвід. Воєнні дії, полон, окупація, евакуація, обстріли — усі ці жахливі події залишили слід на тілах наших «неопалимих».</h2>
			<div className={`${styles.wrapper}`}>
				<div className={`.slider-container`} style={{ padding: '0 0px' }}>
					<Slider {...settings}>
						{heroes.length === 0 ? null : heroes.map((hero) => (
							<SliderCard
								name={hero.name}
								imageSrc={URL + '/' + hero.mainPhoto}
								key={hero._id}
								id={hero._id}
								handleDetailData={handleOpenWindowSpecificHero}
							/>
						))}

					</Slider>
					<Modal open={postWindowStatus} onClose={() => setPostWindowStatus(false)}>
						<Box
							sx={{
								position: 'absolute',
								top: '50%',
								left: '50%',
								width: '80%',
								maxWidth: '1200px',
								transform: 'translate(-50%, -50%)',
								bgcolor: 'background.paper',
								boxShadow: 24,
								p: 4,
							}}
						>
							{currentWindowData.content ? (
								<div
									className={styles.infoHero}
									dangerouslySetInnerHTML={{ __html: currentWindowData.content }}
								/>
							) : (
								<Typography>Завантаження даних...</Typography>
							)}
							<Button onClick={() => setPostWindowStatus(false)}>Вийти</Button>
						</Box>
					</Modal>
				</div>

			</div>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					marginTop: '55px',
				}}
			>
				<Link to='/neopalymi/heroes'>
					<button className={styles.button}>
						Читати більше
					</button>
				</Link>
			</div>
		</div>
	);
};

export default SliderBlocks;
