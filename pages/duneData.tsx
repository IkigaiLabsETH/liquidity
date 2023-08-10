// pages/duneData.tsx

import React, { FC } from 'react';
import DuneAnalyticsData from '../components/DuneAnalyticsData';
import styles from '../styles/Home.module.css';

const DuneDataPage: FC = () => {
  return (
    <div className={styles.container}>
      <DuneAnalyticsData />
    </div>
  );
};

export default DuneDataPage;
