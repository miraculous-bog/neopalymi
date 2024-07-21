// MemberCard.jsx
import React from 'react';
import styles from './article.module.scss';
import Button from '@mui/material/Button'; // Corrected import
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import URL from '../../../helper/data';

function Article({ id, title, category, image, createdDate, isVisibleBtn,onDelete }) {
  return (
    <motion.div
      className={styles.articleCard}
      whileHover={{ scale: 1.05 }}
    >
      <Link to={`/blog/${id}`}>
        <div className={styles.imgBlock}>
          <img src={`${URL}/${image}`} alt={`${title}`} className={styles.img} />
        </div>
        <p className={styles.title}>{title}</p>
        <div className={styles.category}>{category}</div>
      </Link>
      {isVisibleBtn ? <Button onClick={() => onDelete(id)} variant="contained" color="error" sx={{ display: 'block', margin: '10px 0 10px 0' }}>
        Видалити статтю
      </Button> : null}

    </motion.div >
  );
}

export default Article;
