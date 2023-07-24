// components/BitcoinPriceDisplay.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Utility function to format numbers with commas
const formatNumber = (num) => {
  return num.toLocaleString();
};

const BitcoinPriceDisplay: React.FC = () => {
  const [price, setPrice] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBitcoinPrice = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
        if (response.data.bitcoin && response.data.bitcoin.usd) {
          setPrice(response.data.bitcoin.usd);
        } else {
          setError('Invalid data from API');
        }
      } catch (e) {
        setError('Failed to fetch data');
      }
    };

    fetchBitcoinPrice();
  }, []);

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : (
        <p>BTC: {price}</p>
      )}
    </div>
  );
};

export default BitcoinPriceDisplay;
