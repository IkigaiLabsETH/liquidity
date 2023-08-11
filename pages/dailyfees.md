// pages/dailyfees.tsx

import React from 'react';
import DailyFees from '../components/DailyFees';
import styles from '../styles/Home.module.css';

const DailyFeesPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <DailyFees />
      </main>
    </div>
  );
};

export default DailyFeesPage;





