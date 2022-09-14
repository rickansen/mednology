import React from 'react';
import styles from './main.css';

import Button from '../../component/Button/button';

const { imgContainer, buttons } = styles;

const Logim = () => {
  return (
    <>
      <div className="imgContainer">
        <img src="https://via.placeholder.com/134?text=Logo" alt="logo"></img>
      </div>
      <div className="buttons">
        <Button link="">Login</Button>
        <Button link="">Signup</Button>
        <Button link="">Continue as Guest</Button>
      </div>
    </>
  );
};

export default Logim;
