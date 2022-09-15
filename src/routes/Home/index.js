import React from 'react';
import styles from './home.module.css';

import Header from '../../component/Header/header';
import Features from './Features/features';

import { Link } from 'react-router-dom';

import { ReactComponent as Next } from '../../assets/next.svg';
import { ReactComponent as Search } from '../../assets/search.svg';
import { ReactComponent as RightArrow } from '../../assets/right-arrow.svg';

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
      <div>
        <div className={styles.container}>
          <Features icon="location" link="/NearbyStores">
            Nearby Stores
          </Features>
          <Features icon="release" link="/NewRelease">
            New Release
          </Features>
          <Features icon="membership" link="/Membership">
            Membership
          </Features>
          <Features icon="promos" link="/Promos">
            Promos
          </Features>
        </div>

        <div className={styles.container}>
          <Features icon="teleconsult" link="/Teleconsultation">
            Tele Consultation
          </Features>
          <Features icon="remind" link="/Reminder">
            Reminders
          </Features>
          <Features icon="convert" link="/Converter">
            Brand - Generic
          </Features>
          <Features icon="others" link="/Others">
            Others
          </Features>
        </div>
      </div>

      <div className={styles.newRelease}>
        <h2 className={styles.header}>NEW RELEASES</h2>
        <div className={styles.placeholderContainer}>
          <div className={styles.placeholder}></div>
          <div className={styles.placeholder}></div>
          <div className={styles.placeholder}></div>

          <Link to="/NewRelease">
            <RightArrow />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
