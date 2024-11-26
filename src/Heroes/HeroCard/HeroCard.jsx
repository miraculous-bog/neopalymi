import React, { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import URL from '../../helper/data';
import styles from './heroCard.module.scss';
import sanitizeHtml from 'sanitize-html';

const HeroCard = ({ name, contentData, mainPhoto, isAuthorized, handleDelete, handleUpdate, heroId,handleDetailData }) => {
  const [fullContent, setFullContent] = useState("");
  const [showButton, setShowButton] = useState(false);

  const maxLength = 1260;
  const contentRef = useRef(null); // Посилання на блок з текстом

  const truncateAndSanitizeHtml = (html, maxLength) => {
    let totalLength = 0;
    let truncatedHtml = "";

    const cleanHtml = sanitizeHtml(html, {
      allowedTags: ['b', 'i', 'em', 'strong', 'a', 'ul', 'li', 'p'], // Дозволені теги
      allowedAttributes: {
        'a': ['href'],
      },
      textFilter: (text) => {
        totalLength += text.length;
        if (totalLength <= maxLength) {
          return text; // Повертаємо весь текст, якщо ще в межах ліміту
        } else if (totalLength > maxLength && truncatedHtml === "") {
          return text.slice(0, maxLength - totalLength + text.length) + "..."; // Обрізаємо текст і додаємо три крапки
        }
        return ''; // Інакше не повертаємо нічого, тому що виходимо за ліміт
      }
    });

    return cleanHtml;
  };

  useEffect(() => {
    if (contentData.length > maxLength) {
      setFullContent(truncateAndSanitizeHtml(contentData, maxLength) + '...');
      setShowButton(true);
    } else {
      setFullContent(sanitizeHtml(contentData));
      setShowButton(false);
    }
  }, [contentData]);



  

  return (
    <div className={styles.container}>
      {isAuthorized && (
        <div className={styles.actions}>
          <DeleteIcon
            className={styles.icon}
            onClick={() => handleDelete(heroId)}
            style={{ cursor: 'pointer', marginRight: '10px', color: 'red' }}
          />
          <EditIcon
            className={styles.icon}
            onClick={() => handleUpdate(heroId)}
            style={{ cursor: 'pointer', color: 'green' }}
          />
        </div>
      )}
      <div className={styles.content}>
        <motion.img
          src={`${URL}/${mainPhoto}`} alt={`Фото ${name}`}
          className={styles.image}
        />
        <div className={styles.text}>
          <h3 className={styles.title}>{name}</h3>

            <div
              className={styles.info}
              ref={contentRef}
              dangerouslySetInnerHTML={{ __html: fullContent }}
            />
          {showButton && (
            <button className={styles.button} onClick={() => handleDetailData({name,content: contentData, mainPhoto})}>
              {"Читати більше"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
