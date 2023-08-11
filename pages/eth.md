import React from 'react';
import EthereumPriceIncrease from '../components/EthereumPriceIncrease';
import styles from '../styles/Home.module.css';

const TrendPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <EthereumPriceIncrease />
    </div>
  );
};

export default TrendPage;
