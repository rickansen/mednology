import React from 'react';
import styles from './main.css';

import Button from '../../component/Button/button';

const { imgContainer } = styles;

const Splash = () => {
  return (
    <>
      <div className="imgContainer">
        <img src="https://via.placeholder.com/150?text=Logo" alt="logo"></img>
      </div>
      <Button>GET STARTED</Button>
    </>
  );
};

export default Splash;
