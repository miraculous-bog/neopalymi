// MemberCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as InstagramIcon } from '../../../icons/instagram.svg';
import styles from './cardMember.module.scss';

function CardMember({ name, role, imageSrc, link }) {
  const path = 'https://github.com/miraculous-bog/dozrili/blob/main/src/content_images/photos/team_bohdan_turiv.png';
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <img src={imageSrc} alt={`Фото ${name}`} className={styles.photo} />
        <div className={styles.info}>
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.role}>{role}</p>
          <a href={link} target="_blank">
            <InstagramIcon className={styles.icons} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardMember;
