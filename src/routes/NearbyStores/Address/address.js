import React from 'react';
import styles from './address.module.css';

const Address = ({ title, address, number }) => {
  return (
    <>
      <div className={styles.container}>
        <div>
          <p className={styles.title}>{title}</p>
          <p className={styles.address}>{address}</p>
          <p className={styles.address}>{number}</p>
        </div>

        <div className={styles.buttonContainer}>
          <button className={styles.button}>VIEW AVAILABLE PRODUCTS</button>
        </div>
      </div>
    </>
  );
};

export default Address;
