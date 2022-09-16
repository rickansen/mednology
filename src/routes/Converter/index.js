import React from 'react';
import styles from './converter.module.css';

import Header from '../../component/Header/header';
import Menu from '../../component/Menu/menu';

import Search from '../../assets/search.svg';

const Converter = () => {
  return (
    <>
      <Header icon="back">GENERIC EQUIVALENT</Header>
      <Menu />
      <div className={styles.body}>
        <form>
          <img src={Search} className={styles.search} alt="search icon" />
          <input className={styles.input} defaultValue="          " />
        </form>
        <table className={styles.table}>
          <tr className={styles.header}>
            <td>DRUG BRAND NAME</td>
            <td>GENERIC EQUIVALENT</td>
          </tr>
          <tr>
            <td>ACCOLATE</td>
            <td>zafirlukast</td>
          </tr>
          <tr className={styles.alt}>
            <td>ACLOVATE</td>
            <td>alclometasone</td>
          </tr>
          <tr>
            <td>ATIVAN</td>
            <td>lorazepam</td>
          </tr>
          <tr className={styles.alt}>
            <td>AXID</td>
            <td>nizatidine</td>
          </tr>
          <tr>
            <td>BACTROBAN</td>
            <td>mupirocin</td>
          </tr>
          <tr className={styles.alt}>
            <td>BENTYL</td>
            <td>dicyclomine</td>
          </tr>

          <tr>
            <td>CLARITIN</td>
            <td>loratadine</td>
          </tr>
          <tr className={styles.alt}>
            <td>DEMEROL</td>
            <td>meperidine</td>
          </tr>
          <tr>
            <td>DURAGESIC</td>
            <td>fentanyl transdermal</td>
          </tr>
          <tr className={styles.alt}>
            <td>FLOMAX</td>
            <td>tamsulosin</td>
          </tr>
          <tr>
            <td>ISORDIL</td>
            <td>isosorbide dinitrate</td>
          </tr>

          <tr className={styles.alt}>
            <td>KLONOPIN</td>
            <td>clonazepam</td>
          </tr>

          <tr>
            <td>LITHOBID</td>
            <td>lithium carbonate</td>
          </tr>
          <tr className={styles.alt}>
            <td>LOMOTIL</td>
            <td>diphenoxylate / atropine</td>
          </tr>
          <tr>
            <td>MAXIDONE</td>
            <td>hydrocodone / acetaminophen</td>
          </tr>
          <tr className={styles.alt}>
            <td>NEOSPORIN</td>
            <td>neomycin / polymyxin B / gramicidin</td>
          </tr>
          <tr>
            <td>ORAPRED</td>
            <td>prednisolone sodium phosphate</td>
          </tr>
          <tr className={styles.alt}>
            <td>PACERONE</td>
            <td>amiodarone</td>
          </tr>
          <tr>
            <td>PERSANTINE</td>
            <td>dipyridamole</td>
          </tr>
          <tr className={styles.alt}>
            <td>PROZAC</td>
            <td>fluoxetine</td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default Converter;
