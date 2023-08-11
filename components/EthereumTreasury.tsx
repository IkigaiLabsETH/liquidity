'use client'

import React, { useEffect, useState } from 'react';
import { fetchEthereumTreasury } from '../lib/coingecko';

interface TreasuryData {
  total_amount: number;
  total_value_usd: number;
}

const EthereumTreasury: React.FC = () => {
  const [treasury, setTreasury] = useState<TreasuryData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTreasuryData = async () => {
      try {
        const data = await fetchEthereumTreasury();
        setTreasury(data);
      } catch (error) {
        setError('Failed to fetch data');
      }
    };

    fetchTreasuryData();
  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!treasury) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Ethereum Treasury</h2>
      <h2>USD: ${treasury.total_value_usd.toLocaleString()}</h2>
    </div>
  );
};

export default EthereumTreasury;
