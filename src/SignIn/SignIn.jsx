import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import URL from '../helper/data';
import styles from './signIn.module.scss';

const focusColor = '#047CC8';

const SignIn = () => {
  const [credentials, setCredentials] = useState({ name: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
      const data = await response.json();
      if (response.ok && data.successful) {
        localStorage.setItem('token', data.token);
        navigate('/neopalymi');
      } else {
        setError('Неправильні ім’я користувача або пароль.');
      }
    } catch (error) {
      setError('Помилка авторизації. Спробуйте знову.');
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetch(`${URL}/api/users/me`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Not authenticated');
          }
          return response.json();
        })
        .then(data => {
          if (data.user) {
            navigate('/neopalymi');
          }
        })
        .catch(() => {
          localStorage.removeItem('token');
          // Optionally redirect user to login page or display a message
        });
    }
  }, [navigate]);

  return (
    <div className={styles.wrapper}>
      <Typography variant="h6" style={{ marginBottom: '16px' }}>Вхід</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Ім'я"
          variant="outlined"
          name="name"
          value={credentials.name}
          onChange={handleChange}
          margin="normal"
          sx={{
            '& label.Mui-focused': {
              color: focusColor,
            },
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderColor: focusColor,
              },
            },
          }}
          fullWidth
        />
        <TextField
          label="Пароль"
          variant="outlined"
          name="password"
          type="password"
          value={credentials.password}
          onChange={handleChange}
          margin="normal"
          sx={{
            '& label.Mui-focused': {
              color: focusColor,
            },
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderColor: focusColor,
              },
            },
          }}
          fullWidth
        />
        {error && <Typography color="error">{error}</Typography>}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginTop: '16px' }}
          sx={{
            backgroundColor: focusColor,
            '&:hover': {
              backgroundColor: focusColor,
            },
          }}
          fullWidth
        >
          Увійти
        </Button>
      </form>
    </div>
  );
};

export default SignIn;
