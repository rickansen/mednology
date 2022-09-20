import React from 'react';
import styles from './teleconsultation.module.css';

import Telecon from '../../assets/teleconsult.webp';

import Header from '../../component/Header/header';
import Menu from '../../component/Menu/menu';
const Teleconsultation = () => {
  return (
    <div className={styles.body}>
      <Header icon="back">TELECONSULTATION</Header>
      <Menu />

      <img src={Telecon} className={styles.img} alt="Doctor" />

      <form className={styles.form}>
        <label className={styles.flex}>
          First Name
          <input type="text" className={styles.input} />
        </label>
        <label className={styles.flex}>
          Last Name
          <input type="text" className={styles.input} />
        </label>
        <label className={styles.flex}>
          Mobile Number
          <input type="text" className={styles.input} />
        </label>
        <button className={styles.button}>Next</button>
      </form>
    </div>
  );
};

export default Teleconsultation;
