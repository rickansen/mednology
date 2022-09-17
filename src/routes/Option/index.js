import React from 'react';
import styles from './option.module.css';

import { Link } from 'react-router-dom';

import ForMe from '../../assets/for-me.webp';
import ForMyPet from '../../assets/for-my-pet.webp';
import Logo from '../../assets/logo.png';

const Option = () => {
  return (
    <>
      <div className={styles.body}>
        <div className={styles.imgContainer}>
          <img src={Logo} alt="Logo" width="134" height="134" />
          <span>MEDNOLOGY</span>
        </div>

        <h1 className={styles.q}>Browsing for ..?</h1>

        <Link to="/Home" className={styles.link}>
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
          </div>
        </Link>
      </div>
    </>
  );
};

export default Option;
