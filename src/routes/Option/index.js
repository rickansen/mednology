import React from 'react';
import styles from './option.module.css';

import Button from '../../component/Button/button';

const Option = () => {
  return (
    <>
      <div className={styles.imgContainer}>
        <img src="https://via.placeholder.com/134?text=Logo" alt="logo"></img>
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
