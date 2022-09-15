import React from 'react';
import styles from './header.module.css';

import { Link } from 'react-router-dom';
import { ReactComponent as Menu } from '../../assets/hamburger-menu.svg';
import { ReactComponent as Back } from '../../assets/back.svg';

const Header = ({ icon, children }) => {
  return (
    <>
      <div className={styles.header}>
        {icon === 'menu' ? (
          <Menu />
        ) : (
          <Link to="/Home">
            <Back />
          </Link>
        )}
        <h1>{children}</h1>

        <Menu />
      </div>
    </>
  );
};

export default Header;
