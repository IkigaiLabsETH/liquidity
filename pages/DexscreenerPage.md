// pages/DexscreenerPage.tsx

import React from 'react';
import Head from 'next/head';
import DexscreenerInfo from '../components/DexscreenerInfo';
import styles from '../styles/Home.module.css';

const DexscreenerPage: React.FC = () => {
  const tokenAddress = '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9'; // Aave
  const refreshInterval = 60000; // 1 minute (in milliseconds)

  return (
    <div className={styles.main}>
      <Head>
        <title>Dexscreener API</title>
        <meta name="description" content="Token information from Dexscreener." />
      </Head>

      <main className={styles.main}>
        <DexscreenerInfo tokenAddress={tokenAddress} refreshInterval={refreshInterval} />
      </main>
    </div>
  );
};

export default DexscreenerPage;
