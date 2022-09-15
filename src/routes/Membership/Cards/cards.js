import React from 'react';
import styles from './cards.module.css';

import { ReactComponent as Next } from '../../../assets/next.svg';

const Cards = ({ title, desc, benefits, logo }) => {
  return (
    <>
      <div className={styles.container}>
        <img src={logo} width="100" height="100" alt="membership benefits" />
        <div className={styles.descContainer}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.desc}>{desc}</p>
          <span className={styles.benefits}>{benefits}</span>
        </div>
        <Next className={styles.svg} />
      </div>
    </>
  );
};

export default Cards;
