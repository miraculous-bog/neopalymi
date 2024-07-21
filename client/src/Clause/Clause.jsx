import React, { useEffect, useState } from 'react';
import styles from './clause.module.scss';
import Button from '@mui/material/Button';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';

import URL from '../helper/data';
function Clause() {
  const [article, setArticle] = useState(null);
  const { id } = useParams(); // Отримуємо id з URL

  useEffect(() => {
    // Функція для завантаження інформації про статтю
    const fetchArticle = async () => {
      try {
        const response = await fetch(`${URL}/api/article/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setArticle(data); // Записуємо отримані дані в стан
      } catch (error) {
        console.error("Could not fetch article:", error);
      }
    };

    fetchArticle();
  }, [id]); // Перезавантажуємо дані, коли id змінюється

  if (!article) {
    return <div>Loading...</div>;
  }
  console.log(article);
  return (
    <div className={styles.wrraper}>
      <h1 className={styles.title}>{article.title}</h1>
      <p className={styles.category}>{article.category}{article.title}</p>
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: article.content }}></div>
    </div>
  );
}

export default Clause;
