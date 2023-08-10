// pages/duneData.tsx

import React, { FC, useState, useEffect } from 'react';
import DuneAnalyticsData from '../components/DuneAnalyticsData';
import { fetchDataFromDune } from '../lib/dune';
import styles from '../styles/Home.module.css';

const DuneDataPage: FC = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const queryID = 1215383; // Replace with your actual query ID
    const parameters = [
      {queryID, parameters} // queryID, parameters Replace with your actual parameters
    ];

    fetchDataFromDune(queryID, parameters).then(setData);
  }, []);

  return (
    <div className={styles.container}>
    <DuneAnalyticsData />
  </div>

  );
};

export default DuneDataPage;
