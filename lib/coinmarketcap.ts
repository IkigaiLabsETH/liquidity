import axios from 'axios';

export const fetchTrendingGainers = async () => {
  try {
    const response = await axios.get(
      'https://pro-api.coinmarketcap.com/v1/cryptocurrency/trending/gainers-losers',
      {
        headers: {
          'X-CMC_PRO_API_KEY': 'YOUR_API_KEY',
        },
      }
    );

    if (response.data && response.data.data) {
      return response.data.data;
    } else {
      throw new Error('Invalid data from API');
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};
