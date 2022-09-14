import React from 'react';
import styles from './button.css';

const { button } = styles;

const Button = ({ children }) => {
  return (
    <>
      <a className="button">{children}</a>
    </>
  );
};

export default Button;
