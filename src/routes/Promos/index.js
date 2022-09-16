import React from 'react';
import styles from './promos.module.css';

import PromoPic from '../../assets/promo-pic1.webp';
import PromoPic2 from '../../assets/promo-pic2.webp';
import PromoPic3 from '../../assets/promo-pic3.webp';
import PromoPic4 from '../../assets/promo-pic4.webp';
import PromoPic5 from '../../assets/promo-pic5.webp';

import Header from '../../component/Header/header';
import Menu from '../../component/Menu/menu';
import Comp from './Comp/comp';

const Promos = () => {
  return (
    <>
      <div className={styles.body}>
        <Header icon="back">PROMOS</Header>
        <Menu />
        <img
          src={PromoPic}
          className={styles.banner}
          alt="Promo page banner"
        />{' '}
        <h1 className={styles.header}>Latest Promos</h1>
        <div className={styles.compContainer}>
          <Comp title="Free delivery" img={PromoPic2} />
          <Comp title="Get Souvenirs" img={PromoPic3} />
        </div>
        <div className={styles.compContainer}>
          <Comp title="Buy 2 Get 1" img={PromoPic4} />
          <Comp title="Buy 1 Get 1" img={PromoPic5} />
        </div>
      </div>
    </>
  );
};

export default Promos;
