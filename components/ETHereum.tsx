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
    <div className={styles.ethereumDetails }>
      <h2 className={styles.ethereumDetails}>MC: ${data.market_data.market_cap.usd}</h2>
      <h2 className={styles.ethereumDetails}>Volume: ${data.market_data.total_volume.usd}</h2>
    </div>
  );
};

export default EthereumComponent;
