import React from 'react';
import styles from './home.module.css';

import Header from '../../component/Header/header';
import Features from './Features/features';

import { ReactComponent as Next } from '../../assets/next.svg';
import { ReactComponent as Search } from '../../assets/search.svg';

const Home = () => {
  return (
    <>
      <Header icon="menu">MEDNOLOGY</Header>
      <div className={styles.address}>
        <span>Deliver to 123 House, Street, City</span>
        <Next />
      </div>
      <form>
        <input className={styles.input} />
        <Search className={styles.search} />
      </form>
      <img
        src="https://via.placeholder.com/375x180?text=Promo"
        alt="Promos"
      ></img>
      <div className={styles.container}>
        <Features icon="location">Nearby Stores</Features>
        <Features icon="release">New Release</Features>
        <Features icon="membership">Membership</Features>
        <Features icon="promos">Promos</Features>
        <Features icon="teleconsult">Tele Consultation</Features>
        <Features icon="remind">Reminders</Features>
        <Features icon="convert">Brand - Generic</Features>
        <Features icon="others">Others</Features>
      </div>
    </>
  );
};

export default Home;
