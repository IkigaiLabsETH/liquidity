// lib/dexscreener.ts

import axios from 'axios';

// Fetch token data from Dexscreener API
export const fetchTokenData = async (tokenAddress: string) => {
  try {
    const response = await axios.get(`https://api.dexscreener.com/latest/dex/tokens/${tokenAddress}`);
    if (response.data?.data) {
      const { data } = response.data;
      return {
        priceUsd: data.priceNative,
        volume: {
          h24: data.txns.h24.buys + data.txns.h24.sells,
        },
        priceChange: {
          h24: data.priceChange.h24,
        },
      };
    } else {
      throw new Error('Invalid data from API');
    }
  } catch (error) {
    console.error('Error fetching token data from Dexscreener:', error);
    throw error;
  }
};
