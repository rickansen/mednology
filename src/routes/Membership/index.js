import React from 'react';
import styles from './membership.module.css';

import Logo from '../../assets/logo.png';

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
        logo={Logo}
      ></Cards>
      <Cards
        title="Membership Title"
        desc="Membership description - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et "
        benefits="Benefits..."
        logo={Logo}
      ></Cards>
      <Cards
        title="Membership Title"
        desc="Membership description - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et "
        benefits="Benefits..."
        logo={Logo}
      ></Cards>
    </div>
  );
};

export default Membership;
