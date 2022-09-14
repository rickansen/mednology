import React from 'react';
import styles from './option.module.css';

import Button from '../../component/Button/button';

const Option = () => {
  return (
    <>
      <div className={styles.imgContainer}>
        <img src="https://via.placeholder.com/134?text=Logo" alt="logo"></img>
      </div>
      <div className={styles.option}>
        <img
          src="https://via.placeholder.com/158x191?text=Human+photo"
          alt="Human"
          className={styles.img}
        ></img>
        <img
          src="https://via.placeholder.com/158x191?text=Pet+photo"
          alt="Pet"
          className={styles.img}
        ></img>
      </div>
      <Button link="/home">CONTINUE</Button>
    </>
  );
};

export default Option;
