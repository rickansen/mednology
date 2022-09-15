import React from 'react';
import styles from './login.module.css';

import Button from '../../component/Button/button';
import Logo from '../../assets/logo.png';

const Login = () => {
  return (
    <>
      <div className={styles.imgContainer}>
        <img src={Logo} alt="Logo" width="134" height="134" />
        <span>MEDNOLOGY</span>
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
