import React, { useEffect, useState } from 'react';
import { fetchTrendingGainers } from '../lib/coinmarketcap';
import styles from '../styles/Home.module.css';

const TrendingGainers: React.FC = () => {
  const [gainers, setGainers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTrendingGainers();
      setGainers(data);
    };
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Trending Gainers</h1>
      {gainers.length > 0 ? (
        gainers.map((gainer, index) => (
          <div key={index}>
            <h2>{gainer.name}</h2>
            <p>{gainer.symbol}</p>
            <p>{gainer.quote.USD.price}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TrendingGainers;
