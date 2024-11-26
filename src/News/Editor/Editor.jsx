/* eslint-disable */
import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import 'react-quill/dist/quill.snow.css';
import styles from './editor.module.scss';
import URL from '../../helper/data';
const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
    ['link', 'image'],
    ['clean'],
  ],
};

function Editor({ onClose, posts, addPost, mode = 'create', initialData, onUpdate }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState({ title: false, content: false });
  const [serverError, setServerError] = useState('');
  const tokenAuth = localStorage.getItem('token');
  useEffect(() => {
    if (mode === 'update' && initialData) {
      setTitle(initialData.title || '');
      setContent(initialData.content || '');
    }
  }, [initialData, mode]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content) {
      setError({
        title: !title,
        content: !content,
      });
      return;
    }

    const payload = { title, content }; // Simple JSON payload
    const url = mode === 'create' ? `${URL}/api/news` : `${URL}/api/news/${initialData._id}`;
    const method = mode === 'create' ? 'POST' : 'PUT';
    console.log(title, content);
    try {
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${tokenAuth}`, },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      console.log('Response from server:', result);

      if (response.ok) {
        if (mode === 'create') {
          addPost([...posts, result.article]);
        } else {
          onUpdate(result.article);
        }
        onClose(); // Close the editor after success
      } else {
        setServerError(result.message || 'An error occurred. Please try again.');
      }
    } catch (error) {
      console.error('Error during the upload:', error);
      setServerError('Failed to upload. Please try again later.');
    }
  };

  return (
    <div className={styles.wrapper} style={{ backgroundColor: '#92B6D7', padding: '20px', borderRadius: '10px' }}>
      <TextField
        label="Title"
        variant="outlined"
        error={error.name}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        helperText={error.name && "Будь ласка, введіть ім'я."}
        fullWidth
        margin="normal"
        style={{ backgroundColor: '#fff', marginBottom: '15px' }}
      />
      <ReactQuill theme="snow" value={content} onChange={setContent} modules={modules} />
      {error.content && <p style={{ color: '#D32F2F' }}>Будь ласка, введіть опис.</p>}
      {serverError && <p style={{ color: '#D32F2F' }}>{serverError}</p>}

      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        style={{ backgroundColor: '#047CC8', color: '#fff', marginTop: '20px' }}
      >
        {mode === 'create' ? 'Зберегти' : 'Оновити'}
      </Button>
    </div>
  );
}

export default Editor;
