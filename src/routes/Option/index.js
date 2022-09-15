import React from 'react';
import styles from './option.module.css';

import Button from '../../component/Button/button';
import Logo from '../../assets/logo.png';

const Option = () => {
  return (
    <>
      <div className={styles.imgContainer}>
        <img src={Logo} alt="Logo" width="134" height="134" />
        <span>MEDNOLOGY</span>
      </div>

      <div className={styles.flex}>
        <div className={styles.option}>
          <div className={styles.placeholder}></div>
          <div className={styles.placeholder}></div>
        </div>

        <Button link="/home">CONTINUE</Button>
      </div>
    </>
  );
};

export default Option;
