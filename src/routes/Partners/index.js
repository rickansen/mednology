import React from 'react';
import styles from './partners.module.css';

import Partner1 from '../../assets/partner1.webp';
import Partner2 from '../../assets/partner2.webp';
import Partner3 from '../../assets/partner3.webp';
import Partner4 from '../../assets/partner4.webp';
import Partner5 from '../../assets/partner5.webp';
import Partner6 from '../../assets/partner6.webp';
import Header from '../../component/Header/header';
import Menu from '../../component/Menu/menu';

const Partners = () => {
  return (
    <>
      <Header icon="back">Partners</Header>
      <Menu />
      <div className={styles.body}>
        <div className={styles.container}>
          <img src={Partner1} className={styles.img} alt="our partner" />
          <img src={Partner2} className={styles.img} alt="our partner" />
        </div>
        <div className={styles.container}>
          <img src={Partner3} className={styles.img} alt="our partner" />
          <img src={Partner4} className={styles.img} alt="our partner" />
        </div>
        <div className={styles.container}>
          <img src={Partner5} className={styles.img} alt="our partner" />
          <img src={Partner6} className={styles.img} alt="our partner" />
        </div>
      </div>
    </>
  );
};

export default Partners;
