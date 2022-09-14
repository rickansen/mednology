import React from 'react';
import styles from './login.module.css';

import Button from '../../component/Button/button';

const Login = () => {
  return (
    <>
      <div className={styles.imgContainer}>
        <img src="https://via.placeholder.com/134?text=Logo" alt="logo"></img>
      </div>
      <div className={styles.buttons}>
        <Button link="/Option">Login</Button>
        <Button link="/Option">Signup</Button>
        <Button link="/Option">Continue as Guest</Button>
      </div>
      <img
        src="https://via.placeholder.com/375x213?text=Random_image"
        alt="logo"
        className={styles.btmImg}
      ></img>
    </>
  );
};

export default Login;
