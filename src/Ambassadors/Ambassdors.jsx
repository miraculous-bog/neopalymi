import React, { useState, useEffect } from 'react';
import AmbassadorCard from './AmbassadorCard/AmbassadorCard';
import Editor from './Editor';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import URL from '../helper/data';
import styles from '../Team/team.module.scss';

const Ambassadors = () => {
  const [ambassadorsData, setAmbassadorsData] = useState([]);
  const [open, setOpen] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false); // Для авторизації
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState('');
  const [editingAmbassador, setEditingAmbassador] = useState(null); // Для редагування члена команди
  const tokenAuth = localStorage.getItem('token');
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

  const handleDelete = async (ambassadorId) => {
    try {
      const response = await fetch(`${URL}/api/ambassadors/${ambassadorId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${tokenAuth}`,
        },
      });
      const data = await response.json();

      if (response.ok) {
        setAmbassadorsData(ambassadorsData.filter(ambassador => ambassador._id !== ambassadorId));
        setDeleteMessage(data.message);
      } else {
        setDeleteMessage(data.message || 'Error occurred while deleting the ambassador.');
      }
    } catch (error) {
      setDeleteMessage('Error occurred while deleting the ambassador.');
      console.error('Error during the delete:', error);
    }

    setDeleteConfirmationOpen(true);
  };

  const handleUpdate = (ambassadorId) => {
    const ambassadoToUpdate = ambassadorsData.find(member => member._id === ambassadorId);
    if (ambassadoToUpdate) {
      setEditingAmbassador(ambassadoToUpdate); // Заповнення даними для редагування
      setOpen(true); // Відкриття редактора
    }
  };

  const handleSaveUpdatedMember = (updatedAmbassador) => {
    if (updatedAmbassador && updatedAmbassador._id) {
      setAmbassadorsData(ambassadorsData.map(member => member._id === updatedAmbassador._id ? updatedAmbassador : member));
    } else {
      console.error("Updated member does not have an _id:", updatedAmbassador);
    }
    setOpen(false);
    setEditingAmbassador(null); // Очищення стану редагування
  };

  const fetchAmbassadors = async () => {
    try {
      const response = await fetch(`${URL}/api/ambassadors`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setAmbassadorsData(data.receivedAmbassadors);
    } catch (error) {
      console.error("Could not fetch Ambassador:", error);
    }
  };

  useEffect(() => {
    fetchAmbassadors();
    checkAuthorization(); // Перевірка авторизації при завантаженні
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setEditingAmbassador(null); // Очищення стану редагування при закритті
  };

  return (
    <div className={styles.container}>
      {isAuthorized && (
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Додати амбасадора
        </Button>
      )}
      <div className={styles.cards}>
        {ambassadorsData.map((cardAmbassadorData) => (
          <AmbassadorCard
            key={cardAmbassadorData._id}
            ambassadorId={cardAmbassadorData._id}
            name={cardAmbassadorData.name}
            description={cardAmbassadorData.description}
            mainPhoto={cardAmbassadorData.mainPhoto}
            isAuthorized={isAuthorized}
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
            posts={ambassadorsData}
            addPost={setAmbassadorsData}
            mode={editingAmbassador ? 'update' : 'create'}
            initialData={editingAmbassador}
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

export default Ambassadors;
