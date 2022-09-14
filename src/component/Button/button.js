import React from 'react';
import styles from './button.css';
import { Link } from 'react-router-dom';

const { button, container } = styles;

const Button = ({ children, link }) => {
  return (
    <a href={link} className="button">
      <div className="container">{children}</div>
    </a>
  );
};

export default Button;
