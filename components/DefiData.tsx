'use client'

import React, { useEffect, useState } from 'react';
import { fetchDefiData } from '../lib/coingecko';


interface Defi {
  defi_market_cap: string;
  eth_market_cap: string;
  defi_to_eth_ratio: string;
  trading_volume_24h: string;
  defi_dominance: string;
  top_coin: {
    name: string;
    dominance: string;
  };
}

interface DefiDataResponse {
  data: {
    decentralized_finance_defi: Defi;
  };
}


const DefiData: React.FC = () => {
  const [data, setData] = useState<DefiDataResponse | null>(null);


  useEffect(() => {
    const fetchData = async () => {
      const defiData = await fetchDefiData();
      if (defiData) {
        setData(defiData);
      }
    };

    fetchData();
  }, []);

  if (!data || !data.data.decentralized_finance_defi) {
    return <div>Loading...</div>;
  }

  const defi = data.data.decentralized_finance_defi;
  
  return (
    <div>
      <h1>DeFi Data</h1>
      <p>Defi market cap: {defi.defi_market_cap}</p>
      <p>Ethereum market cap: {defi.eth_market_cap}</p>
      <p>Defi to Ethereum market cap ratio: {defi.defi_to_eth_ratio}</p>
      <p>Trading volume 24h: {defi.trading_volume_24h}</p>
      <p>Defi dominance: {defi.defi_dominance}</p>
      <p>Top coin name: {defi.top_coin.name}</p>
      <p>Top coin dominance: {defi.top_coin.dominance}</p>
    </div>
  );
};

export default DefiData;
