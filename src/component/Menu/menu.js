import React from 'react';
import styles from './menu.module.css';

import { Link } from 'react-router-dom';

import { ReactComponent as Home } from '../../assets/home.svg';
import { ReactComponent as RemindMenu } from '../../assets/remind-menu.svg';
import { ReactComponent as User } from '../../assets/user.svg';
import { ReactComponent as Cart } from '../../assets/cart.svg';
import { ReactComponent as Mail } from '../../assets/mail.svg';

const Menu = () => {
  return (
    <>
      <div className={styles.menu}>
        {' '}
        <Link to="/">
          <Home className={styles.icon} />
        </Link>
        <User className={styles.icon} />
        <Link to="/Reminder">
          <RemindMenu className={styles.icon} />
        </Link>
        <Mail className={styles.icon} />
        <Cart className={styles.icon} />
      </div>
    </>
  );
};

export default Menu;
