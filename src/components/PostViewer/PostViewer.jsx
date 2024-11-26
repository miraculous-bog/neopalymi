import React, { useState, useEffect } from 'react';
import NewsCard from './NewsCard/NewsCard';
import Editor from './Editor';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import URL from '../helper/data';
import styles from './news.module.scss';

const News = () => {
  const [newsData, setNewsData] = useState([]);
  const [open, setOpen] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState('');
  const [editingArticle, setEditingArticle] = useState(null);

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

  const handleDelete = async (newsId) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${URL}/api/news/${newsId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      const data = await response.json();

      if (response.ok) {
        setNewsData(newsData.filter(news => news._id !== newsId));
        setDeleteMessage(data.message);
      } else {
        setDeleteMessage(data.message || 'Error occurred while deleting the news.');
      }
    } catch (error) {
      setDeleteMessage('Error occurred while deleting the news.');
      console.error('Error during the delete:', error);
    }

    setDeleteConfirmationOpen(true);
  };

  const handleUpdate = (newsId) => {
    const newsToUpdate = newsData.find(article => article._id === newsId);
    if (newsToUpdate) {
      setEditingArticle(newsToUpdate);
      setOpen(true);
    }
  };

  const handleSaveUpdatedArticle = (updatedArticle) => {
    if (updatedArticle && updatedArticle._id) {
      setNewsData(newsData.map(artilce => artilce._id === updatedArticle._id ? updatedArticle : artilce));
    } else {
      console.error("Updated news does not have an _id:", updatedArticle);
    }
    setOpen(false);
    setEditingArticle(null); 
  };

  const fetchNews = async () => {
    try {
      const response = await fetch(`${URL}/api/news`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data.receivedNews);
      setNewsData(data.receivedNews);
    } catch (error) {
      console.error("Could not fetch News:", error);
    }
  };

  useEffect(() => {
    fetchNews();
    checkAuthorization();
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setEditingArticle(null); 
  };

  return (
    <div className={styles.team}>
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
            posts={newsData}
            addPost={setNewsData}
            mode={editingArticle ? 'update' : 'create'}
            initialData={editingArticle}
            onUpdate={handleSaveUpdatedArticle}
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

export default News;
