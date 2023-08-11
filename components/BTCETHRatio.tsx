'use client'
// components/BTCETHRatio.tsx
import React, { useEffect, useState } from 'react';
import { fetchCryptoData } from '../lib/coingecko';


interface RatioState {
  btcToEth: string | null;
  ethToBtc: string | null;
}

const BTCETHRatio: React.FC = () => {
  const [ratio, setRatio] = useState<RatioState>({ btcToEth: null, ethToBtc: null });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRatio = async () => {
      try {
        const data = await fetchCryptoData(['bitcoin', 'ethereum']);

        if (data.bitcoin && data.bitcoin.usd && data.ethereum && data.ethereum.usd) {
          const btcToEthRatio = (data.bitcoin.usd / data.ethereum.usd).toFixed(2);
          const ethToBtcRatio = (data.ethereum.usd / data.bitcoin.usd).toFixed(2);

          setRatio({
            btcToEth: btcToEthRatio,
            ethToBtc: ethToBtcRatio
          });
        } else {
          setError('Invalid data from API');
        }
      } catch (e) {
        setError('Failed to fetch data');
      }
    };

    fetchRatio();
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      {error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <h2>BTC/ETH Ratio: {ratio.btcToEth}</h2>
          <h2>ETH/BTC Ratio: {ratio.ethToBtc}</h2>
        </>
      )}
    </div>
  );
};

export default BTCETHRatio;
