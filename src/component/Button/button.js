import React from 'react';
import styles from './button.module.css';

const Button = ({ children, link }) => {
  return (
    <a href={link} className={styles.button}>
      <div className={styles.container}>{children}</div>
    </a>
  );
};

export default Button;
