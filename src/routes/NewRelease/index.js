import React from 'react';
import styles from './newRelease.module.css';

import Header from '../../component/Header/header';
import Menu from '../../component/Menu/menu';
import Item from './item/item';

//import { ReactComponent as Next } from '../../assets/next.svg';

const NewRelease = () => {
  return (
    <div className={styles.body}>
      <Header icon="back">NEW RELEASE</Header>
      <Menu />
      <div className={styles.productContainer}>
        <Item name="Brand name 1" desc="Generic Name 1" price="P200"></Item>
        <Item name="Brand name 2" desc="Generic Name 2" price="P220"></Item>
        <Item name="Brand name 3" desc="Generic Name 3" price="P231"></Item>
        <Item name="Brand name 4" desc="Generic Name 4" price="P220"></Item>
        <Item name="Brand name 5" desc="Generic Name 5" price="P123"></Item>
        <Item name="Brand name 6" desc="Generic Name 6" price="P256"></Item>
        <Item name="Brand name 7" desc="Generic Name 7" price="P675"></Item>
        <Item name="Brand name 8" desc="Generic Name 8" price="P111"></Item>
      </div>
    </div>
  );
};

export default NewRelease;
