/* eslint-disable */
import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import styles from './editor.module.scss';
import URL from '../../helper/data';

const modules = {
  toolbar: [
    [{ 'header': [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
    ['link', 'image'],
    ['clean']
  ],
};


function Editor({ onClose, posts, addPost, mode = 'create', initialData, onUpdate }) {
  console.log(initialData);
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [error, setError] = useState({ name: false, content: false, image: false });

  useEffect(() => {
    if (mode === 'update' && initialData) {
      setName(initialData.name);
      setContent(initialData.content);
      setImage(initialData.mainPhoto);
    }
  }, [initialData, mode]);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !content || (!image && mode === 'create')) {
      setError({
        name: !name,
        content: !content,
        image: mode === 'create' && !image,
      });
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('content', content);
    if (image instanceof File) {
      formData.append('mainPhoto', image); // Only append image if it's a new file
    }

    try {
      const url = mode === 'create' ? `${URL}/api/heroes` : `${URL}/api/heroes/${initialData._id}`;
      const method = mode === 'create' ? 'POST' : 'PUT';

      const response = await fetch(url, {
        method: method,
        body: formData,
      });

      const result = await response.json();
      console.log("Response from server:", result); // Логування результату

      if (mode === 'create') {
        onClose();
        addPost([...posts, result.post]);
      } else {
        onUpdate(result.ambassador); // Передаємо саме об'єкт `teamMember`
      }
    } catch (error) {
      console.error('Error during the upload:', error);
    }
  };

  return (
    <div className={styles.wrapper} style={{ backgroundColor: '#92B6D7', padding: '20px', borderRadius: '10px' }}>
      <TextField
        label="Name"
        variant="outlined"
        error={error.name}
        value={name}
        onChange={(e) => setName(e.target.value)}
        helperText={error.name && "Будь ласка, введіть ім'я."}
        fullWidth
        margin="normal"
        style={{ backgroundColor: '#fff', marginBottom: '15px' }}
      />
      <ReactQuill theme="snow" value={content} onChange={setContent} modules={modules} />
      {error.content && <p style={{ color: '#D32F2F' }}>Будь ласка, введіть опис.</p>}

      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ marginBottom: '15px' }}
      />
      {error.image && <p style={{ color: '#D32F2F' }}>Будь ласка, завантажте головне зображення.</p>}
      {image && image.name && <p>Завантажене зображення: {image.name}</p>}

      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        style={{ backgroundColor: '#047CC8', color: '#fff' }}>
        {mode === 'create' ? 'Зберегти' : 'Оновити'}
      </Button>
    </div>
  );
}

export default Editor;
