/* eslint-disable */
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import styles from './editor.module.scss';
import URL from '../../helper/data';

function Editor({ onClose, posts, addPost, mode = 'create', initialData, onUpdate }) {
  console.log(initialData);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [error, setError] = useState({ name: false,  description: false, image: false });

  // Prefill fields if mode is update and initialData exists
  useEffect(() => {
    if (mode === 'update' && initialData) {
      setName(initialData.name);
      setDescription(initialData.description);
      setImage(initialData.mainPhoto); // Optional: handle image pre-filling
    }
  }, [initialData, mode]);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name ||  !description || (!image && mode === 'create')) {
      setError({
        name: !name,
        description: !description,
        image: mode === 'create' && !image,
      });
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    if (image instanceof File) {
      formData.append('mainPhoto', image); // Only append image if it's a new file
    }

    try {
      const url = mode === 'create' ? `${URL}/api/ambassadors` : `${URL}/api/ambassadors/${initialData._id}`;
      const method = mode === 'create' ? 'POST' : 'PUT';

      const response = await fetch(url, {
        method: method,
        body: formData,
      });

      const result = await response.json();
      console.log("Response from server:", result); // Логування результату

      if (mode === 'create') {
        onClose();
        ambassadors.length !== 0 && result.post ? addPost([...posts, result.post]) : null;
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
      <TextareaAutosize
        placeholder="Description"
        minRows={5}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ width: '100%', padding: '10px', fontSize: '16px', borderColor: '#047CC8', borderRadius: '5px', marginBottom: '15px' }}
      />
      {error.description && <p style={{ color: '#D32F2F' }}>Будь ласка, введіть опис.</p>}

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
