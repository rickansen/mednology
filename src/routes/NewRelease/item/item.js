import React from 'react';
import styles from './item.module.css';

//import { ReactComponent as Next } from '../../assets/next.svg';

import Product from '../../../assets/product.webp';

const Item = ({ name, desc, price }) => {
  return (
    <>
      <div className={styles.container}>
        <img src={Product} className={styles.img} alt="product item" />
        <div className={styles.descContainer}>
          <span className={styles.name}>{name}</span>
          <span className={styles.desc}>{desc}</span>
          <span className={styles.price}>{price}</span>
        </div>
      </div>
    </>
  );
};

export default Item;
