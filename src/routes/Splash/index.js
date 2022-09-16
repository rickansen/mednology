import React from 'react';
import styles from './splash.module.css';

import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/diy-logo.svg';

const Splash = () => {
  return (
    <Link to="/Login" className={styles.link}>
      <div className={styles.body}>
        <div className={styles.imgContainer}>
          <Logo className={styles.logo} />
          <span className={styles.header}>MEDNOLOGY</span>
        </div>
      </div>
    </Link>
  );
};

export default Splash;
