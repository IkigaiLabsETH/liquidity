import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../styles/Home.module.css';

const EthereumComponent: React.FC = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

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
    <div className={styles.ethereumDetails}>
      <p className={styles.ethereumDetails}>Market Cap (USD): ${data.market_data.market_cap.usd}</p>
      <p className={styles.ethereumDetails}>Total Volume (USD): ${data.market_data.total_volume.usd}</p>
      <p className={styles.ethereumDetails}>High 24h (USD): ${data.market_data.high_24h.usd}</p>
      <p className={styles.ethereumDetails}>Low 24h (USD): ${data.market_data.low_24h.usd}</p>
    </div>
  );
};

export default EthereumComponent;
