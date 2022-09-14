import React from 'react';
import styles from './main.css';

import Button from '../../component/Button/button';

const { imgContainer } = styles;

const Splash = () => {
  return (
    <>
      <div className="imgContainer">
        <img src="https://via.placeholder.com/174?text=Logo" alt="logo"></img>
      </div>
      <Button link="Login">GET STARTED</Button>
    </>
  );
};

export default Splash;
