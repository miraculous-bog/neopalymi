import React, { useState, useEffect } from 'react';
import TeamMemberCard from './TeamMemberCard/TeamMemberCard';
import Editor from './Editor';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import URL from '../helper/data';
import styles from './team.module.scss';

const Team = () => {
  const [teamData, setTeamData] = useState([]);
  const [open, setOpen] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false); // Для авторизації
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState('');
  const [editingMember, setEditingMember] = useState(null); // Для редагування члена команди

  // Функція перевірки авторизації
  const checkAuthorization = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setIsAuthorized(false);
        return;
      }

      const response = await fetch(`${URL}/api/users/me`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        if (data.user) {
          setIsAuthorized(true); // Користувач авторизований
        }
      } else {
        setIsAuthorized(false);
      }
    } catch (error) {
      console.error('Authorization check failed', error);
      setIsAuthorized(false);
    }
  };

  const handleDelete = async (teamMemberId) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${URL}/api/team/${teamMemberId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      const data = await response.json();

      if (response.ok) {
        setTeamData(teamData.filter(teamMember => teamMember._id !== teamMemberId));
        setDeleteMessage(data.message);
      } else {
        setDeleteMessage(data.message || 'Error occurred while deleting the article.');
      }
    } catch (error) {
      setDeleteMessage('Error occurred while deleting the article.');
      console.error('Error during the delete:', error);
    }

    setDeleteConfirmationOpen(true);
  };

  const handleUpdate = (teamMemberId) => {
    const teamMemberToUpdate = teamData.find(member => member._id === teamMemberId);
    if (teamMemberToUpdate) {
      setEditingMember(teamMemberToUpdate); // Заповнення даними для редагування
      setOpen(true); // Відкриття редактора
    }
  };

  const handleSaveUpdatedMember = (updatedMember) => {
    if (updatedMember && updatedMember._id) {
      setTeamData(teamData.map(member => member._id === updatedMember._id ? updatedMember : member));
    } else {
      console.error("Updated member does not have an _id:", updatedMember);
    }
    setOpen(false);
    setEditingMember(null); // Очищення стану редагування
  };

  const fetchTeam = async () => {
    try {
      const response = await fetch(`${URL}/api/team`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setTeamData(data.receivedTeam);
    } catch (error) {
      console.error("Could not fetch articles:", error);
    }
  };

  useEffect(() => {
    fetchTeam();
    checkAuthorization(); // Перевірка авторизації при завантаженні
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setEditingMember(null); // Очищення стану редагування при закритті
  };

  return (
    <div className={styles.team}>
      {isAuthorized && ( // Перевірка авторизації для відображення кнопки додавання
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Додати члена команди
        </Button>
      )}
      <div className={styles.cards}>
        {teamData.map((cardMemberData) => (
          <TeamMemberCard
            key={cardMemberData._id}
            teamMemberId={cardMemberData._id}
            name={cardMemberData.name}
            position={cardMemberData.position}
            description={cardMemberData.description}
            mainPhoto={cardMemberData.mainPhoto}
            isAuthorized={isAuthorized} // Передача авторизації для контролю доступу до дій
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
        ))}
      </div>

      <Modal open={open} onClose={handleClose}>
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '90%',
          height: '90%',
          bgcolor: 'white',
          boxShadow: 24,
          p: 4,
          overflowY: 'auto',
        }}>
          <Editor
            onClose={handleClose}
            posts={teamData}
            addPost={setTeamData}
            mode={editingMember ? 'update' : 'create'}
            initialData={editingMember}
            onUpdate={handleSaveUpdatedMember}
          />
        </Box>
      </Modal>

      <Modal open={deleteConfirmationOpen} onClose={() => setDeleteConfirmationOpen(false)}>
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}>
          <Typography>{deleteMessage}</Typography>
          <Button onClick={() => setDeleteConfirmationOpen(false)}>Окей</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Team;
