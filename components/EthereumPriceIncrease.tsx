'use client'
import React, { useEffect, useState } from 'react';
import { fetchHistoricalPrice } from '../lib/coingecko';
import styles from "../styles/Home.module.css";


const EthereumPriceIncrease: React.FC = () => {
  const [priceData, setPriceData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchHistoricalPrice();
      setPriceData(data);
    };

    fetchData();
  }, []);

  const calculatePriceIncrease = () => {
    if (priceData.length < 2) {
      return 0;
    }

    const startPrice = priceData[0][1];
    const endPrice = priceData[priceData.length - 1][1];

    const priceIncrease = ((endPrice - startPrice) / startPrice) * 100;
    return priceIncrease.toFixed(2);
  };

  return (
    <main className={styles.main}>
      <h2 className={styles.ethereumTreasury}>ETH MoM</h2>

      <EthereumPriceIncrease />
    </main>
  );
};

export default EthereumPriceIncrease;
