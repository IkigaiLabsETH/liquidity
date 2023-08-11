import { useEffect, useState } from 'react';
import { fetchTrendingCoins, Coin } from '../lib/coingecko';
import styles from "../styles/Trending.module.css";

const Trending: React.FC = () => {
  const [trendingCoins, setTrendingCoins] = useState<Coin[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTrendingCoins();
        data.sort((a, b) => b.market_data.price_change_percentage_24h - a.market_data.price_change_percentage_24h);
        setTrendingCoins(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <main className={styles.main}>
      <h2 className={styles.trendingTitle}>Trending Coins</h2>
      <div className={styles.trendingCoins}>
        {trendingCoins.slice(0, 3).map((coin) => (
          <div key={coin.id} className={styles.trendingCoin}>
            <h4>{coin.symbol.toUpperCase()}</h4>
            <p>${coin.market_data.current_price.usd.toFixed(2)}</p>
            <p className={coin.market_data.price_change_percentage_24h < 0 ? styles.decrease : styles.increase}>
              {coin.market_data.price_change_percentage_24h.toFixed(2)}%
            </p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Trending;
