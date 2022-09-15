import React from 'react';
import styles from './comp.module.css';

const Comp = ({ title, desc, benefits, img }) => {
  return (
    <>
      <div className={styles.body}>
        <div className={styles.container}>
          <img src={img} className={styles.img} alt="Promo" width="100" />

          <div className={styles.descContainer}>
            <h2 className={styles.title}>{title}</h2>
            <p>{desc}</p>
            <span className={styles.benefits}>{benefits}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comp;
