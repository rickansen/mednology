import React from 'react';
import styles from './menu.module.css';

//import { Link } from 'react-router-dom';
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
        <Home className={styles.icon} />
        <User className={styles.icon} />
        <RemindMenu className={styles.icon} />
        <Mail className={styles.icon} />
        <Cart className={styles.icon} />
      </div>
    </>
  );
};

export default Menu;
