import axios from 'axios';

export const fetchEthereumData = async () => {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/coins/ethereum');
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
