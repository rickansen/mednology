import React from 'react';
import styles from './features.module.css';

import { ReactComponent as Location } from '../../../assets/location.svg';
import { ReactComponent as Release } from '../../../assets/release.svg';
import { ReactComponent as Membership } from '../../../assets/membership.svg';
import { ReactComponent as Promos } from '../../../assets/promos.svg';
import { ReactComponent as Teleconsult } from '../../../assets/teleconsult.svg';
import { ReactComponent as Remind } from '../../../assets/remind.svg';
import { ReactComponent as Convert } from '../../../assets/convert.svg';
import { ReactComponent as Others } from '../../../assets/others.svg';

const Features = ({ icon, children, link }) => {
  return (
    <>
      <a href={link}>
        <div className={styles.flex}>
          <div className={styles.container}>
            {icon === 'location' ? (
              <Location className={styles.svg} />
            ) : icon === 'release' ? (
              <Release className={styles.svg} />
            ) : icon === 'membership' ? (
              <Membership className={styles.svg} />
            ) : icon === 'promos' ? (
              <Promos className={styles.svg} />
            ) : icon === 'teleconsult' ? (
              <Teleconsult className={styles.svg} />
            ) : icon === 'remind' ? (
              <Remind className={styles.svg} />
            ) : icon === 'convert' ? (
              <Convert className={styles.svg} />
            ) : icon === 'others' ? (
              <Others className={styles.svg} />
            ) : (
              1
            )}
          </div>
          {children}
        </div>
      </a>
    </>
  );
};

export default Features;
