import React from 'react';
import styles from './promos.module.css';

import PromoPic from '../../assets/promo-pic1.webp';

import Header from '../../component/Header/header';
import Menu from '../../component/Menu/menu';
import Comp from './Comp/comp';

const Promos = () => {
  return (
    <>
      <div className={styles.body}>
        <Header icon="back">Promos</Header>
        <h1 className={styles.header}>Latest Promos</h1>
        <Menu />
        <Comp
          title="Promo Title"
          desc="Available promo date range"
          benefits={'Benefits...'}
          img={PromoPic}
        />
        <Comp
          title="Promo Title"
          desc="Available promo date range"
          benefits={'Benefits...'}
          img={PromoPic}
        />
      </div>
    </>
  );
};

export default Promos;
