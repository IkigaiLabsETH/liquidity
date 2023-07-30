// pages/LidoPage.tsx

import React from 'react';
import Head from 'next/head';
import LidoInfo from '../components/LidoInfo';
import styles from '../styles/Home.module.css';

const LidoPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lido (LDO) Information</title>
        <meta name="description" content="Lido (LDO)" />
      </Head>

      <main className={styles.main}>
        <LidoInfo />
      </main>
    </div>
  );
};

export default LidoPage;
