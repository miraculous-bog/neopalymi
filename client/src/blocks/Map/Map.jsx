import React from 'react';

import JoinBtn from '../../components/JoinBtn';
import SupportBtn from '../../components/SupportBtn';

import styles from './map.module.scss';

const Map = () => {
	return (
		<div className={styles.map}>
			<div className={styles.btn}>
				<JoinBtn isWideMode={true} />
			</div>
			<div className={styles.conteiner}>
				<div className={styles.buttons}>
					{/* <div className={styles.empty}></div> */}
					<SupportBtn isWideMode={true} />
				</div>
			</div>
		</div>
	);
};

export default Map;