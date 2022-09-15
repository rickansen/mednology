import React from 'react';
import styles from './address.module.css';

const Address = ({ title, address, number }) => {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.title}>{title}</p>
        <p className={styles.address}>{address}</p>
        <p className={styles.address}>{number}</p>{' '}
        <button className={styles.button}>VIEW AVAILABLE PRODUCTS</button>
      </div>
    </>
  );
};

export default Address;
