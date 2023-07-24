// lib/nftgo.ts
import axios from 'axios';

export interface MarketMetric {
    marketplace: string;
    volume?: number;
    transactions?: number;
    averagePrice?: number;
  }

export const fetchMarketMetrics = async (): Promise<MarketMetric[]> => {
  try {
    const response = await axios.get('https://data-api.nftgo.io/eth/v1/market/metrics', {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${NFT_GO}`  // Replace YOUR_API_KEY with your actual API key

      }
    });

    // Ensure the response is OK
    if (response.status !== 200) {
      throw new Error('Failed to fetch market metrics');
    }

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
