import React from 'react';
import styles from './membership.module.css';

import Membership1 from '../../assets/membership1.webp';
import Membership2 from '../../assets/membership2.webp';
import Membership3 from '../../assets/membership3.webp';

import Header from '../../component/Header/header';
import Menu from '../../component/Menu/menu';
import Cards from './Cards/cards';

const Membership = () => {
  return (
    <div className={styles.body}>
      <Menu />
      <Header icon="back">MEMBERSHIP</Header>
      <h1 className={styles.header}>MEMBERSHIP SUBSCRIPTION</h1>
      <div className={styles.tab}>
        <span className={`${styles.pad} ${styles.line}`}>BROWSE</span>
        <span className={styles.pad}>MY SUBSCRIPTION</span>
      </div>
      <Cards
        title="Membership Title"
        desc="Membership description - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et "
        benefits="Benefits..."
        logo={Membership1}
      ></Cards>
      <Cards
        title="Membership Title"
        desc="Membership description - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et "
        benefits="Benefits..."
        logo={Membership2}
      ></Cards>
      <Cards
        title="Membership Title"
        desc="Membership description - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et "
        benefits="Benefits..."
        logo={Membership3}
      ></Cards>
    </div>
  );
};

export default Membership;
