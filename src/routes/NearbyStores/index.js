import React from 'react';
import styles from './nearbyStores.module.css';

import Header from '../../component/Header/header';
import Menu from '../../component/Menu/menu';
import Address from './Address/address';

import Location from '../../assets/location-search.svg';

//import { ReactComponent as Next } from '../../assets/next.svg';

const NearbyStores = () => {
  return (
    <>
      <div className={styles.body}>
        <Header icon="back">NEARBY STORES</Header>
        <Menu />

        <div className={styles.container}>
          <h1 className={styles.header}>FIND A STORE NEAR YOU</h1>
          <div>
            <form>
              <img src={Location} className={styles.pin} alt="search icon" />
              <input className={styles.input} />
            </form>{' '}
            <div className={styles.buttonContainer}>
              <select className={styles.button}>
                <option>5km away</option>
                <option>10km away</option>
                <option>20km away</option>
              </select>
              <button className={`${styles.button} ${styles.black}`}>
                Apply
              </button>
            </div>
          </div>
        </div>

        <Address
          title="MERCURY DRUG"
          address="Earnshaw St. cor. San Anton St., Sampaloc, Manila, 1008 Metro Manila"
          number="(02) 8734-6674 / (02) 8740-8065 / (0908) 813-7153"
        ></Address>
        <Address
          title="MERCURY DRUG"
          address="Earnshaw St. cor. San Anton St., Sampaloc, Manila, 1008 Metro Manila"
          number="(02) 8734-6674 / (02) 8740-8065 / (0908) 813-7153"
        ></Address>
        <Address
          title="MERCURY DRUG"
          address="Earnshaw St. cor. San Anton St., Sampaloc, Manila, 1008 Metro Manila"
          number="(02) 8734-6674 / (02) 8740-8065 / (0908) 813-7153"
        ></Address>
      </div>
    </>
  );
};

export default NearbyStores;
