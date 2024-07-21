import React, { useState, useEffect } from 'react';
import Article from './components/Article';
import Modal from '@mui/material/Modal'; // Corrected import
import Button from '@mui/material/Button'; // Corrected import
import Box from '@mui/material/Box'; // Corrected import
import Editor from './components/Editor';
import styles from './blog.module.scss';
import Typography from '@mui/material/Typography';
import URL from '../helper/data';
const Blog = () => {
  const [open, setOpen] = useState(false);
  const [articles, setArticles] = useState([]); // Стан для зберігання статей
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState('');
  const handleDelete = async (articleId) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${URL}/api/article/${articleId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      const data = await response.json();

      if (response.ok) {
        setArticles(articles.filter(article => article._id !== articleId));
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
  const handleCloseDeleteConfirmation = () => {
    setDeleteConfirmationOpen(false);
  };
  const checkAuthorization = async () => {
    try {
      const token = localStorage.getItem('token'); // Перевіряємо, чи є токен у локальному сховищі
      if (!token) {
        setIsAuthorized(false);
        return;
      }

      const response = await fetch(`${URL}/api/users/me`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        if (data.user) {
          setIsAuthorized(true);
        }
      } else {
        setIsAuthorized(false);
      }
    } catch (error) {
      console.error('Authorization check failed', error);
      setIsAuthorized(false);
    }
  };
  // Функція для завантаження статей
  const fetchArticles = async () => {
    try {
      const response = await fetch(`${URL}/api/article`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setArticles(data.receivedArticles); // Оновлення стану статей
    } catch (error) {
      console.error("Could not fetch articles:", error);
    }
  };

  useEffect(() => {
    console.log(URL);
    checkAuthorization();
    fetchArticles();
  }, []);

  const saveNewArticle = async (value) => {
    try {
      const response = await fetch(`${URL}/api/article`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setArticles(data.receivedArticles); // Оновлення стану статей
    } catch (error) {
      console.error("Could not fetch articles:", error);
    }
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return  (
    <div className={styles.main}>
      <h1 className={styles.title}>Блог</h1>
      {isAuthorized ? (
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Додати статтю
        </Button>
      ) : null}
      <div className={styles.container}>
        {articles.map(article => (
          <Article
            id={article._id}
            title={article.title}
            category={article.category}
            image={article.mainPhoto}
            createdDate={article.created_date}
            key={article._id}
            isVisibleBtn={isAuthorized}
            onDelete={handleDelete}
          />
        ))}
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '90%',
            height: '90%',
            bgcolor: 'white', // Встановлення білого фону за допомогою bgcolor
            boxShadow: 24,
            p: 4,
            overflowY: 'auto',
          }}
        >
          <h2 id="custom-modal-title">Modal Title</h2>
          <p id="custom-modal-description">Your content here...</p>
          <Editor onClose={handleClose} addPost={setArticles} posts={articles} />

          <Button variant="contained" color="primary" onClick={handleClose} >
            Close
          </Button>
        </Box>
      </Modal>
      {/* Модальне вікно для підтвердження видалення */}
      <Modal
        open={deleteConfirmationOpen}
        onClose={handleCloseDeleteConfirmation}
        aria-labelledby="delete-confirmation-title"
        aria-describedby="delete-confirmation-description"
      >
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
          <Typography id="delete-confirmation-title" variant="h6" component="h2">
            {deleteMessage}
          </Typography>
          <Button onClick={handleCloseDeleteConfirmation}>Окей</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Blog;
