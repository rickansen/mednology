import React from 'react';
import styles from './splash.module.css';

import Button from '../../component/Button/button';
import Logo from '../../assets/logo.png';

const Splash = () => {
  return (
    <>
      <div className={styles.imgContainer}>
        <img src={Logo} alt="Logo" width="200" />
        <span>MEDNOLOGY</span>
      </div>

      <Button link="Login">GET STARTED</Button>
    </>
  );
};

export default Splash;
