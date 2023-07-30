// components/LidoInfo.tsx

import React, { useEffect, useState } from 'react';
import { fetchTokenInfo } from '../lib/coingecko';

const LidoInfo: React.FC = () => {
  const [tokenInfo, setTokenInfo] = useState<any | null>(null);

  useEffect(() => {
    const fetchLidoInfo = async () => {
      try {
        const tokenData = await fetchTokenInfo('lido');
        setTokenInfo(tokenData);
      } catch (error) {
        console.error('Error fetching Lido token info:', error);
      }
    };

    fetchLidoInfo();
  }, []);

  return (
    <div>
      <h2>Lido (LDO) Information</h2>
      {tokenInfo ? (
        <div>
          <p>Name: {tokenInfo.name}</p>
          <p>Symbol: {tokenInfo.symbol}</p>
          <p>Current Price (USD): ${tokenInfo.current_price}</p>
          <p>Market Cap (USD): ${tokenInfo.market_cap}</p>
          <p>Total Volume (USD): ${tokenInfo.total_volume}</p>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default LidoInfo;
