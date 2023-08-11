'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../styles/Home.module.css';

interface MarketData {
  market_cap: {
    usd: number;
  };
  total_volume: {
    usd: number;
  };
  // ... other fields you expect
}

interface EthereumData {
  market_data: MarketData;
  // ... other fields you expect
}


// Utility function to format numbers with commas
const formatNumber = (num) => {
  return num.toLocaleString();
};

const EthereumComponent: React.FC = () => {
  const [data, setData] = useState<EthereumData | null>(null);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/ethereum')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
        setError("Failed to fetch data");
      });
  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.ethereumDetails }>
    <div className={styles.ethereumDetails}>
      <h2 className={styles.ethereumDetails}>MC: ${formatNumber(data.market_data.market_cap.usd)}</h2>
      <h2 className={styles.ethereumDetails}>24h Vol: ${formatNumber(data.market_data.total_volume.usd)}</h2>
    </div>
    </div>
  );
};

export default EthereumComponent;
