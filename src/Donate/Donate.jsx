import React, { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { TextField, Button, Checkbox, FormControl, FormControlLabel, RadioGroup, Radio } from '@mui/material';
import Yuriy from '../content_images/Yuriy.png';
import Yuriy_wounded from '../content_images/Yuriy_wounded.png';

import styles from './donate.module.scss';


const Donate = () => {
	const [isChecked, setIsChecked] = useState(false);

	const handleCheckboxChange = (event) => {
	  setIsChecked(event.target.checked);
	};
	return (
		<div className={styles.container}>
			<div className={styles.storyMain}>
				<div className={styles.textBlock}>

					<h1 className={styles.title}>
						Donate
					</h1>
					<h2 className={styles.highlightMain}>
						Уявіть, що ви маєте руки, якими не можете скористатися.
					</h2>
					<p className={styles.text}>
						Це Юрій з Вінниці, який отримав опіки тіла через обстріл міста 14 липня 2022 року.
					</p>
				</div>
				<img className={styles.mainPhoto} src={Yuriy} alt="Yuriy" />
			</div>
			<div className={styles.storySecondery}>
				<img className={styles.secondPhoto} src={Yuriy_wounded} alt="Yuriy_wounded" />
				<div className={styles.textBlock}>
					<p className={styles.text}>
						Його руки на місці. Прот опіки
						на них вкрилися рубцями, які спричиняли нестерпний біль.
					</p>
					<p className={styles.text}>
						Завдяки проєкту Юрій проходить лікування і поступово повертається до повноцінного життя.
						Таких як він - сотні і тисячі
						по всій Україні.
					</p>
					<h2 className={styles.highlightSecondary}>
						Ми хочемо рятувати ще більше життів. Підтримайте нас донатом, аби наші герої змогли жити без болю!
					</h2>
				</div>

			</div>
			<Box className={styles.form} sx={{ p: 3, border: '1px solid #0277bd', borderRadius: '8px', maxWidth: '400px', mx: 'auto' }}>
				<TextField
					fullWidth
					label="Ім'я"
					variant="outlined"
					margin="normal"
				/>
				<TextField
					fullWidth
					label="Email"
					variant="outlined"
					margin="normal"
				/>

				<FormControl component="fieldset" fullWidth margin="normal">
					<label>Періодичність донатів</label>
					<RadioGroup row>
						<FormControlLabel value="one-time" control={<Radio />} label="Один платіж" />
						<FormControlLabel value="monthly" control={<Radio />} label="Щомісячний внесок" />
					</RadioGroup>
				</FormControl>

				<FormControl component="fieldset" fullWidth margin="normal">
					<label>Спосіб платежу</label>
					<RadioGroup row>
						<FormControlLabel value="card" control={<Radio />} label="Платіж карткою" />
						<FormControlLabel value="local-transfer" control={<Radio />} label="Перекази по Україні" />
						<FormControlLabel value="international-transfer" control={<Radio />} label="Перекази з-за кордону" />
					</RadioGroup>
				</FormControl>

				<FormControl component="fieldset" fullWidth margin="normal">
					<label>Валюта переказу</label>
					<RadioGroup row>
						<FormControlLabel value="uah" control={<Radio />} label="UAH" />
						<FormControlLabel value="usd" control={<Radio />} label="USD" />
						<FormControlLabel value="eur" control={<Radio />} label="EUR" />
					</RadioGroup>
				</FormControl>

				<FormControlLabel
					control={<Checkbox checked={isChecked} onChange={handleCheckboxChange} />}
					label="Я ознайомився/лась з Публічною офертою щодо надання благодійної пожертви, Умовами використання сайту та погоджуюся з тим, що введена мною особиста інформація буде використана згідно з Політикою приватності Фонду."
					sx={{ alignItems: 'flex-start', mt: 1, color: '#555', fontSize: '0.875rem' }}
				/>

				<Button
					variant="contained"
					color="primary"
					fullWidth
					sx={{ mt: 2 }}
				>
					Задонатити
				</Button>
			</Box>
		</div>
	);
}

export default Donate;