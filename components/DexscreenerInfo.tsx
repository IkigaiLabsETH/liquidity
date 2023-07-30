// components/DexscreenerInfo.tsx

import React, { useEffect, useState } from 'react';
import { fetchTokenData } from '../lib/dexscreener';

interface TokenData {
  priceUsd?: string;
  volume: {
    h24: number;
  };
  priceChange: {
    h24: number;
  };
}

const DexscreenerInfo: React.FC<{ tokenAddress: string; refreshInterval: number }> = ({
  tokenAddress,
  refreshInterval,
}) => {
  const [tokenData, setTokenData] = useState<TokenData | null>(null);

  useEffect(() => {
    const fetchTokenInfo = async () => {
      try {
        const data: TokenData = await fetchTokenData(tokenAddress);
        setTokenData(data);
      } catch (error) {
        console.error('Error fetching token data:', error);
      }
    };

    // Fetch initial data
    fetchTokenInfo();

    // Poll for new data at the specified refresh interval
    const intervalId = setInterval(fetchTokenInfo, refreshInterval);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [tokenAddress, refreshInterval]);

  return (
    <div>
      <h2>Token Information for Address: {tokenAddress}</h2>
      {tokenData ? (
        <div>
          {tokenData.priceUsd && <p>Price (USD): ${tokenData.priceUsd}</p>}
          <h3>Volume:</h3>
          <p>24 Hours: {tokenData.volume?.h24}</p>
          <h3>Price Change:</h3>
          <p>24 Hours: {tokenData.priceChange.h24}%</p>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default DexscreenerInfo;
