import React from 'react';
import styles from './membership.module.css';

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
      <Cards></Cards>
      <Cards></Cards>
      <Cards></Cards>
    </div>
  );
};

export default Membership;
