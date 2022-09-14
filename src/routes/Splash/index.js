import React from 'react';
import styles from './splash.module.css';

import Button from '../../component/Button/button';

const Splash = () => {
  return (
    <>
      <div className={styles.imgContainer}>
        <img src="https://via.placeholder.com/174?text=Logo" alt="logo"></img>
      </div>
      <Button link="Login">GET STARTED</Button>
    </>
  );
};

export default Splash;
