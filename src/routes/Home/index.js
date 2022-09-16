import React from 'react';
import styles from './home.module.css';
import { Link } from 'react-router-dom';

import NewRelease1 from '../../assets/new-release1.webp';
import NewRelease2 from '../../assets/new-release2.webp';
import NewRelease3 from '../../assets/new-release3.webp';

import Header from '../../component/Header/header';
import Menu from '../../component/Menu/menu';
import Features from './Features/features';

import PromoPmat from '../../assets/promo-pmat1.webp';

import { ReactComponent as Next } from '../../assets/next.svg';
import { ReactComponent as Search } from '../../assets/search.svg';
import { ReactComponent as RightArrow } from '../../assets/right-arrow.svg';

const Home = () => {
  return (
    <>
      <div className={styles.body}>
        <Header icon="menu">MEDNOLOGY</Header>
        <Menu />
        <div className={styles.preBanner}>
          <div className={styles.address}>
            <span>Deliver to 123 House, Street, City</span>
            <Next />
          </div>
          <form>
            <input className={styles.input} defaultValue="        " />
            <Search className={styles.search} />
          </form>
        </div>

        <img
          className={styles.promoPmat}
          src={PromoPmat}
          alt="Promo Pubmat"
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
            <Features icon="others" link="/Partners">
              Partners
            </Features>
          </div>
        </div>

        <div className={styles.newRelease}>
          <h2 className={styles.header}>NEW RELEASES</h2>
          <div className={styles.placeholderContainer}>
            <img
              src={NewRelease1}
              className={styles.placeholder}
              alt="new release"
            />
            <img
              src={NewRelease2}
              className={styles.placeholder}
              alt="new release"
            />
            <img
              src={NewRelease3}
              className={styles.placeholder}
              alt="new release"
            />

            <Link to="/NewRelease">
              <RightArrow />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
