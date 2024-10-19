import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import URL from '../../helper/data';
import styles from './ambassadorCard.module.scss';

const TeamMemberCard = ({ name, description, mainPhoto, isAuthorized, handleDelete, handleUpdate, ambassadorId }) => {
  return (
    <div className={styles.teamMemberCard}>
      <div className={styles.container}>
        <img src={`${URL}/${mainPhoto}`} alt={`Фото ${name}`} className={styles.photo} />
      </div>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.description}>{description}</p>
      
      {/* Conditionally render icons if the user is authorized */}
      {isAuthorized && (
        <div className={styles.actions}>
          <DeleteIcon 
            className={styles.icon} 
            onClick={() => handleDelete(ambassadorId)} 
            style={{ cursor: 'pointer', marginRight: '10px', color: 'red' }} 
          />
          <EditIcon 
            className={styles.icon} 
            onClick={() => handleUpdate(ambassadorId)} 
            style={{ cursor: 'pointer', color: 'green' }} 
          />
        </div>
      )}
    </div>
  );
};

export default TeamMemberCard;
