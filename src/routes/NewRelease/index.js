import React from 'react';
import styles from './newRelease.module.css';

import NewRelease1 from '../../assets/new-release1.webp';
import NewRelease2 from '../../assets/new-release2.webp';
import NewRelease3 from '../../assets/new-release3.webp';
import NewRelease4 from '../../assets/new-release4.webp';
import NewRelease5 from '../../assets/new-release5.webp';

import Header from '../../component/Header/header';
import Menu from '../../component/Menu/menu';
import Item from './item/item';

const NewRelease = () => {
  return (
    <div className={styles.body}>
      <Header icon="back">NEW RELEASE</Header>
      <Menu />
      <div className={styles.productContainer}>
        <Item name="Nebulizer" price="P1500" img={NewRelease1}></Item>
        <Item
          name="Pill Brand"
          desc="Pill Generic Name"
          price="P1000"
          img={NewRelease2}
        ></Item>
        <Item name="IV" price="P1000" img={NewRelease3}></Item>
        <Item name="Heart Rate Monitor" price="700" img={NewRelease4}></Item>
        <Item name="Thermometer" price="P200" img={NewRelease5}></Item>
      </div>
    </div>
  );
};

export default NewRelease;
