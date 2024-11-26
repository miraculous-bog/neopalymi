import React, { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import URL from '../../helper/data';
import styles from './newsCard.module.scss';
import sanitizeHtml from 'sanitize-html';

const NewsCard = ({ title, contentData, isAuthorized, handleDelete, handleUpdate, heroId , handleDetailData}) => {

  const [showButton, setShowButton] = useState(false);
  const [fullContent, setFullContent] = useState("");
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
        <div className={styles.text}>
          <h3 className={styles.title}>{title}</h3>
            <div
              className={styles.info}
              ref={contentRef}
              dangerouslySetInnerHTML={{ __html: fullContent }}
            />
          {showButton && (
            <button className={styles.button} onClick={() => handleDetailData({title,contentData})}>
              {"Читати більше"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
