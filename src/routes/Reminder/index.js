import React from 'react';
import styles from './reminder.module.css';

import Water from '../../assets/water.webp';
import Header from '../../component/Header/header';
import Menu from '../../component/Menu/menu';

const Reminder = () => {
  return (
    <div className={styles.body}>
      <Header icon="back">REMINDER</Header>
      <div className={styles.container}>
        <img src={Water} className={styles.img} alt="benefits of water" />

        <div className={styles.buttonContainer}>
          <button className={styles.btn}>Add meds</button>
          <button className={styles.btn}>Edit Meds</button>
        </div>
      </div>

      <div className={styles.container}>
        <img src={Water} className={styles.img} alt="benefits of water" />

        <button className={`${styles.btn} ${styles.btn2}`}>Set reminder</button>
      </div>

      <Menu />
    </div>
  );
};

export default Reminder;
