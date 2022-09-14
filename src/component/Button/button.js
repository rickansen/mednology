import React from 'react';
import styles from './button.module.css';
import { Link } from 'react-router-dom';

const Button = ({ children, link }) => {
  return (
    <a href={link} className={styles.button}>
      <div className={styles.container}>{children}</div>
    </a>
  );
};

export default Button;
