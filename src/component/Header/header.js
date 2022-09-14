import React from 'react';
import styles from './header.module.css';

import { ReactComponent as Menu } from '../../assets/hamburger-menu.svg';
import { ReactComponent as Back } from '../../assets/back.svg';

const Header = ({ icon, children }) => {
  return (
    <>
      <div className={styles.header}>
        {icon === 'menu' ? <Menu /> : <Back />}
        <h1>{children}</h1>
        <Menu />
      </div>
    </>
  );
};

export default Header;
