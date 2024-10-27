import React, { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import URL from '../../helper/data';
import styles from './newsCard.module.scss';
import sanitizeHtml from 'sanitize-html';

const NewsCard = ({ title, contentData, isAuthorized, handleDelete, handleUpdate, heroId }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [shortHtml, setShortHtml] = useState("");
  const [fullHtml, setFullHtml] = useState("");
  const [contentHeight, setContentHeight] = useState('auto');

  const maxLength = 1260;
  const contentRef = useRef(null);

  const truncateAndSanitizeHtml = (html, maxLength) => {
    let totalLength = 0;
    let truncatedHtml = "";

    const cleanHtml = sanitizeHtml(html, {
      allowedTags: ['b', 'i', 'em', 'strong', 'a', 'ul', 'li', 'p', 'img', 'h1', 'h2', 'h3'],
      allowedAttributes: {
        'a': ['href'],
        'img': ['src']
      },
      textFilter: (text) => {
        totalLength += text.length;
        if (totalLength <= maxLength) {
          return text;
        } else if (totalLength > maxLength && truncatedHtml === "") {
          return text.slice(0, maxLength - totalLength + text.length) + "...";
        }
        return '';
      }
    });

    return cleanHtml;
  };

  useEffect(() => {
    if (contentData.length > maxLength) {
      setShortHtml(truncateAndSanitizeHtml(contentData, maxLength) + '...'); // Додаємо три крапки після обрізаного тексту
      setFullHtml(sanitizeHtml(contentData)); // Очищаємо весь HTML для повного показу
      setShowButton(true);
    } else {
      setShortHtml(sanitizeHtml(contentData)); // Очищений HTML без обрізки
      setFullHtml(sanitizeHtml(contentData));
      setShowButton(false);
    }
  }, [contentData]);

  // Після відображення контенту визначаємо його повну висоту
  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(isExpanded ? `${contentRef.current.scrollHeight}px` : '200px');
    }
  }, [isExpanded, fullHtml]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

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
        <div className={styles.text}>
          <h3 className={styles.title}>{title}</h3>

          <motion.div
            initial={false}
            animate={{ height: contentHeight }}
            transition={{ duration: 0.5 }}
            style={{ overflow: 'hidden' }}
          >
            <div
              className={styles.info}
              ref={contentRef}
              dangerouslySetInnerHTML={{ __html: isExpanded ? fullHtml : shortHtml }}
            />
          </motion.div>
          {showButton && (
            <button className={styles.button} onClick={toggleExpand}>
              {isExpanded ? "Згорнути" : "Читати більше"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
