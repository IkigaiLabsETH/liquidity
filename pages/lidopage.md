// pages/LidoPage.tsx

import React from 'react';
import LidoInfo from '../components/LidoInfo';
import styles from '../styles/Home.module.css';

const LidoPage: React.FC = () => {
  return (
    <div className={styles.container}>


      <main className={styles.main}>
        <LidoInfo />
      </main>
    </div>
  );
};

export default LidoPage;
