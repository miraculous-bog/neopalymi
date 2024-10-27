import React, { useState, useEffect } from 'react';
import HeroCard from './HeroCard/HeroCard';
import Editor from './Editor';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import URL from '../helper/data';
import styles from './heroes.module.scss';

const Heroes = () => {
  const [heroesData, setHeroesData] = useState([]);
  const [open, setOpen] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false); // Для авторизації
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState('');
  const [editingHero, setEditingHero] = useState(null); // Для редагування члена команди

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

  const handleDelete = async (heroId) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${URL}/api/heroes/${heroId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      const data = await response.json();

      if (response.ok) {
        setHeroesData(heroesData.filter(hero => hero._id !== heroId));
        setDeleteMessage(data.message);
      } else {
        setDeleteMessage(data.message || 'Error occurred while deleting the heroes.');
      }
    } catch (error) {
      setDeleteMessage('Error occurred while deleting the ambassador.');
      console.error('Error during the delete:', error);
    }

    setDeleteConfirmationOpen(true);
  };

  const handleUpdate = (heroId) => {
    const heroToUpdate = heroesData.find(member => member._id === heroId);
    if (heroToUpdate) {
      setEditingHero(heroToUpdate);
      setOpen(true);
    }
  };

  const handleSaveUpdatedMember = (updatedHero) => {
    if (updatedHero && updatedHero._id) {
      setHeroesData(heroesData.map(member => member._id === updatedHero._id ? updatedHero : member));
    } else {
      console.error("Updated member does not have an _id:", updatedHero);
    }
    setOpen(false);
    setEditingHero(null); // Очищення стану редагування
  };

  const fetchHeroes = async () => {
    try {
      const response = await fetch(`${URL}/api/heroes`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data.receivedHeroes);
      setHeroesData(data.receivedHeroes);
    } catch (error) {
      console.error("Could not fetch Hero:", error);
    }
  };

  useEffect(() => {
    fetchHeroes();
    checkAuthorization(); // Перевірка авторизації при завантаженні
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setEditingHero(null); // Очищення стану редагування при закритті
  };

  return (
    <div className={styles.team}>
      {isAuthorized && ( // Перевірка авторизації для відображення кнопки додавання
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Додати амбасадора
        </Button>
      )}
      <div className={styles.cards}>
        {heroesData.map((cardHeroData) => (
          <HeroCard
            key={cardHeroData._id}
            heroId={cardHeroData._id}
            name={cardHeroData.name}
            contentData={cardHeroData.content}
            mainPhoto={cardHeroData.mainPhoto}
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
            posts={heroesData}
            addPost={setHeroesData}
            mode={editingHero ? 'update' : 'create'}
            initialData={editingHero}
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

export default Heroes;
