import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import { fetchMarketMetrics, MarketMetric } from '../lib/nftgo';

const MarketMetrics: React.FC = () => {
  const [metrics, setMetrics] = useState<MarketMetric[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchMarketMetrics();
        setMetrics(data);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className={styles.grid}>
      {metrics && metrics.map((metric, index) => (
        <div key={index} className={styles.card}>
          <h3>{metric.name}</h3>
          <p>Volume: {metric.volume}</p>
        </div>
      ))}
    </div>
  );
};

export default MarketMetrics;
