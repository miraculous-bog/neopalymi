/* eslint-disable */
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import 'react-quill/dist/quill.snow.css';
import URL from '../../../helper/data';
import styles from './editor.module.scss';
// import { addArticle } from '../../../../../server/src/controllers/articleController';

function Editor({ onClose, posts, addPost }) {
  const [value, setValue] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);
  const [error, setError] = useState({ title: false, category: false, content: false, image: false });
  const handleImageChange = (e) => {
    // Перевіряємо, чи файл був вибраний
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image'],
      ['clean']
    ],
  };
  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !value || !category || !image) {
      setError({
        title: !title,
        content: !value,
        category: !category,
        image: !image,
      });
      return; // Не продовжувати з відправленням даних
    }
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', value);
    formData.append('category', category);
    formData.append('mainPhoto', image);

    try {
      const response = await fetch(`${URL}/api/article`, {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      onClose();
      posts.length !== 0 && result.post ? addPost([...posts, result.post]) : null;
      console.log(result);
    } catch (error) {
      console.error('Error during the upload:', error);
    }
  };
  console.log(value);
  return (
    <div className={styles.wrapper}>
      <TextField
        label="Заголовок"
        variant="outlined"
        error={error.title}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        helperText={error.title && "Будь ласка, введіть заголовок статті."}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Категорія"
        error={error.category}
        variant="outlined"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        helperText={error.category && "Будь ласка, виберіть категорію."}
        fullWidth
        margin="normal"
      />
      <ReactQuill theme="snow" value={value} onChange={setValue} modules={modules} />
      {error.content && <p className={styles.error}>Будь ласка, введіть текст статті.</p>}
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      {error.image && <p className={styles.error}>Будь ласка, завантажте головне зображення статті.</p>}
      {image && <p>Завантажене зображення: {image.name}</p>}
      <Button variant="contained" color="primary" onClick={handleSubmit}>Save</Button>
    </div>
  );
}

export default Editor;
