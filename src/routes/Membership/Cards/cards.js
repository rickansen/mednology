import React from 'react';
import styles from './cards.module.css';

import Logo from '../../../assets/logo.png';
import { ReactComponent as Next } from '../../../assets/next.svg';

const Cards = () => {
  return (
    <>
      <div className={styles.container}>
        <img src={Logo} width="100" height="100" alt="membership benefits" />
        <div className={styles.descContainer}>
          <h2>Membership Name</h2>
          <p>
            Membership description - Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et{' '}
          </p>
          <span>Benefits...</span>
        </div>
        <Next className={styles.svg} />
      </div>
    </>
  );
};

export default Cards;
