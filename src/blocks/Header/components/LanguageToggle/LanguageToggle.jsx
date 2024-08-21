// LanguageToggle.js
import React, { useState } from 'react';
import styles from './languageToggle.module.scss';

const LanguageToggle = () => {
	const [selectedLanguage, setSelectedLanguage] = useState('uk');

	const handleLanguageChange = (language) => {
		setSelectedLanguage(language);
		// Додайте логіку для зміни мови вашого додатку тут
	};

	return (
		<div className={styles.languageToggle}>
			<div
				className={`${styles.languageOption} ${selectedLanguage === 'uk' ? styles.active : ''}`}
				onClick={() => handleLanguageChange('uk')}
			>
				Укр
			</div>
			<div
				className={`${styles.languageOption} ${selectedLanguage === 'en' ? styles.active : ''}`}
				onClick={() => handleLanguageChange('en')}
			>
				Eng
			</div>
		</div>
	);
};

export default LanguageToggle;
