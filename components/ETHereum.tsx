import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../styles/Home.module.css';

const EthereumComponent: React.FC = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/ethereum')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.main}>
      <h1 className={styles.ethereumHeader}>{data.name} ({data.symbol.toUpperCase()})</h1>
      <p className={styles.ethereumDetails}>Current Price (USD): ${data.market_data.current_price.usd}</p>
      <p className={styles.ethereumDetails}>Market Cap (USD): ${data.market_data.market_cap.usd}</p>
      <p className={styles.ethereumDetails}>Total Volume (USD): ${data.market_data.total_volume.usd}</p>
      <p className={styles.ethereumDetails}>High 24h (USD): ${data.market_data.high_24h.usd}</p>
      <p className={styles.ethereumDetails}>Low 24h (USD): ${data.market_data.low_24h.usd}</p>
      <p className={styles.ethereumDetails}>All Time High (USD): ${data.market_data.ath.usd}</p>
      <p className={styles.ethereumDetails}>All Time Low (USD): ${data.market_data.atl.usd}</p>
      <p className={styles.ethereumDetails}>Total Supply: {data.market_data.total_supply}</p>
      <p className={styles.ethereumDetails}>Circulating Supply: {data.market_data.circulating_supply}</p>
    </div>
  );
};

export default EthereumComponent;
