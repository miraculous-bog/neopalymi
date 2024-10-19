import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import URL from '../../helper/data';
import styles from './teamMemberCard.module.scss';

const TeamMemberCard = ({ name, position, description, mainPhoto, isAuthorized, handleDelete, handleUpdate, teamMemberId }) => {
  return (
    <div className={styles.teamMemberCard}>
      <div className={styles.container}>
        <img src={`${URL}/${mainPhoto}`} alt={`Фото ${name}`} className={styles.photo} />
      </div>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.position}>{position}</p>
      <p className={styles.description}>{description}</p>
      
      {/* Conditionally render icons if the user is authorized */}
      {isAuthorized && (
        <div className={styles.actions}>
          <DeleteIcon 
            className={styles.icon} 
            onClick={() => handleDelete(teamMemberId)} 
            style={{ cursor: 'pointer', marginRight: '10px', color: 'red' }} 
          />
          <EditIcon 
            className={styles.icon} 
            onClick={() => handleUpdate(teamMemberId)} 
            style={{ cursor: 'pointer', color: 'green' }} 
          />
        </div>
      )}
    </div>
  );
};

export default TeamMemberCard;
