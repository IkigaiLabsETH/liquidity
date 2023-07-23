// components/TotalMarketCap.tsx
import React, { useEffect, useState } from 'react';
import { fetchGlobalData } from '../lib/coingecko';

const TotalMarketCap: React.FC = () => {
  const [marketCap, setMarketCap] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchGlobalData();
        setMarketCap(data.data.total_market_cap.usd);
      } catch (e) {
        setError('Failed to fetch data');
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {error ? (
        <h2>{error}</h2>
      ) : (
        <h2>Total Market Cap (USD): {marketCap ? `$${marketCap.toFixed(2)}` : 'Loading...'}</h2>
      )}
    </div>
  );
};

export default TotalMarketCap;
