import React from 'react';
import styles from './option.module.css';

import ForMe from '../../assets/for-me.webp';
import ForMyPet from '../../assets/for-my-pet.webp';
import Button from '../../component/Button/button';
import Logo from '../../assets/logo.png';

const Option = () => {
  return (
    <>
      <div className={styles.imgContainer}>
        <img src={Logo} alt="Logo" width="134" height="134" />
        <span>MEDNOLOGY</span>
      </div>

      <h1 className={styles.q}>Browsing for ..?</h1>

      <div className={styles.flex}>
        <div className={styles.option}>
          <div className={styles.picContainer}>
            <img
              src={ForMe}
              className={styles.img}
              alt="Medicine for humans option"
            />
            <span>Me</span>
          </div>
          <div className={styles.picContainer}>
            <img
              src={ForMyPet}
              className={styles.img}
              alt="Medicine for pet option"
            />
            <span>My Pet</span>
          </div>
        </div>

        <Button link="/home">CONTINUE</Button>
      </div>
    </>
  );
};

export default Option;
