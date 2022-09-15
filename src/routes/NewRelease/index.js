import React from 'react';
//import styles from './newRelease.module.css';

import Header from '../../component/Header/header';
import Item from './item/item';

//import { ReactComponent as Next } from '../../assets/next.svg';

const NewRelease = () => {
  return (
    <>
      <Header icon="back">NEW RELEASE</Header>
      <Item name="Brand name 1" desc="Generic Name 1" price="P200"></Item>
    </>
  );
};

export default NewRelease;
